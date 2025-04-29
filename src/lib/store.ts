import { configureStore } from "@reduxjs/toolkit";
import surveyReducer from "./features/survey/surveySlice";

export const store = configureStore({
  reducer: {
    survey: surveyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
