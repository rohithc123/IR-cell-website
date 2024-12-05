import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey: string = process.env.secretKey as string;

interface Payload {
  username: string;
  password: string;
}

function generateToken(username: string, password: string): string {
  const payload: Payload = {
    username: username,
    password: password,
  };

  const token = jwt.sign(payload, secretKey, { expiresIn: "30d" });

  return token;
}

export default generateToken;
