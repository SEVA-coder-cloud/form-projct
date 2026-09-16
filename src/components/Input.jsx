import { useRef } from "react";

export default function Counter() {
  const counterRef = useRef(0);
  
  const handleClick = () => {
    counterRef.current++;
    console.log(counterRef.current);
  };

  return (
    <>
      <button onClick={handleClick}>+</button>
    </>
  );
}

