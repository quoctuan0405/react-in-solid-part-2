import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { setAmount } from "./amount-slice";

export interface Callbacks {
  onIncrement: (amount: number) => any;
}

export interface ReturnedCallbacks {
  setAmount: (amount: number) => any;
}

export const mount = (
  root: HTMLElement,
  { onIncrement }: Callbacks
): ReturnedCallbacks => {
  createRoot(root).render(
    <StrictMode>
      <Provider store={store}>
        <App onIncrement={onIncrement} />
      </Provider>
    </StrictMode>
  );

  return {
    setAmount: (amount: number) => {
      store.dispatch(setAmount(amount));
    },
  };
};
