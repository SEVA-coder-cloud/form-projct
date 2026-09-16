import { useContext, createContext, useState } from 'react';

const translations = {
  ua: {
    title: "Привіт!",
    text: "Ласкаво просимо на наш сайт.",
  },
  en: {
    title: "Hello!",
    text: "Welcome to our website.",
  },
  pl: {
    title: "Cześć!",
    text: "Witamy na naszej stronie.",
  },
};

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("ua");

  const value = {
    language,
    setLanguage,
    translations,
  };
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
