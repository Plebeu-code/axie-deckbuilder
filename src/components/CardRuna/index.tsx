import {
  FavoritedCardsHandler,
  toggleFavorite,
} from "../../modules/CardFavoriteHandler";
import "./style.scss";

import { TTool } from "../../types";

export function CardRune(card: TTool) {
  return (
    <div className="card-box-runa">
      <div
        className="card-box-root"
        onClick={() => toggleFavorite(card, "RUNE")}
      >
        <div
          className={
            FavoritedCardsHandler.contains({
              id: card.id,
              type: "RUNE",
            })
              ? "favorite"
              : null
          }
          id={String(card.id)}
        >
          <div className="favorite-star">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
            </svg>
          </div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path>
          </svg>
        </div>
        <div className="card-box-background-border">
          <img src={card.cardStyle.imageBottomCard} alt="" />
        </div>
        <div className="card-box-img-runa">
          <img src={card.cardStyle.imageCard} alt="" />
        </div>
        <div className="card-box-img-background">
          <img src={card.cardStyle.backgroundCard} alt="" />
        </div>
        <span className="card-description">
          Gain 10 bonus Shield from cards. Gain 3 Damage Boost whenever using a
          Shield card. <span className="keyword">bbbbbbb</span>
        </span>
        <span className="card-box-title">{card.name}</span>
        <div className="card-box-status-ruan">
          <img src={card.class.graphiURL} alt={card.class.name} />
        </div>
      </div>
    </div>
  );
}
