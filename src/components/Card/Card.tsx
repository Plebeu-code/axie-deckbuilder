import "../../style/card.scss";
import type { TCard } from "./";
import frameEnergy from "../../assets/img/frame-energy.png";
import energyIcon from "../../assets/img/energy-icon.png";
import frameOwnerPlate from "../../assets/img/frame-owner-plate.png";
import parse from "html-react-parser";

export function CardAxie(card: TCard) {
  return (
    <div className="box-card-root">
      <div className="box-card-sub-root">
        <div className="box-card">
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
          {card.status
            ? (() => {
                const { attack, shield, healing } = card.status;

                if (attack && shield)
                  return (
                    <>
                      <div className="box-card-img-top-status-shield2">
                        <img src={shield.shieldImage} alt="" />
                        <span>{shield.shieldDamage}</span>
                      </div>

                      <div className="box-card-img-top-status-heal2">
                        <img src={healing.healingImage} alt="" />
                        <span>{healing.healingAmount}</span>
                      </div>
                    </>
                  );

                if (attack)
                  return (
                    <div className="box-card-img-top-status">
                      <img src={attack.attackImage} alt="" />
                      <span>{attack.attackDamage}</span>
                    </div>
                  );

                if (shield)
                  return (
                    <div className="box-card-img-top-status">
                      <img src={shield.shieldImage} alt="" />
                      <span>{shield.shieldDamage}</span>
                    </div>
                  );

                if (healing)
                  return (
                    <div className="box-card-img-top-status-heal">
                      <img src={healing.healingImage} alt="" />
                      <span>{healing.healingAmount}</span>
                    </div>
                  );
              })()
            : undefined}
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
            <span>{card.energyCost ? card.energyCost : "0"}</span>
          </div>
          <div className="card-box-img-part">
            <div className="card-box-img-part-background">
              <img src={frameOwnerPlate} alt="" />
            </div>
            <div className="card-box-img-part-icon">
              <img src={card.bodyPart.graphiURL} alt={card.bodyPart.name} />
            </div>
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
          <div className="card-box-type-card">
            <img src={card.class.graphiURL} alt={card.class.name} />
          </div>
        </div>
      </div>
    </div>
  );
}
