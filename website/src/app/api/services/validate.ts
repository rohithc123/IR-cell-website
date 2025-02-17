"use server";
import express, { NextRequest, NextResponse, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Admin from "../model/admin";
import { cookies } from "next/headers";
import * as jose from "jose";

interface DecodedToken {
  _id: string;
  email: string;
  password: string;
  iat: number;
  exp: number;
}
async function validateToken(
  cookie: string,
  req: NextRequest | express.Request
): boolean {
  console.log(cookie);

  if (!cookie || cookie == undefined) {
    console.log("No cookie");
    return false;
  }

  try {
    const secretKey = process.env.secretKey;

    // const decoded = jwt.verify(cookie, secretKey) as DecodedToken;

    const ecPrivateKey = await jose.importPKCS8(
      process.env.PRIVATE_KEY,
      "ECDH-ES+A256KW"
    );

    const { plaintext, protectedHeader, additionalAuthenticatedData } =
      await jose.generalDecrypt(JSON.parse(cookie), ecPrivateKey);

    const decoded = new TextDecoder().decode(plaintext);
    console.log("Decrypted Payload:", decoded);

    const admin = await Admin.findById(decoded._id);
    if (!admin) {
      return false;
    }

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export default validateToken;
