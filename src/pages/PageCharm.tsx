//! React
import { useState, useContext } from "react";
//! Style
import "../style/pageCharm.scss";
//! Assets | icons && img && svgs
import search_icon from "../assets/icon/search-icon.svg";
//!Components
import { Footer } from "../components/footer";
import { ComponentNav } from "../components/Nav/ComponentNav";
import JsonCharms from "../json/cardsCharms.json";
import { HeaderTop } from "../components/Header/HeaderTop";
import { ThemeContext } from "../App";

import type { TCharm } from "../types";
import { CardCharm } from "../components/CardCharm";

export function PageCharm() {
  const [rarityRuneSearch, setRarityRuneSearch] = useState("");
  const [axieNameSearch, setAxieNameSearch] = useState("");
  const [axieClassNameSearch, setClassNameSearch] = useState("");
  const [axieBodyPartSearch, setAxieBodyPart] = useState("");
  const [energySearch, setEnergySearch] = useState("");
  const [tagSearch, setTag] = useState("");
  const { theme } = useContext(ThemeContext);

  if (axieClassNameSearch.toLowerCase() === "classe") setClassNameSearch("");
  if (axieBodyPartSearch.toLowerCase() === "Part Type") setClassNameSearch("");
  if (energySearch.toLowerCase() === "Energy Cost") setClassNameSearch("");
  if (tagSearch.toLowerCase() === "tag") setClassNameSearch("");

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
                onChange={(e) => setAxieNameSearch(e.target.value)}
              />
              <img src={search_icon} alt="" />
            </div>
            <div className="dropdown-edit">
              <i className="fa-solid fa-caret-down"></i>

              <select
                name=""
                id=""
                onChange={(e) => setClassNameSearch(e.target.value)}
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
                onChange={(e) => setEnergySearch(e.target.value)}
              >
                <option value="nada">Energy Cost</option>
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
              <select name="" id="">
                <option defaultChecked value="aZ">
                  Nome A - Z
                </option>
                <option value="zA">Nome Z - A</option>
              </select>
            </div>
            <div className="backgroundp2" id="grid-space">
              {JsonCharms.map((card: TCharm) => (
                <CardCharm key={card.id} {...card} />
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
