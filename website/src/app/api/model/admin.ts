import { Schema } from "mongoose";

interface IAdmin {
  email: string;
  password: string;
}

const adminSchema = new Schema<IAdmin>({
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  password: { type: String, required: true },
});

const admin = model<IAdmin>("Admin", adminSchema);
export default admin;
