import { configureStore } from "@reduxjs/toolkit";
import { buttonReducer } from "../containers/calculatorSlice";

export const store = configureStore({
  reducer: {
    calculator: buttonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
