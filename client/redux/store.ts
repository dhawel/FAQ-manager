import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./slices/faqSlice";

export const store = configureStore({
  reducer: {
    quetion: questionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
