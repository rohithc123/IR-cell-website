import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();
const saltRounds: number = 10;

if (!process.env.SALT) {
  console.log("Define the salt value variable inside .env");
}

async function hash(password: string): Promise<string> {
  try {
    const salt = process.env.SALT;
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (err) {
    throw new Error(err);
  }
}

export default hash;
