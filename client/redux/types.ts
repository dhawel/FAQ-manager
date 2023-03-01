export type Faq = {
  _id: string;
  question: string;
  category: string;
  status: string;
};
export  type FaqWithoutId = Omit<Faq, "_id">;
export interface FaqState {
  faqs: Faq[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
