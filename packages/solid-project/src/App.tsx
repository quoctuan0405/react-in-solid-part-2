import { mount, type ReturnedCallbacks } from "react-component";
import { createSignal, onMount } from "solid-js";

export const App = () => {
  let container!: HTMLDivElement;

  let setAmount: ReturnedCallbacks["setAmount"] | undefined;

  const [value, setValue] = createSignal<number>(0);

  onMount(() => {
    const callbacks = mount(container, {
      onIncrement: (amount) => {
        setValue((value) => value + amount);
      },
    });

    setAmount = callbacks.setAmount;
  });

  return (
    <>
      <div ref={container} />
      <div>
        <input
          type="number"
          onInput={(e) => {
            const value = parseFloat(e.currentTarget.value);

            if (!isNaN(value)) {
              setAmount && setAmount(value);
            }
          }}
        />
        <div>Count from Solid: {value()}</div>
      </div>
    </>
  );
};
