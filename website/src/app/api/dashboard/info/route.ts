import { NextRequest, NextResponse } from "next/server";
// TEMPORARILY DISABLED FOR DEMO - MongoDB and auth imports commented out
/*
import dotenv from "dotenv";
import { cookies } from "next/headers";
// import generateToken from "../middleware/token";
// import hash from "../middleware/hash";
import MongoConnection from "../../_database/database";
import Info from "../../model/info";
import validateToken from "../../services/validate";

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
*/

// DEMO HARDCODED DATA
const demoInfoData = [
  {
    _id: "1",
    name: "MIT Summer Research Program",
    link: "https://mit.edu/summer-research",
    location: "Cambridge, MA",
    stipend: "$5000/month",
    date: new Date("2024-06-01"),
    deadline: new Date("2024-03-15"),
    duration: "3 months",
    eligibility: "Undergraduate students in STEM fields",
    college_nomination: "YES",
    remarks: "Highly competitive program with limited slots"
  },
  {
    _id: "2", 
    name: "Google Summer of Code",
    link: "https://summerofcode.withgoogle.com",
    location: "Remote",
    stipend: "$6600",
    date: new Date("2024-05-27"),
    deadline: new Date("2024-04-02"),
    duration: "12 weeks",
    eligibility: "University students and recent graduates",
    college_nomination: "NO",
    remarks: "Open source software development program"
  },
  {
    _id: "3",
    name: "Stanford AI Research Internship",
    link: "https://stanford.edu/ai-internship",
    location: "Stanford, CA",
    stipend: "$7000/month",
    date: new Date("2024-06-15"),
    deadline: new Date("2024-03-01"),
    duration: "10 weeks",
    eligibility: "Graduate students in AI/ML",
    college_nomination: "YES",
    remarks: "Focus on machine learning and artificial intelligence"
  }
];

export async function POST(req: NextRequest, res: NextResponse) {
  // TEMPORARILY DISABLED FOR DEMO - Return success without database operations
  try {
    const body = await req.json();
    
    // Simulate adding to demo data (in real app this would save to database)
    const newInfo = {
      _id: (demoInfoData.length + 1).toString(),
      name: body.name,
      link: body.link,
      location: body.location,
      stipend: body.stipend,
      date: new Date(body.date),
      deadline: new Date(body.deadline),
      duration: body.duration,
      eligibility: body.eligibility,
      college_nomination: body.college_nomination,
      remarks: body.remarks
    };
    
    demoInfoData.push(newInfo);
    
    return NextResponse.json(
      { message: "Info added successfully (demo mode)" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Demo error" }, { status: 500 });
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  // TEMPORARILY DISABLED FOR DEMO - Return hardcoded data
  const filter = req.nextUrl.searchParams.get("name");

  try {
    let info = filter
      ? demoInfoData.filter(item => 
          item.name.toLowerCase().includes(filter.toLowerCase())
        )
      : demoInfoData;

    return NextResponse.json(info, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Demo error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  // TEMPORARILY DISABLED FOR DEMO - Simulate deletion from demo data
  try {
    const body = await req.json();
    const id = body.id;
    
    // Remove item from demo data array
    const index = demoInfoData.findIndex(item => item._id === id);
    if (index > -1) {
      demoInfoData.splice(index, 1);
    }
    
    return NextResponse.json(
      { message: "Info deleted successfully (demo mode)" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Demo error" }, { status: 500 });
  }
}
