import { useContext, useState } from "react";

//! Style
import "../style/pageRuna.scss";
//!Components
import { Footer } from "../components/footer";
import { ComponentNav } from "../components/Nav/ComponentNav";
import { HeaderTop } from "../components/Header/HeaderTop";
import { ThemeContext } from "../App";

import { FavoritedCardsHandler } from "../modules/CardFavoriteHandler";

import { CardAxie } from "../components/CardAxie";
import { CardCurse } from "../components/CardCurse";
import { CardTool } from "../components/CardTool";
import { CardCharm } from "../components/CardCharm";
import { CardRune } from "../components/CardRuna";

import cardAxies from "../json/cardsAxies.json";
import cardCurses from "../json/cardsCurses.json";
import cardTools from "../json/cardsTools.json";
import cardRune from "../json/cardsRunes.json";
import cardCharm from "../json/cardsCharms.json";

export function PageFavorite() {
  const { theme } = useContext(ThemeContext);

  const [] = useState();

  const favoritedCards = FavoritedCardsHandler.cards.filter(
    ({ type: _type }) => _type === "CARD"
  );
  const favoritedCurses = FavoritedCardsHandler.cards.filter(
    ({ type: _type }) => _type === "CURSE"
  );

  return (
    <div className="container5" id={theme}>
      <div className="container-responsiv">
        <HeaderTop />
        <ComponentNav favorites="select-menu" />
        <div className="container-main" id={theme}>
          <div className="backgrundp1">
            {favoritedCards.length > 0 ? (
              <div className="favorite-cards">
                <h1>{favoritedCards.length} Cards</h1>
                {FavoritedCardsHandler.cards.map(({ id: _id, type: _type }) => {
                  if (_type !== "CARD") return;
                  const [card] = cardAxies.filter(
                    ({ id }) => id === _id
                  ) as any;
                  return <CardAxie onClick={(e) => {}} key={_id} {...card} />;
                })}
              </div>
            ) : null}
            {favoritedCurses.length > 0 ? (
              <div className="favorite-cards">
                <h1>{favoritedCurses.length} Curses</h1>
                {FavoritedCardsHandler.cards.map(({ id: _id, type: _type }) => {
                  if (_type !== "CURSE") return;
                  const [card] = cardCurses.filter(
                    ({ id }) => id === _id
                  ) as any;
                  return <CardCurse key={_id} {...card} />;
                })}
              </div>
            ) : null}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
