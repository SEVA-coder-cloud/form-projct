import { useContext } from "react";
import { languageContext } from "./LanguageContext";

export function Welcome() {
  const { language, translations } = useContext(languageContext);

  const text = translations[language];

  return (
    <>
      <h1>{text.title}</h1>
      <p>{text.text}</p>
    </>
  );
}
