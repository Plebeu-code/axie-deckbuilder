import "./nav.scss";
import IconCurse from "../../assets/icon/curses.png";
import IconCharm from "../../assets/icon/charms.png";
import IconFavorits from "../../assets/icon/favourites.png";
import IconRunes from "../../assets/icon/runes.png";
import IconTools from "../../assets/icon/tools.png";
import { Link } from "react-router-dom";

import type { TNav } from "./"

export function ComponentNav(props: TNav) {
  return (
    <div className="container-header">
      <ul>
        <li id={props.cards} key={1}>
          <Link to="/"> <img src="https://media.discordapp.net/attachments/560251522127101972/974376301492330516/unknown.png" alt="Icon Cards" /> CARDS </Link>
        </li>
        <li id={props.curses} key={2}>
          <Link to="/curses"><img src={IconCurse} alt="Icon Curses" /> CURSES</Link>
        </li>
        <li id={props.tools} key={3}>
          <Link to="/tools"><img src={IconTools} alt="Icon Tools" /> TOOLS</Link>
        </li>
        <li id={props.runes} key={4}>
          <Link to="/runes"><img src={IconRunes} alt="Icon Runes" /> RUNES</Link>
        </li>
        <li id={props.charms} key={5}>
          <Link to="/charms"><img src={IconCharm} alt="Icon Charms" /> CHARMS</Link>
        </li>
        <li id={props.status} key={6}>
          <Link to="/effects"><img src={IconCharm} alt="Icon Effects" /> STATUS EFFECTS</Link>
        </li>
        <li id={props.favorites} key={7}>
          <Link to="/favorite"><img src={IconFavorits} alt="Icon Favorites" />  FAVORITES</Link>
        </li>
      </ul>
    </div>
  );
}
