import mongoose, { Schema, model, Document } from "mongoose";

interface Iadmin extends Document {
  email: string;
  password: string;
}

const adminSchema = new Schema<Iadmin>({
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  password: { type: String, required: true },
});

const Admin = mongoose.models?.Admin || model<Iadmin>("Admin", adminSchema);
export default Admin;
