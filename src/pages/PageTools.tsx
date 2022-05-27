//! React
import { useMemo, useState, useContext } from "react";
//! Style
import "../style/pageCharm.scss";
//! Assets | icons && img && svgs
import search_icon from "../assets/icon/search-icon.svg";
//!Components
import axieToolCards from "../json/cardsTools.json";
import { Footer } from "../components/footer";
import { ComponentNav } from "../components/Nav/ComponentNav";
import { HeaderTop } from "../components/Header/HeaderTop";
import { ThemeContext } from "../App";

import { TTool } from "../types";

import { CardTool } from "../components/CardTool";

export function PageTool() {
  const [toolNameSearch, setToolNameSearch] = useState("");
  const [listFormat, setListFormat] = useState("az");
  const { theme } = useContext(ThemeContext);

  const filteredCurseCards = useMemo(() => {
    const hasSearchContent = toolNameSearch ? true : false;

    const listFormatFunctions = {
      az: () =>
        axieToolCards.sort(
          ({ name: currentToolCardName }, { name: nextToolCardName }) =>
            currentToolCardName.localeCompare(nextToolCardName, "pt-br")
        ),
      za: () =>
        axieToolCards.sort(
          ({ name: currentToolCardName }, { name: nextToolCardName }) =>
            nextToolCardName.localeCompare(currentToolCardName, "pt-br")
        ),
    };

    void listFormatFunctions[listFormat]();

    return hasSearchContent
      ? axieToolCards.filter(({ name: toolCardName }: TTool) =>
          toolCardName.toLowerCase().includes(toolNameSearch.toLowerCase())
        )
      : axieToolCards;
  }, [toolNameSearch, listFormat]);

  return (
    <div className="container5" id={theme}>
      <div className="container-responsiv">
        {/* apresentação com logo */}
        <HeaderTop />
        {/* Menu do site */}
        <ComponentNav tools="select-menu" />

        {/* conteúdo princiapal do site  */}
        <div className="container-main" id={theme}>
          <form action="#">
            <div className="search-x">
              <input
                type="search"
                name=""
                id=""
                placeholder="Search cards"
                value={toolNameSearch}
                onChange={(e) =>
                  setToolNameSearch(
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
              {filteredCurseCards.map((card: TTool) => (
                <CardTool key={card.id} {...card} />
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
