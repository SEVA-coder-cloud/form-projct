import React, { useState, useMemo } from 'react';

function slowCalculation(number) {
  console.log("Обчислення...");
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += i;
  }
  return result + number;
}

export function Calculation() { // Виправлено помилку в назві Calcualation -> Calculation
  const [number, setNumber] = useState(0);
  const [click, setClick] = useState(0);

  // Оптимізація: обчислення виконається ТІЛЬКИ якщо зміниться `number`
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

