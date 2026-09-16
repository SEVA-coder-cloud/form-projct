import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <>
      <p>поточна мова {language}</p>
      <button onClick={() => setLanguage("ua")}>українська</button>
      <button onClick={() => setLanguage("en")}>english</button>
      <button onClick={() => setLanguage("pl")}>polski</button>
    </>
  );
}

