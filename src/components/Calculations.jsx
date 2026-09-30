import React, { useState, useMemo } from 'react';

import { useMemo, useReducer, useState } from "react";
function slowCalculation(number) {
  console.log("Обчислення...");

  let result = 0;

  for (let i = 0; i < 100000000; i++) {
    result += i;
  }

  return result + number;
}


export function Calcualation() {
  // const [state, dispatch] = useReducer(reducer, initialState)
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [number, setNumber] = useState(0);
  const [click, setClick] = useState(0);

  

  const result = useMemo(() => {
    return slowCalculation(number);
  }, [number]);

  return (
    <>
      <p>result {result}</p>

      <button onClick={() => setNumber(number + 1)}>number</button>
      <p>click {click}</p>
      <button onClick={() => setClick(click + 1)}>click</button>
    </>
  );
}

function reducer(state, action) {
  //зазвичай використовуємо свіч
  switch (action.type) {
    case "increment":
      return {
        ...state,
        coutnt: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        coutnt: state.count - 1,
      };
    default:
      return state;
  }
}





