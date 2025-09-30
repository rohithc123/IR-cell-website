// TEMPORARILY DISABLED FOR DEMO - MongoDB and auth imports commented out
/*
import MongoConnection from "../_database/database";
import dotenv from "dotenv";
// import generateToken from "../middleware/token";
import hash from "../services/hash";
import Admin from "../model/admin";
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
*/

import { NextRequest, NextResponse } from "next/server";
// import fs from "fs";

// DEMO CREDENTIALS - Accept any email/password for demo
const DEMO_ADMIN = {
  email: "admin@ircell.com",
  password: "demo123"
};

export async function POST(request: Request) {
  // TEMPORARILY DISABLED FOR DEMO - Accept any login for demo purposes
  try {
    const body = await request.json();
    const { email, password } = body;

    // For demo, accept any email/password or use demo credentials
    const isValidDemo = (email && password) || 
                       (email === DEMO_ADMIN.email && password === DEMO_ADMIN.password);

    if (!isValidDemo) {
      return NextResponse.json(
        { error: 'Please provide email and password for demo' },
        { status: 401 }
      );
    }

    // Create successful response without database or JWT
    const response = NextResponse.json({ 
      success: true,
      message: 'Login successful (demo mode)',
      demo: true
    });

    // Set a demo token cookie (just for UI consistency)
    response.cookies.set('token', 'demo-token-12345', {
      httpOnly: false, // Allow client-side access for demo
      secure: false,   // Disable secure for local demo
      sameSite: 'lax',
      maxAge: 86400    // 24 hours
    });

    return response;
  } catch (error) {
    console.error('Demo login error:', error);
    return NextResponse.json(
      { error: 'Demo mode error' },
      { status: 500 }
    );
  }
}
