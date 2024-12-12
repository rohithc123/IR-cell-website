import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey: string = process.env.secretKey as string;

interface Payload {
  email: string;
  password: string;
}

function generateToken(email: string, password: string): string {
  const payload: Payload = {
    email: email,
    password: password,
  };

  const token = jwt.sign(payload, secretKey, { expiresIn: "30d" });

  return token;
}

export default generateToken;
