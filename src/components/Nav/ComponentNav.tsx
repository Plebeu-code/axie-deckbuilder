import "./nav.scss";
import IconCurse from "../../assets/icon/curses.png";
import IconCharm from "../../assets/icon/charms.png";
import IconFavorits from "../../assets/icon/favourites.png";
import { Link } from "react-router-dom";

import type { TNav } from "./"

export function ComponentNav(props: TNav) {
  return (
    <div className="container-header">
      <ul>
        <li id={props.cards} key={1}>
          <Link to="/"> <img src="https://media.discordapp.net/attachments/560251522127101972/974376301492330516/unknown.png" alt="" /> CARDS </Link>
        </li>
        <li id={props.curses} key={2}>
          <Link to="/curses"><img src={IconCurse} alt="" /> CURSES</Link>
        </li>
        <li id={props.tools} key={3}>
          <Link to="/tools"><img src="https://cdn.discordapp.com/attachments/560251522127101972/974376885037465600/unknown.png" alt="" /> TOOLS</Link>
        </li>
        <li id={props.runes} key={4}>
          <Link to="/runes"><img src="https://cdn.discordapp.com/attachments/560251522127101972/974377603806937209/unknown.png" alt="" /> RUNES</Link>
        </li>
        <li id={props.charms} key={5}>
          <Link to="/charms"><img src={IconCharm} alt="" /> CHARMS</Link>
        </li>
        <li id={props.status} key={6}>
          <Link to="/effects"><img src={IconCharm} alt="" /> STATUS EFFECTS</Link>
        </li>
        <li id={props.favorites} key={7}>
          <Link to="/favorite"><img src={IconFavorits} alt="" />  FAVORITES</Link>
        </li>
      </ul>
    </div>
  );
}
