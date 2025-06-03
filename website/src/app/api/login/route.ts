import MongoConnection from "../_database/database";
import dotenv from "dotenv";
// import generateToken from "../middleware/token";
import hash from "../services/hash";
import Admin from "../model/admin";
import { NextRequest, NextResponse } from "next/server";
// import fs from "fs";

import { SignJWT } from 'jose';
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

const secretKey = new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key');

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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Hash the password
    const hashedPassword = await hash(password);

    // Find user in database
    const user = await Admin.findOne({ email, password: hashedPassword });

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Create JWT token using jose (Edge-compatible)
    const token = await new SignJWT({ 
      userId: user._id,
      email: user.email 
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('24h')
      .sign(secretKey);

    // Create the response
    const response = NextResponse.json({ 
      success: true,
      message: 'Login successful'
    });

    // Set the token cookie
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 86400 // 24 hours
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
