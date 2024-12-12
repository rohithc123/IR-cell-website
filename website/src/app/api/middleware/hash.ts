import bcrypt from "bcrypt";

const saltRounds: number = 10;

async function hash(password: string): Promise<string> {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (err) {
    throw new Error(err);
  }
}

export default hash;
