import { useContext, useState } from "react";

//! Style
import "../style/pageRuna.scss";
//!Components
import { Footer } from "../components/Footer/Footer";
import { ComponentNav } from "../components/Nav/ComponentNav";
import { HeaderTop } from "../components/Header/HeaderTop";
import { PageFavoriteContext, ThemeContext } from "../App";

import { FavoritedCardsHandler } from "../modules/CardFavoriteHandler";
import { pageFavoriteHandler } from "../modules/PageFavoriteHandler";

import { CardFavorite } from "../components/CardFavorite";

export function PageFavorite() {
  const { theme } = useContext(ThemeContext);

  const [pageData, setPageData] = useState(pageFavoriteHandler.data);

  const { favorites, toggleFavorites } = useContext(PageFavoriteContext);

  FavoritedCardsHandler.cards.forEach(({ cardId, type }) => {
    if (
      !pageFavoriteHandler.contains({
        cardId,
        type,
      })
    ) {
      return pageFavoriteHandler.add({
        cardId,
        type,
      });
    }
  });

  return (
    <div className="container5" id={theme}>
      <div className="container-responsiv">
        <HeaderTop />
        <ComponentNav favorites="select-menu" />
        <div className="container-main" id={theme}>
          <div className="backgrundp1">
            <div className="backgroundp23">
              <PageFavoriteContext.Provider
                value={{ favorites, toggleFavorites }}
              >
                {favorites.map((cardData) => (
                  <CardFavorite {...cardData} />
                ))}
              </PageFavoriteContext.Provider>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
