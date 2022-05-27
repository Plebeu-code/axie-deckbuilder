import { useMemo, useState, useContext } from "react";
import "../style/homeCard.scss";
import search_icon from "../assets/icon/search-icon.svg";
import { CardAxie } from "../components/CardAxie";
import type { TCard } from "../types";
import DefaultCards from "../json/cardsAxies.json";
import { Footer } from "../components/footer";
import { ComponentNav } from "../components/Nav/ComponentNav";
import { HeaderTop } from "../components/Header/HeaderTop";
import { ThemeContext } from "../App";

import { toggleFavorite } from "../modules/CardFavoriteHandler";

import CardFilterListHandler, {
  type TFilterTypes,
} from "../modules/CardFilterListHandler";

export function HomeCard() {
  const { theme } = useContext(ThemeContext);

  const [axieName, setAxieName] = useState(""),
    [axieClassName, setAxieClassName] = useState(""),
    [axieBodyPart, setAxieBodyPart] = useState(""),
    [axieEnergyCost, setAxieEnergyCost] = useState(""),
    [axieTag, setAxieTag] = useState(""),
    [listFormat, setListFormat] = useState("az" as keyof typeof TFilterTypes);

  const filteredCards = useMemo(() => {
    const hasSearchContent =
      axieName || axieClassName || axieBodyPart || axieEnergyCost || axieTag
        ? true
        : false;

    const cardManager = new CardFilterListHandler(DefaultCards).filterBy(
      listFormat
    );

    if (listFormat.startsWith("lowest"))
      cardManager
        .filterBy(
          listFormat.replace("lowest", "highest") as keyof typeof TFilterTypes
        )
        .filterBy(listFormat);

    return hasSearchContent
      ? cardManager.cards.filter(
          ({
            name: cardName,
            class: { name: cardClassName },
            bodyPart: { name: cardBodyPart },
            energyCost: cardEnergyCost,
            tags: cardTags,
          }) =>
            cardName.toLowerCase().includes(axieName.toLowerCase()) &&
            cardClassName.includes(axieClassName) &&
            cardBodyPart.includes(axieBodyPart) &&
            cardEnergyCost.includes(axieEnergyCost) &&
            cardTags
              .map(({ name: tagName }) => tagName.includes(axieTag))
              .includes(true)
        )
      : cardManager.cards;
  }, [
    axieName,
    axieClassName,
    axieBodyPart,
    axieEnergyCost,
    axieTag,
    listFormat,
  ]);

  return (
    <div className="container5" id={theme}>
      <div className="container-responsiv">
        <HeaderTop />
        <ComponentNav cards="select-menu" />
        <div className="container-main" id={theme}>
          <form action="#">
            <div className="search-x">
              <input
                type="search"
                placeholder="Search cards"
                value={axieName}
                onChange={(e) => setAxieName(e.target.value)}
              />
              <img src={search_icon} alt="" />
            </div>
            <div className="dropdown-edit">
              <i className="fa-solid fa-caret-down"></i>

              <select
                onChange={(e) =>
                  setAxieClassName(
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
                name=""
                id=""
                onChange={(e) =>
                  setAxieBodyPart(
                    e.target.value === "Part Type"
                      ? ""
                      : e.target.value.toLowerCase()
                  )
                }
              >
                <option defaultChecked>Part Type</option>
                <option value="eyes">Eyes</option>
                <option value="ears">Ears</option>
                <option value="back">Back</option>
                <option value="horn">Horn</option>
                <option value="mouth">Mouth</option>
                <option value="tail">Tail</option>
              </select>
            </div>
            <div className="dropdown-edit">
              <i className="fa-solid fa-caret-down"></i>

              <select
                name=""
                id=""
                onChange={(e) =>
                  setAxieEnergyCost(
                    e.target.value === "Energy Cost" ? "" : e.target.value
                  )
                }
              >
                <option value="">Energy Cost</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="dropdown-edit">
              <i className="fa-solid fa-caret-down"></i>

              <select
                name=""
                id=""
                onChange={(e) =>
                  setAxieTag(
                    e.target.value === "Tag" ? "" : e.target.value.toLowerCase()
                  )
                }
              >
                <option defaultChecked>Tag</option>
                <option value="attack">Attack</option>
                <option value="skill">Skill</option>
                <option value="power">Power</option>
                <option value="secret">Secret</option>
                <option value="retain">Retain</option>
                <option value="innate">Innate</option>
                <option value="banish">Banish</option>
              </select>
            </div>
          </form>
          <div className="backgrundp1">
            <div className="aAz">
              <i className="fa-solid fa-caret-down"></i>
              <select
                name=""
                id=""
                onChange={(e) =>
                  setListFormat(
                    e.target.value.toLowerCase() as keyof typeof TFilterTypes
                  )
                }
              >
                <option defaultChecked value="aZ">
                  Nome A - Z
                </option>
                <option value="zA">Nome Z - A</option>
                <option value="highestDamage">Maior Dano</option>
                <option value="lowestDamage">Menor Dano</option>
                <option value="highestShield">Maior Escudo</option>
                <option value="lowestShield">Menor Escudo</option>
                <option value="highestHealth">Maior Vida</option>
                <option value="lowestHealth">Menor Vida</option>
                <option value="highestEnergy">Maior Energia</option>
                <option value="lowestEnergy">Menor Energia</option>
              </select>
            </div>
            <div className="backgroundp2">
              {filteredCards.map((card: TCard) => (
                <CardAxie
                  onClick={() => toggleFavorite(card, "CARD")}
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
