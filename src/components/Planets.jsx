import { useState, useMemo } from "react";

export function Planet() {
  const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
  const [query, setQuery] = useState("e");
  const [count, setCount] = useState(0);

  const filteredPlanets = useMemo(() => {

    return planets.filter((planet) => planet.includes(query));
  }, [planets, query]);

  return (
    <>
      <button onClick={() => setCount((p) => p + 1)}>+</button>
      <p>{count}</p>
      {filteredPlanets.map((planet, id) => (
        <div key={id}>{planet}</div>
      ))}
    </>
  );
}


