import "../style/runaPage.scss";
import { Runa } from "../components/Runa/Runa";
import runas from "../cardsRuans.json";
import { TRuna } from "../components/Runa/index";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export function PageRunas() {
  console.log('dentro de runas');
  
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme((env) => env === 'light' ? 'dark' : "light")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="container" id={theme}>
        {runas.map((card: TRuna) => (
          <Runa {...card} />
        ))}
      </div>
    </ThemeContext.Provider>
  );
}
