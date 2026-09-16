
import { Welcome } from "./components/Welcome";
import { LanguageProvider } from "./components/LanguageContex";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
export default function App() {
 
  return (
    <LanguageProvider>
      <Welcome/>
      <LanguageSwitcher/>
    </LanguageProvider>
  );
}






