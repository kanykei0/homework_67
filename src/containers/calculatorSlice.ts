import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CalculatorState {
  symbol: string;
  result: string | null;
}

const initialState: CalculatorState = {
  symbol: "",
  result: null,
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addSymbol: (state, action: PayloadAction<string>) => {
      state.symbol += action.payload;
    },
    clearField: (state) => {
      state.symbol = "";
      state.result = null;
    },
    calculateResult: (state) => {
      try {
        state.result = eval(state.symbol);
      } catch {
        state.symbol = "";
        state.result = null;
      }
    },
  },
});

export const buttonReducer = calculatorSlice.reducer;
export const { addSymbol, clearField, calculateResult } =
  calculatorSlice.actions;
