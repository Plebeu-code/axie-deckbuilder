import { useContext } from "react";
//! Style
import "../style/pageRuna.scss";
//!Components
import { Footer } from "../components/Footer";
import { ComponentNav } from "../components/Nav/ComponentNav";
import { HeaderTop } from "../components/Header/HeaderTop";
import { ThemeContext } from "../App";

import { StatusEffect, TStatusEffect } from "../components/StatusEffect";

import DefaultEffects from "../json/statusEffects.json";

export function PageEffects() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="container5" id={theme}>
      <div className="container-responsiv">
        {/* apresentação com logo */}
        <HeaderTop />
        {/* Menu do site */}
        <ComponentNav status="select-menu" />
        {/* conteúdo princiapal do site  */}
        <div className="container-main" id={theme}>
          <div className="backgrundp1">
            <div className="aAz">
              <i className="fa-solid fa-caret-down"></i>
              <select name="" id="">
                <option value="">Nome A - Z</option>
                <option value="">Nome Z - A</option>
              </select>
            </div>
            <div className="backgroundp22">
              {DefaultEffects.map((Tstatus: TStatusEffect) => (
                <StatusEffect
                  language={"en-us"}
                  {...{
                    ...Tstatus,
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
