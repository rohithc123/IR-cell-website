import { NextResponse } from "next/server";
import MongoConnection from "../_database/database";
import dotenv from "dotenv";

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

export async function GET() {
  return NextResponse.json({ message: "Hello World" });
}
