import {
  Action,
  configureStore,
  Dispatch,
  ThunkAction,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import faqReducer from "./slices/faqSlice";
// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = Dispatch<Action>;
const makeStore = () =>
  configureStore({
    reducer: {
      faq: faqReducer,
    },
    devTools: true,
  });
export const store = makeStore();
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
