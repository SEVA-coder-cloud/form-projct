import { useState, useEffect } from "react";
import { useCounter } from "./useCounter";
import { useLocalStorage } from "./useLocalStotag";
function App() {
  const [seconds, setSeconds] = useState(0);
const { count, increment, decrement, reset } = useCounter(11);
const [name, setName] = useLocalStorage("name", "");

// useEffect(() => {
//   const timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);

//   return () => clearInterval(timer);
// }, []);

// useEffect(() => console.log( "Виклик useEffect" ), [count]),
// useEffect(() => console.log('виклик useEffect'), [count]);
// useEffect(() => console.log(inpValue), [inpValue]);
// return (
//   <div>
//     <input
//       value={inpValue}
//       onChange={(event) => setInpValue(event.target.value)}
//     />

//     <p>{inpValue}</p>
//   </div>
// );
// const [number, setNumber] = useState(0)
// const [massage, setMassage] = useState("")
// const [guess, setGuess] = useState("")

// useEffect(() => { setNumber(Math.floor(Math.random() * 10) + 1) },[])
// const handleCheck = () => {
//     if (Number(guess) === number) setMassage("Перемога")
//     if (Number(guess) !== number) setMassage("Не перемога")
//     console.log(number)
// }
return(
    <>
      <h2>привіт, {name}</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>

      <p>{count}</p>
    </>
)



  // const [count, setCount] = useState(0);
  // const [darkMode, setDarklMode] = useState(false);

  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  // useEffect(() => console.log("виклик useEffect"), [count]);

  // return (
  //   <div>
  //     {seconds}
  //     {/* {count}
  //     <button onClick={handleClick}>+</button>
  //     <button onClick={() => setDarklMode(!darkMode)}>
  //       {darkMode ? "світла" : "темна"}
  //     </button> */}
  //   </div>
  // );
}

export default App;



