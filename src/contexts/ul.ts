import { createContext, useState } from "react";



let themeCache: "light" | "dark" | undefined = window.localStorage.getItem(
  "theme"
) as any;


// const [theme, setTheme] = useState(themeCache);

export const ThemeContext = createContext(null);
