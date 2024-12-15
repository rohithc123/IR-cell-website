import mongoose, { Schema, model, Document } from "mongoose";

interface Iinfo extends Document {
  name: string;
  //   type: "research_intern";
  //TODO can add status to find based on deadline
  link: URL;
  location: string;
  stipend: string;
  date: Date;
  deadline: Date;
  duration: string;
  eligibility: string;
  college_nomination: string & ("YES" | "NO");
  remarks: string;
}

const infoSchema = new Schema<Iinfo>({
  name: { type: String, required: true },
  link: { type: String, required: true },
  location: { type: String, required: true },
  stipend: { type: String, required: true },
  date: { type: Date, required: true },
  deadline: { type: Date, required: true },
  duration: { type: String, required: true },
  eligibility: { type: String, required: true },
  college_nomination: { type: String, enum: ["YES", "NO"], required: true },
  remarks: { type: String, required: true },
});

// infoSchema.path("link").validate((value: string) => {
//   const urlRegex = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm;
//   return urlRegex.test(value);
// }, "Invalid URL format");

const Info = mongoose.models.Info || model<Iinfo>("Info", infoSchema);
export default Info;
