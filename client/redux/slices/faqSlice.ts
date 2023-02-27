import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import faqApi from "./faqAPI";
import { AppState } from "../store";
import { Action } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
type Faq = {
  _id: string;
  question: string;
  category: string;
  status: string;
};
type FaqWithoutId = Omit<Faq, "_id">;
export interface FaqState {
  faqs: Faq[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export const fetchFaqs = createAsyncThunk("faq/fetchFaqs", async () => {
  const response = await faqApi.getFaqs();

  return response;
});

export const createNewFaq = createAsyncThunk(
  "faq/createNewFaq",
  async (newFaq: FaqWithoutId) => {
    const response = await faqApi.postFaq(newFaq);
    return response;
  }
);
export const updateFaq = createAsyncThunk(
  "faq/createNewFaq",
  async (updateFaq: Faq) => {
    const response = await faqApi.updateFaq(updateFaq);
    return response;
  }
);
export const deleteFaq = createAsyncThunk(
  "faq/deleteFaq",
  async (faqId: string) => {
    const response = await faqApi.deleteFaq(faqId);

    return response;
  }
);
export const searchFaq = createAsyncThunk(
  "faq/searchFaq",
  async (searchTerm: string) => {
    const response = await faqApi.searchFaq(searchTerm);

    return response;
  }
);

export const faqSlice = createSlice({
  name: "faq",
  initialState: { faqs: [], status: "idle", error: null } as FaqState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaqs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFaqs.fulfilled, (state, action: PayloadAction<Faq[]>) => {
        state.status = "succeeded";
        state.faqs = action.payload;
      })
      .addCase(fetchFaqs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(createNewFaq.fulfilled, (state, action: PayloadAction<Faq>) => {
        state.faqs.push(action.payload);
      })
      // .addCase(updateFaq.fulfilled, (state, action: PayloadAction<Faq>) => {
      //   const updatedFaq = action.payload;
      //   const existingFaq = state.faqs.find((faq) => faq._id === updatedFaq._id);
      //   if (existingFaq) {
      //     existingFaq.question = updatedFaq.question;
      //     existingFaq.category = updatedFaq.category;
      //     existingFaq.status = updatedFaq.status;
      //   }
      // })
      .addCase(deleteFaq.fulfilled, (state, action: PayloadAction<Faq>) => {
        const faqId = action.payload._id;

        const existingFaq = state.faqs.find((faq) => faq._id === faqId);

        if (existingFaq) {
          state.faqs = state.faqs.filter((faq) => faq._id !== faqId);
        }
      })
      .addCase(searchFaq.fulfilled, (state, action: PayloadAction<Faq[]>) => {
        state.status = "succeeded";
        state.faqs = action.payload;
      })
      .addMatcher(
        (action) => action.type === HYDRATE && action.payload?.faq,
        (state, action) => {
          state.faqs = action.payload.faq.faqs;
          state.status = "succeeded";
        }
      );
  },
});

export default faqSlice.reducer;
