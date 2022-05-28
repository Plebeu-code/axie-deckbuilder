import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeCard } from "./pages/HomeCard";
import { PageRunas } from "./pages/PageRunas";
import { NotFound } from "./pages/PageNotFound";
import { PageCharm } from "./pages/PageCharm";
import { PageCurse } from "./pages/PageCurse";
import { PageTool } from "./pages/PageTools";
import { PageEffects } from "./pages/PageEffects";
import { PageFavorite } from "./pages/PageFavorite";

import { useState } from "react";

import { FavoritedCardsHandler } from "./modules/CardFavoriteHandler";

import LanguageHandler from "./modules/LanguageHandler";

let themeCache: "light" | "dark" | undefined = window.localStorage.getItem(
  "theme"
) as any;

export const ThemeContext = React.createContext(null);

export default function App() {
  const [theme, setTheme] = useState(themeCache);

  if (!theme) setTheme("light");

  function toggleStyle() {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme);
  }

  if (!FavoritedCardsHandler.exists || !FavoritedCardsHandler.isValid())
    FavoritedCardsHandler.mount();

  return (
    void new LanguageHandler(),
    (
      <ThemeContext.Provider value={{ toggleStyle, theme }}>
        <Routes>
          <Route path="/" element={<HomeCard />} />
          <Route path="/runes" element={<PageRunas />} />
          <Route path="/charms" element={<PageCharm />} />
          <Route path="/tools" element={<PageTool />} />
          <Route path="/curses" element={<PageCurse />} />
          <Route path="/effects" element={<PageEffects />} />
          <Route path="/favorite" element={<PageFavorite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeContext.Provider>
    )
  );
}
