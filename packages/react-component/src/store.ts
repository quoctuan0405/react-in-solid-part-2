import {
  configureStore,
  EnhancedStore,
  StoreEnhancer,
  ThunkDispatch,
  Tuple,
  UnknownAction,
} from "@reduxjs/toolkit";
import amountSlice, { AmountState } from "./amount-slice";

export const store: Store = configureStore({
  reducer: {
    amount: amountSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type Store = EnhancedStore<
  {
    amount: AmountState;
  },
  UnknownAction,
  Tuple<
    [
      StoreEnhancer<{
        dispatch: ThunkDispatch<
          {
            amount: AmountState;
          },
          undefined,
          UnknownAction
        >;
      }>,
      StoreEnhancer
    ]
  >
>;
