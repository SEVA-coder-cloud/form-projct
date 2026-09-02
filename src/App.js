import { useState, useEffect } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);

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
const [number, setNumber] = useState(0)
const [massage, setMassage] = useState("")
const [guess, setGuess] = useState("")

useEffect(() => { setNumber(Math.floor(Math.random() * 10) + 1) },[])
const handleCheck = () => {
    if (Number(guess) === number) setMassage("Перемога")
    if (Number(guess) !== number) setMassage("Не перемога")
    console.log(number)
}
return(
    <>
      <h1>Вгадай Число</h1>
      <p>{massage}</p>
      <input value={guess} onChange={(event) => setGuess(event.target.value)} placeholder="Введи число"/>
      <button type="button" onClick={handleCheck}>персоірити</button>
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



