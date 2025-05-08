import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

// Define a type for the slice state
export interface AmountState {
  value: number;
}

// Define the initial state using that type
const initialState: AmountState = {
  value: 0,
};

const amountSlice = createSlice({
  name: "amount",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAmount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setAmount } = amountSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAmount = (state: RootState) => state.amount.value;

export default amountSlice.reducer;
