"use server";
import { jwtVerify } from 'jose';
import Admin from "../model/admin";

const secretKey = new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key');

interface DecodedToken {
  userId: string;
  email: string;
  iat: number;
  exp: number;
}

async function validateToken(cookie: string): Promise<boolean> {
  if (!cookie) {
    console.log("No cookie");
    return false;
  }

  try {
    const { payload } = await jwtVerify(cookie, secretKey);
    const admin = await Admin.findById(payload.userId as string);
    
    if (!admin) {
      return false;
    }

    return true;
  } catch (error) {
    console.log("Token validation error:", error);
    return false;
  }
}

export default validateToken;
