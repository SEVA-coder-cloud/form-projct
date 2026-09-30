// // import { Calculation } from "./components/Calculations";
// // import { Planet } from "./components/Planets";
// import ButtonComponent  from "./components/ButtonComponent";
// import { useCallback, useState } from "react";
// export default function App() {


//   // const toggleTheme = () => {
//   //   setTheme(theme === "light" ? "dark" : "light");
//   // };


// const [theme, setTheme] = useState("light");
// const [click, setClick] = useState(0);

// const toggleTheme = () => {
//   setTheme(theme === "light" ? "dark" : "light");
// };

// const handleClick = useCallback(() => {
//   setClick(click + 1);
// }, []);

// import 

//   return (
//     <>
//           {/* <ButtonComponent onClick={handleClick}/>
//           <button onClick={() => setClick(click + 1)}>click pls</button> */}
//    </>
//   );

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const resp = await fetch(BASE_URL);
        const data = await resp.json();
        setPokemons(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getPokemons();
  }, []);

  console.log(pokemons);


return (
  <ul>
    {pokemons.map((v, idx) => (
      <li key={idx}>
        {v.name}
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx + 1}.png`} />
      </li>
    ))}
  </ul>
);
}

