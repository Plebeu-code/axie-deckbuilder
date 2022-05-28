//! React
import { useState, useContext, useMemo } from "react";
//! Style
import "../style/pageCharm.scss";
//! Assets | icons && img && svgs
import search_icon from "../assets/icon/search-icon.svg";
//!Components
import { Footer } from "../components/footer";
import { ComponentNav } from "../components/Nav/ComponentNav";
import AxieCharmsCards from "../json/cardsCharms.json";
import { HeaderTop } from "../components/Header/HeaderTop";
import { ThemeContext } from "../App";

import type { TCharm } from "../types";
import { CardCharm } from "../components/CardCharm";

import { toggleFavorite } from "../modules/CardFavoriteHandler";

import CardFilterListHandler, {
  TFilterTypes,
} from "../modules/CardFilterListHandler";

export function PageCharm() {
  const { theme } = useContext(ThemeContext);

  const [rarityRuneSearch, setRarityRuneSearch] = useState("");
  const [axieNameSearch, setAxieNameSearch] = useState("");
  const [axieClassNameSearch, setClassNameSearch] = useState("");
  const [energySearch, setEnergySearch] = useState("");
  const [listFormat, setListFormat] = useState("az");

  console.log(energySearch)

  const filteredCards = useMemo(() => {
    const hasSearchContent =
      rarityRuneSearch || axieNameSearch || axieClassNameSearch || energySearch
        ? true
        : false;

    const cardManager = new CardFilterListHandler(AxieCharmsCards).filterBy(
      listFormat as keyof typeof TFilterTypes
    );

    return hasSearchContent
      ? cardManager.cards.filter(
          ({ name, class: { name: className }, energyCost }) =>
            name.toLowerCase().includes(axieNameSearch) &&
            className
              .toLowerCase()
              .includes(axieClassNameSearch.toLowerCase()) &&
            energyCost.includes(energySearch)
        )
      : cardManager.cards;
  }, [
    rarityRuneSearch,
    axieNameSearch,
    axieClassNameSearch,
    energySearch,
    listFormat,
  ]);

  return (
    <div className="container5" id={theme}>
      <div className="container-responsiv">
        {/* apresentação com logo */}
        <HeaderTop />
        {/* Menu do site */}
        <ComponentNav charms="select-menu" />
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
                  setAxieNameSearch(e.target.value.toLowerCase())
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
                  setClassNameSearch(
                    e.target.value === "Classe"
                      ? ""
                      : e.target.value.toLowerCase()
                  )
                }
              >
                <option defaultChecked>Classe</option>
                <option value="aquatic">Aquatic</option>
                <option value="beast">Beast</option>
                <option value="bird3">Bird</option>
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
            <div className="dropdown-edit">
              <i className="fa-solid fa-caret-down"></i>

              <select
                name=""
                id=""
                onChange={(e) =>
                  setEnergySearch(
                    e.target.value === "Energy Cost" ? "" : e.target.value
                  )
                }
              >
                <option value="">Energy Cost</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
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
              {filteredCards.map((card: TCharm) => (
                <CardCharm
                  onClick={() => toggleFavorite(card, "CHARM")}
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
