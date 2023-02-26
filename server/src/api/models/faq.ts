import mongoose, { Schema, Document } from "mongoose";

export interface IFaq extends Document {
  question: string;
  category: string;
  statues: string;
  answer: string;
}

const FaqSchema: Schema = new Schema({
  question: { type: String, required: true },
  category: { type: String, required: true },
  status: { type: String, required: false },
  answer: { type: String, required: false },
});

export default mongoose.model<IFaq>("Faq", FaqSchema);
