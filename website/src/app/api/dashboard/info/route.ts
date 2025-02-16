import MongoConnection from "../../_database/database";
import dotenv from "dotenv";
// import generateToken from "../middleware/token";
// import hash from "../middleware/hash";
import { NextRequest, NextResponse } from "next/server";
import Info from "../../model/info";

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

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    let name: string = body.name;
    let link: URL = body.link;
    let location: string = body.location;
    let stipend: string = body.stipend;
    let date: Date = body.date;
    let deadline: Date = body.deadline;
    let duration: string = body.duration;
    let eligibility: string = body.eligibility;
    let college_nomination: "YES" | "NO" = body.college_nomination;
    let remarks: string = body.remarks;

    //example of the req
    /*
    {
        "name": "Example Name",
        "link": "https://example.com",
        "location": "Example Location",
        "stipend": "1000",
        "date": "2023-10-01T00:00:00.000Z",
        "deadline": "2023-10-15T00:00:00.000Z",
        "duration": "6 months",
        "eligibility": "Example Eligibility",
        "college_nomination": "YES",
        "remarks": "Example Remarks"
    }
    */

    const info = new Info({
      name,
      link,
      location,
      stipend,
      date,
      deadline,
      duration,
      eligibility,
      college_nomination,
      remarks,
    });

    await info.save();
    return NextResponse.json(
      { message: "Info added successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

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

export async function DELETE(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    let id = body.id;
    await Info.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Info deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
