import MongoConnection from "../_database/database";
import dotenv from "dotenv";
// import generateToken from "../middleware/token";
// import hash from "../middleware/hash";
import { NextRequest, NextResponse } from "next/server";
import Info from "../model/info";

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


export async function GET(req: NextRequest, res: NextResponse) {
  const filter = req.nextUrl.searchParams.get("name");

  try {
    let info = filter
      ? await Info.find({ name: { $regex: filter, $options: "i" } })
      : await Info.find();

    return NextResponse.json(info, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

