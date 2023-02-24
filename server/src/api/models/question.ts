import mongoose, { Schema, Document } from "mongoose";

export interface IQuestion extends Document {
  question: string;
  catagory: string;
  statues: string;
  answer: string;
}

const QuestionSchema: Schema = new Schema({
  question: { type: String, required: true },
  catagory: { type: String, required: true },
  statues: { type: String, required: true },
  answer: { type: String, required: true },
});

export default mongoose.model<IQuestion>("Question", QuestionSchema);
