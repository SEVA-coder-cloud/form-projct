import { useContext, useState } from "react";
import {ThemeContext} from "./ThemeContext";

export function Layout() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#555",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1>тема: {theme}</h1>
      <button onClick={toggleTheme}>змінити тему</button>
    </div>
  );
}
