import "../../style/cardRuna.scss";
import { TRuna } from "./index";

export function Runa(card: TRuna) {
  return (
    <div className="card-box-runa">
      <div className="card-box-root">
        <div className="card-box-background-border">
          <img
            src={card.cardStyle.imageBorderCard}
            alt=""
          />
        </div>
        <div className="card-box-img-runa">
          <img
            src={card.cardStyle.imageCard}
            alt=""
          />
        </div>
        <div className="card-box-img-background">
          <img
            src={card.cardStyle.backgroundCard}
            alt=""
          />
        </div>
        <span className="card-description">
          Gain 10 bonus Shield from cards. Gain 3 Damage Boost whenever using a
          Shield card. <span className="keyword">bbbbbbb</span>
        </span>
        <span className="card-box-title">Adaptive Program</span>
        <div className="card-box-status-ruan">
          <img
            src={card.class.graphiURL}
            alt={card.class.name}
          />
        </div>
      </div>
    </div>
  );
}
