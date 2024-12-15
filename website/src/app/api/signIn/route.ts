import MongoConnection from "../_database/database";
import dotenv from "dotenv";
import generateToken from "../middleware/token";
import hash from "../middleware/hash";
import Admin from "../model/admin";

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
  let email: string = body.email;
  let password: string = body.password;

  let hashedPassword = await hash(password);

  const user: string = await Admin.find({
    email: email,
    password: hashedPassword,
  });

  if (!user || user.length === 0) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  let token = generateToken(email, password);
  return NextResponse.json({ token: token }, { status: 200 });
}
