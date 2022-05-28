import "./footer.scss";
import peixinho from "../../assets/img/axie-infinity.png";
import logo_white from "../../assets/img/BAYZ_Logo_White.png";
import bayz_gg from "../../assets/img/bayz.gg.png";
import icon_discord from "../../assets/icon/Discord-Logo.png";

import icon_linkin from "../../assets/icon/linkdin.png";
import icon_youtube from "../../assets/icon/youtube.png";
import icon_tiktok from "../../assets/icon/tiktok.png";
import icon_twitter from "../../assets/icon/twitter.png";
import icon_instagram from "../../assets/icon/instagram.png";

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
              <a href="https://discord.com/invite/bayz" rel='noreferrer' target="_blank"><img src={icon_discord} alt="Discord" /></a>
              <a href="https://twitter.com/BAYZgg" rel='noreferrer' target="_blank"><img src={icon_twitter} alt="Link Twitter Bayz" /></a>
              <a href="https://www.instagram.com/bayzgg/" rel='noreferrer' target="_blank"><img src={icon_instagram} alt="Link Instagram Bayz" /></a>
              <a href="https://www.linkedin.com/company/bayzgg/mycompany/" rel='noreferrer' target="_blank"><img src={icon_linkin} alt="Link Linkdin Bayz" /></a>
              <a href="https://www.youtube.com/c/BAYZgg" rel='noreferrer' target="_blank"><img src={icon_youtube} alt="Link Youtube Bayz" /></a>
              <a href="https://www.tiktok.com/@bayzgg" rel='noreferrer' target="_blank"><img src={icon_tiktok} alt="Link TikTok Bayz" /></a>
            </div>
          </div>
        </div>
        <img src={peixinho} alt="Axie" id="peixinho2" />
      </div>
    </div>
  );
}
