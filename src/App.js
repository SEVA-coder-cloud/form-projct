// import { Calculation } from "./components/Calculations";
// import { Planet } from "./components/Planets";
import ButtonComponent  from "./components/ButtonComponent";
import { useCallback, useState } from "react";
export default function App() {


  // const toggleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };


const [theme, setTheme] = useState("light");
const [click, setClick] = useState(0);

const toggleTheme = () => {
  setTheme(theme === "light" ? "dark" : "light");
};

const handleClick = useCallback(() => {
  setClick(click + 1);
}, []);



  return (
    <>
          <ButtonComponent onClick={handleClick}/>
          <button onClick={() => setClick(click + 1)}>click pls</button>
   </>
  );
}

