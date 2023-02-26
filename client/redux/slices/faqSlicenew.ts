import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import faqApi from './faqAPI';
type Faq = {

    _id: string;
    question: string;
    category: string;
    status: string;
  };
  type FaqWithoutId = Omit<Faq, '_id'>;
  export interface FaqState {
    faqs: Faq[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }

export const fetchFaqs = createAsyncThunk(
  'faq/fetchFaqs',
  async () => {
    const response = await faqApi.getFaqs();
    return response.data;
  }
);

export const createNewFaq = createAsyncThunk(
  'faq/createNewFaq',
  async (newFaq:FaqWithoutId ) => {
    const response = await faqApi.postFaq(newFaq);
    return response.data;
  }
);
export const updateFaq = createAsyncThunk(
    'faq/createNewFaq',
    async (updateFaq:Faq) => {
      const response = await faqApi.updateFaq(updateFaq);
      return response.data;
    }
  );
export const deleteFaq = createAsyncThunk(
    'faq/deleteFaq',
    async (faqId:string) => {
      const response = await faqApi.deleteFaq(faqId);
      return response.data;
    }
  );

const faqSlice = createSlice({
  name: 'faq',
  initialState: { faqs: [], status: 'idle', error: null } as FaqState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaqs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFaqs.fulfilled, (state, action: PayloadAction<Faq[]>) => {
        state.status = 'succeeded';
        state.faqs = action.payload;
      })
      .addCase(fetchFaqs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(createNewFaq.fulfilled, (state, action: PayloadAction<Faq>) => {
        state.faqs.push(action.payload);
      })
      .addCase(updateFaq.fulfilled, (state, action: PayloadAction<Faq>) => {
        const updatedFaq = action.payload;
        const existingFaq = state.faqs.find((faq) => faq._id === updatedFaq._id);
        if (existingFaq) {
          existingFaq.question = updatedFaq.question;
          existingFaq.category = updatedFaq.category;
          existingFaq.status = updatedFaq.status;
        }
      })
      .addCase(deleteFaq.fulfilled, (state, action: PayloadAction<string>) => {
        const faqId = action.payload;
        const existingFaq = state.faqs.find((faq) => faq._id === faqId);
        if (existingFaq) {
          state.faqs = state.faqs.filter((faq) => faq._id !== faqId);
        }
      });
  },
});


export default faqSlice.reducer;
