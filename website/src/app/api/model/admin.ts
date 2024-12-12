import mongoose, { Schema, model, Document } from "mongoose";

interface IAdmin extends Document {
  email: string;
  password: string;
}

const adminSchema = new Schema<IAdmin>({
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  password: { type: String, required: true },
});

const Admin = mongoose.models.Admin || model<IAdmin>("Admin", adminSchema);
export default Admin;
