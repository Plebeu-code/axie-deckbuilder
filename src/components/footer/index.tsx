import "./footer.scss";
import peixinho from "../../assets/img/axie-infinity.png";
import logo_white from "../../assets/img/BAYZ_Logo_White.png";
import bayz_gg from "../../assets/img/bayz.gg.png";
import icon_discord from "../../assets/icon/Discord-Logo.png";

export function Footer() {
  return (
    <div className="container-footer">
      <div className="footer-responsiv">
        <img src={peixinho} alt="Axie" id="peixinho1" />
        <div className="footer-main">
          <div className="footer-logo">
            <img src={logo_white} alt="" />
            <div></div>
            <img src={bayz_gg} alt="" />
          </div>
          <div className="footer-social">
            <span>NOSSAS <p>REDES</p></span>
            <div className="footer-social-redes">
              <img src={icon_discord} alt="Discord" />
              <img src={icon_discord} alt="Discord" />
              <img src={icon_discord} alt="Discord" />
              <img src={icon_discord} alt="Discord" />
              <img src={icon_discord} alt="Discord" />
              <img src={icon_discord} alt="Discord" />
            </div>
          </div>
        </div>
        <img src={peixinho} alt="Axie" id="peixinho2" />
      </div>
    </div>
  );
}
