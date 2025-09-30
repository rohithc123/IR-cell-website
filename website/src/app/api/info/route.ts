// TEMPORARILY DISABLED FOR DEMO - MongoDB imports commented out
/*
import MongoConnection from "../_database/database";
import dotenv from "dotenv";
// import generateToken from "../middleware/token";
// import hash from "../middleware/hash";
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
*/

import { NextRequest, NextResponse } from "next/server";

// DEMO HARDCODED DATA (same as dashboard)
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
  },
  {
    _id: "4",
    name: "Microsoft Research Internship",
    link: "https://www.microsoft.com/research/careers/internships/",
    location: "Redmond, WA",
    stipend: "$8000/month",
    date: new Date("2024-06-10"),
    deadline: new Date("2024-02-28"),
    duration: "12 weeks",
    eligibility: "PhD students in Computer Science",
    college_nomination: "NO",
    remarks: "Research in AI, ML, and Cloud Computing"
  },
  {
    _id: "5",
    name: "NASA USRP Internship",
    link: "https://nasa.gov/usrp",
    location: "Multiple NASA Centers",
    stipend: "$1200/week",
    date: new Date("2024-06-03"),
    deadline: new Date("2024-03-20"),
    duration: "10 weeks",
    eligibility: "US citizens pursuing STEM degrees",
    college_nomination: "YES",
    remarks: "Space research and exploration projects"
  }
];

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

