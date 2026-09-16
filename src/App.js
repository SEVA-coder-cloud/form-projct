import { useState } from "react";
import { ThemeContext } from "./components/ThemeContext";
import { Layout } from "./components/Layout";
import Counre from "./components/Input";

export default function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Layout />
      <Counre/>
    </ThemeContext.Provider>
  );
}





