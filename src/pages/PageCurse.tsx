//! React
import { useMemo, useState, useContext } from "react";
//! Style
import "../style/pageCharm.scss";
//! Assets | icons && img && svgs
import search_icon from "../assets/icon/search-icon.svg";
//!Components
import type { TCurse } from "../types";
import { CardCurse } from "../components/CardCurse";

import { Footer } from "../components/footer";
import AxieCurseCards from "../json/cardsCurses.json";
import { ComponentNav } from "../components/Nav/ComponentNav";
import { HeaderTop } from "../components/Header/HeaderTop";
import { ThemeContext } from "../App";

import { toggleFavorite } from "../modules/CardFavoriteHandler";
import CardFilterListHandler, {
  TFilterTypes,
} from "../modules/CardFilterListHandler";

export function PageCurse() {
  const [axieNameSearch, setAxieNameSearch] = useState("");
  const [listFormat, setListFormat] = useState("az");
  const { theme } = useContext(ThemeContext);

  const filteredCurseCards = useMemo(() => {
    const hasSearchContent = axieNameSearch ? true : false;

    const cardManager = new CardFilterListHandler(AxieCurseCards).filterBy(
      listFormat as keyof typeof TFilterTypes
    );

    return hasSearchContent
      ? cardManager.cards.filter(({ name: curseCardName }: TCurse) =>
          curseCardName.toLowerCase().includes(axieNameSearch.toLowerCase())
        )
      : cardManager.cards;
  }, [axieNameSearch, listFormat]);

  return (
    <div className="container5" id={theme}>
      <div className="container-responsiv">
        {/* apresentação com logo */}
        <HeaderTop />
        {/* Menu do site */}
        <ComponentNav curses="select-menu" />
        {/* conteúdo princiapal do site  */}
        <div className="container-main" id={theme}>
          <form action="#">
            <div className="search-x">
              <input
                type="search"
                name=""
                id=""
                placeholder="Search cards"
                value={axieNameSearch}
                onChange={(e) =>
                  setAxieNameSearch(
                    e.target.value === "Search cards" ? "" : e.target.value
                  )
                }
              />
              <img src={search_icon} alt="" />
            </div>
          </form>
          <div className="backgrundp1">
            <div className="aAz">
              <i className="fa-solid fa-caret-down"></i>
              <select
                onChange={(e) => setListFormat(e.target.value.toLowerCase())}
                name=""
                id=""
              >
                <option defaultChecked value="aZ">
                  Nome A - Z
                </option>
                <option value="zA">Nome Z - A</option>
              </select>
            </div>
            <div className="backgroundp2">
              {filteredCurseCards.map((card: TCurse) => (
                <CardCurse
                  onClick={() => toggleFavorite(card, "CURSE")}
                  key={card.id}
                  {...card}
                />
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
