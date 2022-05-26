import "./headerTop.scss";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { CustomizedSwitches } from "../DarkMode/darkmode";

export function HeaderTop() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="container-apresentacao" id={theme}>
      <div className="responsive-apre" id={theme}>
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
          <select name="languagem">
            <option value="Ing" defaultChecked>
              Inglês
            </option>
            <option value="pt_br">Português</option>
          </select>
          <CustomizedSwitches />
        </div>
      </div>
    </div>
  );
}
