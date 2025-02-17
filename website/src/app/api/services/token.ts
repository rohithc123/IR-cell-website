"use server";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

dotenv.config();

const secretKey: string = process.env.secretKey as string;

interface Payload {
  email: string;
  password: string;
}

async function generateToken(
  id: string,
  email: string,
  password: string
): string {

  const payload: Payload = {
    _id: id,
    email: email,
    password: password,
  };

  console.log((await cookies()).get("token")?.value);
  const allCookies = (await cookies()).getAll();
  console.log(allCookies);

  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const token = jwt.sign(payload, secretKey, { expiresIn: "7d" });
  const cookieStore = await cookies();

  cookieStore.set("token", token, {
    httpOnly: process.env.NODE_ENV !== "development",
    // secure: process.env.NODE_ENV !== "development",
    secure: false,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });

  // console.log((await cookies()).get("token")?.value);
  // const allCookies = (await cookies()).getAll();
  // console.log("All cookies:", allCookies);

  // console.log("cookie set");
  // return token;
}

export default generateToken;
