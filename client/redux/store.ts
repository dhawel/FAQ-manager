import {
  configureStore,
  ThunkAction,
  Action,
  Dispatch,
} from "@reduxjs/toolkit";
import faqReducer from "./slices/faqSlice";
import { createWrapper, MakeStore } from "next-redux-wrapper";
// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = Dispatch<Action>;
const makeStore = () =>
  configureStore({
    reducer: {
      faq: faqReducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
