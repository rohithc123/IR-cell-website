import MongoConnection from "../_database/database";
import dotenv from "dotenv";
// import generateToken from "../middleware/token";
import hash from "../services/hash";
import Admin from "../model/admin";
import { NextRequest, NextResponse } from "next/server";
// import fs from "fs";

import jwt from "jsonwebtoken";
import * as jose from "jose";
import { cookies } from "next/headers";

dotenv.config();
const uri = process.env.MONGODB_URI;

if (!uri) {
  console.log("Define the MONGODB_URI environment variable inside .env");
  process.exit(1);
}

const mongoConnection = new MongoConnection(uri);
mongoConnection.connect(() => {
  console.log("Connected to MongoDB");
});

const secretKey: string = process.env.secretKey as string;

interface Payload {
  email: string;
  password: string;
}

async function generateToken(
  id: string,
  email: string,
  password: string
): Promise<string> {
  const payload: Payload = {
    _id: id,
    email: email,
    password: password,
  };

  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const ecPublicKey = await jose.importSPKI(
    process.env.PUBLIC_KEY,
    "ECDH-ES+A256KW"
  );

  const token = await new jose.GeneralEncrypt(
    new TextEncoder().encode(JSON.stringify(payload))
  )
    .setProtectedHeader({ enc: "A256GCM" })
    .addRecipient(ecPublicKey)
    .setUnprotectedHeader({ alg: "ECDH-ES+A256KW" })
    .encrypt();

  const cookieStore = await cookies();

  console.log(token);
  //TODO specify the domain before production
  await cookieStore.set("token", JSON.stringify(token), {
    httpOnly: process.env.NODE_ENV === "production",
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });

  return token;

  // const allCookies = (await cookies()).getAll();
  // console.log("All cookies:", allCookies);

  // console.log("cookie set");
  // return token;
}

export async function POST(req: NextRequest) {
  //TODO change error handling
  try {
    const body = await req.json();
    let email: string = body.email;
    let password: string = body.password;

    //TODO send hashed password from the frontend and remove this part
    let hashedPassword = await hash(password);

    const user: string = await Admin.find({
      email: email,
      password: hashedPassword,
    });

    if (!user || user.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const token = await generateToken(user[0].id, email, password);

    //TODO will remove this since we are storing it in cookies
    return NextResponse.json({ message: "Login successful" }, { status: 200 });
  } catch (error) {
    console.error("Error during sign in:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
