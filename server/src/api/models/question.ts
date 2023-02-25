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
  statues: { type: String, required: false },
  answer: { type: String, required: false },
});

export default mongoose.model<IQuestion>("Question", QuestionSchema);
