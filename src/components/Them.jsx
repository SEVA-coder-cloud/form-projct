import { useReducer } from "react";

const initialState = {
  theme: "light", // "light" | "dark"
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };

    case "SET_THEME":
      return {
        ...state,
        theme: action.payload, // "light" або "dark"
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const isDark = state.theme === "dark";

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: isDark ? "#1a1a1a" : "#ffffff",
        color: isDark ? "#f0f0f0" : "#111111",
        padding: "2rem",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      <h1>Поточна тема: {state.theme}</h1>

      <button
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        style={{
          padding: "0.6rem 1.2rem",
          marginRight: "0.5rem",
          cursor: "pointer",
          backgroundColor: isDark ? "#333" : "#eee",
          color: isDark ? "#fff" : "#000",
          border: "1px solid",
          borderColor: isDark ? "#555" : "#ccc",
          borderRadius: "6px",
        }}
      >
        Перемкнути тему
      </button>

      <button
        onClick={() => dispatch({ type: "SET_THEME", payload: "light" })}
        style={{ marginRight: "0.5rem" }}
      >
        Світла
      </button>

      <button onClick={() => dispatch({ type: "SET_THEME", payload: "dark" })}>
        Темна
      </button>
    </div>
  );
}

export default App;