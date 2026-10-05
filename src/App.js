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
import { useEffect } from "react";
import { useState } from "react";
const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        setLoading(true);
        const resp = await fetch(BASE_URL);
        const data = await resp.json();
        setPokemons(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getPokemons();
  }, []);

  console.log(selectedPokemon);

  function selectPokemon(id) {
    setSelectedPokemon(pokemons[id]);
  }



return(<ul>
    {isLoading && <h1>Loading</h1>}
    {(!isLoading) && pokemons.map((v, idx) =>
        (<li key={idx}>
            {v.name}
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx + 1}.png`} />
            <button onClick={() => selectPokemon(idx)}>Select</button>
        </li>))
    }
    {(selectedPokemon !== null) && <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#BBB",
        width: "400px",
        height: "400px"}}>
        <h3>{selectedPokemon.name}</h3>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Number(selectedPokemon.url.slice(34, -1)) + 1}.png`}/>
        <button onClick={() => setSelectedPokemon(null)}>Close</button>
    </div>}
</ul>)


}

export default App;