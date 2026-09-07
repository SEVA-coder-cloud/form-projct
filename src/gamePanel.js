import { useState } from "react";

export function useCounter(initialstate = 0) {
  const [count, setCount] = useState(initialstate);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(initialstate);
  };

  return { count, increment, decrement, reset };
}