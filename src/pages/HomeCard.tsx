import "../style/homeCard.scss";
import charms from "../assets/icon/charms.png";
import curses from "../assets/icon/curses.png";
import favorutes from "../assets/icon/favourites.png";
import search_icon from "../assets/icon/search-icon.svg";
import xXx from "../assets/icon/XXXX.svg";
import { Footer } from "../components/footer/Footer";
import { TCard, CardAxie } from "../components/Card";
import cards from "../cardsAxies.json";
import { useMemo, useState } from "react";

export function HomeCard() {
  console.log('duplicação!');
  
  const [axieNameSearch, setAxieNameSearch] = useState("");
  const [axieClassNameSearch, setClassNameSearch] = useState("");
  const [axieBodyPartSearch, setAxieBodyPart] = useState("");
  const [energySearch, setEnergySearch] = useState("");
  const [tagSearch, setTag] = useState("");

  if (axieClassNameSearch.toLowerCase() === "classe") setClassNameSearch("");
  if (axieBodyPartSearch.toLowerCase() === "tipo de parte")
    setClassNameSearch("");
  if (energySearch.toLowerCase() === "custo de energia") setClassNameSearch("");
  if (tagSearch.toLowerCase() === "tag") setClassNameSearch("");

  const hasSearch =
    axieNameSearch ||
    axieClassNameSearch ||
    axieBodyPartSearch ||
    energySearch ||
    tagSearch
      ? true
      : false;

  const filteredCards = useMemo(() => {
    if (!hasSearch) return cards;
    return cards.filter(
      ({
        name: axieName,
        class: { name: axieClassName },
        bodyPart: { name: axieBodyPartName },
        energyCost,
        tags,
      }) =>
        axieName.toLowerCase().includes(axieNameSearch.toLowerCase()) &&
        axieClassName.toLowerCase() === axieClassNameSearch.toLowerCase() &&
        axieBodyPartName.toLowerCase() === axieBodyPartSearch.toLowerCase()
    );
  }, [
    axieNameSearch,
    axieClassNameSearch,
    axieBodyPartSearch,
    energySearch,
    tagSearch,
  ]);

  console.log(filteredCards);

  return (
    // Conteudo principal
    <div className="container5">
      {/* Responsividade do site */}
      <div className="container-responsiv">
        {/* apresentação com logo */}
        <div className="container-apresentacao">
          <div className="responsive-apre">
            <div className="apresentacao01">
              <img
                src="https://media.discordapp.net/attachments/560251522127101972/964295901705273364/BAYZ_Logo_Vetorizado_White.png"
                alt=""
              />
              <div id="linha_home"></div>
              <img
                src="https://media.discordapp.net/attachments/560251522127101972/964295901348790332/explore_os_cards.png"
                alt=""
              />
            </div>
            <div className="dropdown-language">
              <div className="dropdown-select">
                <img
                  src="https://media.discordapp.net/attachments/888725319228456970/964386957717295124/united-states.png"
                  alt=""
                />
                <span>English</span>
                <i className="fa-solid fa-caret-down"></i>
              </div>
              <div className="dropdown-list">
                <div className="dropdown-list__item">
                  {" "}
                  <img
                    src="https://media.discordapp.net/attachments/560251522127101972/964400226842587156/unknown.png"
                    alt=""
                  />{" "}
                  Português
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Menu do site */}
        <div className="container-header">
          <ul>
            <li id="select-menu">
              <img src={xXx} alt="" /> CARDS
            </li>
            <li>
              <img src={curses} alt="" /> CURSES
            </li>
            <li>
              <img src={curses} alt="" /> TOOLS
            </li>
            <li>
              <img src={curses} alt="" /> RUNES
            </li>
            <li>
              <img src={charms} alt="" /> CHARMS
            </li>
            <li>
              <img src={charms} alt="" /> STATUS EFFECTS
            </li>
            <li>
              <img src={favorutes} alt="" /> FAVORITES
            </li>
          </ul>
        </div>
        {/* conteúdo princiapal do site  */}
        <div className="container-main">
          <form action="#">
            <div className="search-x">
              <input
                type="search"
                name=""
                id=""
                placeholder="Busca de cards"
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
                name=""
                id=""
                onChange={(e) => setAxieBodyPart(e.target.value)}
              >
                <option defaultChecked>Tipo de parte</option>
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
                onChange={(e) => setEnergySearch(e.target.value)}
              >
                <option value="nada">Custo de energia</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="dropdown-edit">
              <i className="fa-solid fa-caret-down"></i>

              <select name="" id="" onChange={(e) => setTag(e.target.value)}>
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
              <select name="" id="">
                <option value="">Nome A - Z</option>
                <option value="">Nome A - Z</option>
                <option value="">Nome A - Z</option>
                <option value="">Nome A - Z</option>
              </select>
            </div>
            <div className="backgroundp2">
              {filteredCards.map((card: TCard) => (
                <CardAxie {...card} />
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
