import { NextResponse, NextRequest } from "next/server";
import MongoConnection from "../_database/database";
import dotenv from "dotenv";
import generateToken from "../middleware/token";
import hash from "../middleware/hash";

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

export async function POST(req: NextRequest) {

  const body = await req.json();
  let username: string = body.username;
  let password: string = body.password;

  let hashedPassword = await hash(password);
  let token = generateToken(username, password);
  // console.log(hashedPassword);

  return NextResponse.json({ token: hashedPassword });
}
