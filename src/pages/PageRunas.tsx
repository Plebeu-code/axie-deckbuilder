//! React
import { useMemo, useState, useContext } from "react";
//! Style
import "../style/pageRuna.scss";
//! Assets | icons && img && svgs
import search_icon from "../assets/icon/search-icon.svg";
//!Components
import { Footer } from "../components/Footer";
import AxieCardRunes from "../json/cardsRunes.json";
import { ComponentNav } from "../components/Nav/ComponentNav";
import { HeaderTop } from "../components/Header/HeaderTop";
import { ThemeContext } from "../App";

import type { TTool } from "../types";

import { CardRune } from "../components/CardRuna";

export function PageRunas() {
  const [runeNameSearch, setRuneNameSearch] = useState("");
  const [runeClassNameSearch, setRuneClassNameSearch] = useState("");
  const [rarityRuneSearch, setRarityRuneSearch] = useState("");
  const [listFormat, setListFormat] = useState("az");
  const { theme } = useContext(ThemeContext);

  const filteredRuneCards = useMemo(() => {
    const hasSearchContent =
      runeNameSearch || runeClassNameSearch || rarityRuneSearch ? true : false;

    const listFormatFunctions = {
      az: () =>
        AxieCardRunes.sort(
          ({ name: currentRuneCardName }, { name: nextRuneCardName }) =>
            currentRuneCardName.localeCompare(nextRuneCardName, "pt-br")
        ),
      za: () =>
        AxieCardRunes.sort(
          ({ name: currentRuneCardName }, { name: nextRuneCardName }) =>
            nextRuneCardName.localeCompare(currentRuneCardName, "pt-br")
        ),
    };

    void listFormatFunctions[listFormat]();

    console.log(runeNameSearch, runeClassNameSearch, rarityRuneSearch);

    return hasSearchContent
      ? AxieCardRunes.filter(
          ({
            name: runeCardName,
            class: { name: runeCardClassName },
            // cardRarity,
          }) =>
            runeNameSearch.toLowerCase().includes(runeCardName.toLowerCase()) &&
            runeCardClassName.toLowerCase().includes(runeClassNameSearch)
          // cardRarity.toLowerCase().includes(rarityRuneSearch)
        )
      : AxieCardRunes;
  }, [runeNameSearch, runeClassNameSearch, rarityRuneSearch, listFormat]);

  return (
    <div className="container5" id={theme}>
      <div className="container-responsiv">
        {/* apresentação com logo */}
        <HeaderTop />
        {/* Menu do site */}
        <ComponentNav runes="select-menu" />
        {/* conteúdo princiapal do site  */}
        <div className="container-main" id={theme}>
          <form action="#">
            <div className="search-x">
              <input
                type="search"
                name=""
                id=""
                placeholder="Search cards"
                value={runeNameSearch}
                onChange={(e) =>
                  setRuneNameSearch(
                    e.target.value === "Search cards" ? "" : e.target.value
                  )
                }
              />
              <img src={search_icon} alt="" />
            </div>
            <div className="dropdown-edit">
              <i className="fa-solid fa-caret-down"></i>

              <select
                name=""
                id=""
                onChange={(e) =>
                  setRuneClassNameSearch(
                    e.target.value === "Classe" ? "" : e.target.value
                  )
                }
              >
                <option defaultChecked>Classe</option>
                <option value="aquatic">Aquatic</option>
                <option value="beast">Beast</option>
                <option value="bird">Bird</option>
                <option value="bug">Bug</option>
                <option value="plant">Plant</option>
                <option value="reptile">Reptile</option>
              </select>
            </div>
            <div className="dropdown-edit">
              <i className="fa-solid fa-caret-down"></i>
              <select
                onChange={(e) =>
                  setRarityRuneSearch(
                    e.target.value === "Rarity" ? "" : e.target.value
                  )
                }
              >
                <option defaultChecked>Rarity</option>
                <option value="comum">Common</option>
                <option value="raro">Rare</option>
                <option value="epico">Epic</option>
                <option value="mistico">Mystic</option>
              </select>
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
            <div className="backgroundp2" id="grid-space">
              {filteredRuneCards.map((card: TTool) => (
                <CardRune key={card.id} {...card} />
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
