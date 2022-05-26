import "../../style/card.scss";
import frameEnergy from "../../assets/img/frame-energy.png";
import energyIcon from "../../assets/img/energy-icon.png";
import parse from "html-react-parser";
import {
  FavoritedCardsHandler,
  toggleFavorite,
} from "../../modules/CardFavoriteHandler";

import type { TCurse } from "../../types";

export function CardCurse(card: TCurse) {
  return (
    <div className="box-card-root">
      <div className="box-card-sub-root">
        <div className="box-card" onClick={() => toggleFavorite(card, "CURSE")}>
          <div
            className={
              FavoritedCardsHandler.contains({
                id: card.cardId,
                type: "CURSE",
              })
                ? "favorite"
                : null
            }
            id={String(card.cardId)}
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
          <div className="box-card-border"></div>r
          <div className="box-card-background">
            <img src={card.cardStyle.backgroundCard} alt="" />
          </div>
          <div className="box-card-img-axie">
            <img src={card.cardStyle.imageCard} alt="" />
          </div>
          <div className="box-card-img-bottom-border-img">
            <img src={card.cardStyle.imageBottomCard} alt="" />
          </div>
          {card.cardInformation ? (
            <div className="box-card-notification-icon">
              <span>i</span>
              <span className="box-card-notification-description">
                {card.cardInformation}
              </span>
            </div>
          ) : undefined}
          <div className="card-box-img-top-energy">
            <div className="card-box-background-energy">
              <img src={frameEnergy} alt="" />
            </div>
            <div className="card-box-icon-energy">
              <img src={energyIcon} alt="" />
            </div>
            <span>X</span>
          </div>
          <span className="name-axie-card">{card.name}</span>
          <div className="card-box-img-skill">
            {card.tags.map(({ graphiURL, name }, index) => (
              <div id={`desk-status-skill${index + 1}`}>
                <img id={`id-status-img${index}`} src={graphiURL} alt={name} />
                <div
                  id={`desc-status${index + 1}`}
                  className="card-box-card-tags-desc"
                >
                  <span>{name}</span>
                </div>
              </div>
            ))}
          </div>
          <span className="card-box-description">
            {(() => {
              const { description, keyWordType } = card;

              const cardDescriptionHasKeyWord = keyWordType.map(({ keyWord }) =>
                description?.toLowerCase().includes(keyWord?.toLowerCase())
              )[0];

              if (!cardDescriptionHasKeyWord)
                return (
                  <span className="card-box-description">{description}</span>
                );

              let descriptionWithKeyWord = description;

              keyWordType.map(
                ({ keyWord, keywordDescription }) =>
                  (descriptionWithKeyWord = descriptionWithKeyWord.replace(
                    keyWord.toLowerCase(),
                    `<span className='card-box-keyword-tooltip'>
                      ${keyWord}
                      <p className="card-box-keyword-description">
                        ${keywordDescription}
                      </p>
                    </span>
                    `
                  ))
              );
              return parse(descriptionWithKeyWord);
            })()}
          </span>
        </div>
      </div>
    </div>
  );
}
