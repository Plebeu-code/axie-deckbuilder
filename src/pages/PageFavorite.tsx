import { useContext, useState } from "react";

//! Style
import "../style/pageRuna.scss";
//!Components
import { Footer } from "../components/footer";
import { ComponentNav } from "../components/Nav/ComponentNav";
import { HeaderTop } from "../components/Header/HeaderTop";
import { ThemeContext } from "../App";

import {
  FavoritedCardsHandler,
  toggleFavorite,
} from "../modules/CardFavoriteHandler";

import { CardAxie } from "../components/CardAxie";
import { CardCurse } from "../components/CardCurse";
import { CardTool } from "../components/CardTool";
import { CardCharm } from "../components/CardCharm";
import { CardRune } from "../components/CardRuna";

import CardAxies from "../json/cardsAxies.json";
import CardCurses from "../json/cardsCurses.json";
import CardTools from "../json/cardsTools.json";
import CardRunes from "../json/cardsRunes.json";
import CardCharms from "../json/cardsCharms.json";

import place from "../assets/icon/placa.png";

export function PageFavorite() {
  const { theme } = useContext(ThemeContext);

  const [favoritedCards, setFavoritedCards] = useState(
    FavoritedCardsHandler.cards
  );

  const cards = favoritedCards.filter(({ type }) => type === "CARD");
  const curses = favoritedCards.filter(({ type }) => type === "CURSE");
  const tools = favoritedCards.filter(({ type }) => type === "TOOL");
  const runes = favoritedCards.filter(({ type }) => type === "RUNE");
  const charms = favoritedCards.filter(({ type }) => type === "CHARM");

  return (
    <div className="container5" id={theme}>
      <div className="container-responsiv">
        <HeaderTop />
        <ComponentNav favorites="select-menu" />
        <div className="container-main" id={theme}>
          <div className="backgrundp1" id="background-favorite">
            {cards.length > 0 ? (
              <div className="favorite-cards">
                <div className="animation-placa">
                  <div className="animation-placa-img">
                    <img src={place} alt="Icon" />
                    <h1>
                      {cards.length > 1
                        ? `${cards.length} Cards`
                        : `${cards.length} Card`}
                    </h1>
                  </div>
                </div>
                {cards.map(({ id: $id }) => {
                  const [cardData] = CardAxies.filter(
                    ({ id }) => id === $id
                  ) as any;

                  return (
                    <CardAxie
                      onClick={() => {
                        toggleFavorite(cardData, "CARD");
                        setFavoritedCards(FavoritedCardsHandler.cards);
                      }}
                      key={$id}
                      {...cardData}
                    />
                  );
                })}
              </div>
            ) : null}
            {curses.length > 0 ? (
              <div className="favorite-cards">
                <div className="animation-placa">
                  <div className="animation-placa-img">
                    <img src={place} alt="Icon" />

                    <h1>
                      {curses.length > 1
                        ? `${curses.length} Curses`
                        : `${curses.length} Curse`}
                    </h1>
                  </div>
                </div>
                {curses.map(({ id: $id }) => {
                  const [cardData] = CardCurses.filter(
                    ({ id }) => id === $id
                  ) as any;

                  return (
                    <CardCurse
                      onClick={() => {
                        toggleFavorite(cardData, "CURSE");
                        setFavoritedCards(FavoritedCardsHandler.cards);
                      }}
                      key={$id}
                      {...cardData}
                    />
                  );
                })}
              </div>
            ) : null}
            {tools.length > 0 ? (
              <div className="favorite-cards">
                <div className="animation-placa">
                  <div className="animation-placa-img">
                    <img src={place} alt="Icon" />

                    <h1>
                      {tools.length > 1
                        ? `${tools.length} Tools`
                        : `${tools.length} Tool`}
                    </h1>
                  </div>
                </div>
                {tools.map(({ id: $id }) => {
                  const [cardData] = CardTools.filter(
                    ({ id }) => id === $id
                  ) as any;

                  return (
                    <CardTool
                      onClick={() => {
                        toggleFavorite(cardData, "TOOL");
                        setFavoritedCards(FavoritedCardsHandler.cards);
                      }}
                      key={$id}
                      {...cardData}
                    />
                  );
                })}
              </div>
            ) : null}
            {runes.length > 0 ? (
              <div className="favorite-runes">
                <div className="animation-placa">
                  <div className="animation-placa-img">
                    <img src={place} alt="Icon" />
                    <h1>
                      {runes.length > 1
                        ? `${runes.length} Runes`
                        : `${runes.length} Rune`}
                    </h1>
                  </div>
                </div>
                {runes.map(({ id: $id }) => {
                  const [cardData] = CardRunes.filter(
                    ({ id }) => id === $id
                  ) as any;

                  return (
                    <CardRune
                      onClick={() => {
                        toggleFavorite(cardData, "RUNE");
                        setFavoritedCards(FavoritedCardsHandler.cards);
                      }}
                      key={$id}
                      {...cardData}
                    />
                  );
                })}
              </div>
            ) : null}
            {charms.length > 0 ? (
              <div className="favorite-runes">
                <div className="animation-placa">
                  <div className="animation-placa-img">
                    <img src={place} alt="Icon" />

                    <h1>
                      {charms.length > 1
                        ? `${charms.length} Charms`
                        : `${charms.length} Charm`}
                    </h1>
                  </div>
                </div>
                {charms.map(({ id: $id }) => {
                  const [cardData] = CardCharms.filter(
                    ({ id }) => id === $id
                  ) as any;

                  return (
                    <CardCharm
                      onClick={() => {
                        toggleFavorite(cardData, "CHARM");
                        setFavoritedCards(FavoritedCardsHandler.cards);
                      }}
                      key={$id}
                      {...cardData}
                    />
                  );
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
