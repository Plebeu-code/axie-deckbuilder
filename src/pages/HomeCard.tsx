//! React
import { useMemo, useState, useContext } from "react";
//! Style
import "../style/homeCard.scss";
//! Assets
import search_icon from "../assets/icon/search-icon.svg";
//! Components
import { CardAxie } from "../components/CardAxie";
import { TCard } from "../types";
import DefaultCards from "../json/cardsAxies.json.old2";
import { Footer } from "../components/Footer/Footer";
import { ComponentNav } from "../components/Nav/ComponentNav";
import { HeaderTop } from "../components/Header/HeaderTop";
import { ThemeContext } from "../App";
import * as fs from "fs";

class CardHandler {
  constructor(protected readonly cached_cards: TCard[]) {}

  public get cards() {
    return this.cached_cards;
  }

  public formatBy(format: string): this {
    const formatFunctions = {
      az: () =>
        this.cached_cards.sort(
          ({ name: currentCardName }, { name: nextCardName }) =>
            currentCardName.localeCompare(nextCardName, "pt-br")
        ),
      za: () =>
        this.cached_cards.sort(
          ({ name: currentCardName }, { name: nextCardName }) =>
            nextCardName.localeCompare(currentCardName, "pt-br")
        ),
      highestdamage: () =>
        this.cached_cards
          .sort(({ status: currentCardStatus }, { status: nextCardStatus }) => {
            if (!currentCardStatus || !("attack" in currentCardStatus))
              return -1;
            if (!nextCardStatus || !("attack" in nextCardStatus)) return 1;

            return (
              Number(currentCardStatus?.attack?.attackDamage) -
              Number(nextCardStatus?.attack?.attackDamage)
            );
          })
          .reverse(),
      lowestdamage: () =>
        this.cached_cards
          .sort(({ status: currentCardStatus }, { status: nextCardStatus }) => {
            if (!currentCardStatus || !("attack" in currentCardStatus))
              return -1;
            if (!nextCardStatus || "attack" in nextCardStatus) return 1;

            return (
              Number(nextCardStatus?.attack?.attackDamage) -
              Number(currentCardStatus?.attack?.attackDamage)
            );
          })
          .reverse(),
      highestshield: () =>
        this.cached_cards
          .sort(({ status: currentCardStatus }, { status: nextCardStatus }) => {
            if (!currentCardStatus || !("shield" in currentCardStatus))
              return -1;
            if (!nextCardStatus || !("shield" in nextCardStatus)) return 1;

            return (
              Number(currentCardStatus.shield.shieldDamage) -
              Number(nextCardStatus.shield.shieldDamage)
            );
          })
          .reverse(),
      lowestshield: () =>
        this.cached_cards
          .sort(({ status: currentCardStatus }, { status: nextCardStatus }) => {
            if (!currentCardStatus || !("shield" in currentCardStatus))
              return -1;
            if (!nextCardStatus || !("shield" in nextCardStatus)) return 1;

            return (
              Number(nextCardStatus.shield.shieldDamage) -
              Number(currentCardStatus.shield.shieldDamage)
            );
          })
          .reverse(),
      highesthealth: () =>
        this.cached_cards
          .sort(({ status: currentCardStatus }, { status: nextCardStatus }) => {
            if (!currentCardStatus || !("healing" in currentCardStatus))
              return -1;
            if (!nextCardStatus || !("healing" in nextCardStatus)) return 1;

            return (
              Number(currentCardStatus.healing.healingAmount) -
              Number(nextCardStatus.healing.healingAmount)
            );
          })
          .reverse(),
      lowesthealth: () =>
        this.cached_cards.sort(
          ({ status: currentCardStatus }, { status: nextCardStatus }) => {
            if (!currentCardStatus || !("healing" in currentCardStatus))
              return 1;
            if (!nextCardStatus || !("healing" in nextCardStatus)) return -1;

            return (
              Number(nextCardStatus.healing.healingAmount) -
              Number(currentCardStatus.healing.healingAmount)
            );
          }
        ),
      highestenergy: () =>
        this.cached_cards.sort(
          (
            { energyCost: currentCardEnergyCost },
            { energyCost: nextCardEnergyCost }
          ) => {
            return (
              parseInt(nextCardEnergyCost) - parseInt(currentCardEnergyCost)
            );
          }
        ),
      lowestenergy: () =>
        this.cached_cards.sort(
          (
            { energyCost: currentCardEnergyCost },
            { energyCost: nextCardEnergyCost }
          ) => {
            return (
              parseInt(currentCardEnergyCost) - parseInt(nextCardEnergyCost)
            );
          }
        ),
    };
    void formatFunctions[format]();
    return this;
  }
}

export function HomeCard() {
  let [axieName, setAxieName] = useState(""),
    [axieClassName, setAxieClassName] = useState(""),
    [axieBodyPart, setAxieBodyPart] = useState(""),
    [axieEnergyCost, setAxieEnergyCost] = useState(""),
    [axieTag, setAxieTag] = useState(""),
    [listFormat, setListFormat] = useState("az");

  const { theme } = useContext(ThemeContext);

  const filteredCards = useMemo(() => {
    const hasSearchContent =
      axieName || axieClassName || axieBodyPart || axieEnergyCost || axieTag
        ? true
        : false;

    const cardManager = new CardHandler(DefaultCards as any).formatBy(
      listFormat
    );

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
            cardClassName.toLowerCase().includes(axieClassName) &&
            cardBodyPart.toLowerCase().includes(axieBodyPart) &&
            cardEnergyCost.includes(axieEnergyCost) &&
            cardTags
              .map(({ name: tagName }) =>
                tagName.toLowerCase().includes(axieTag)
              )
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
    // Conteudo principal
    <div className="container5" id={theme}>
      {/* Responsividade do site */}
      <div className="container-responsiv">
        {/* apresentação com logo */}
        <HeaderTop />
        {/* Menu do site */}
        <ComponentNav cards="select-menu" />
        {/* conteúdo princiapal do site  */}
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
                onChange={(e) => setListFormat(e.target.value.toLowerCase())}
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
                  key={card.id}
                  {...{
                    ...card,
                    cardId: card.id,
                  }}
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
