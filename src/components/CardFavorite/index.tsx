import { ECardTypes } from "../../modules/CardFavoriteHandler";

import { CardAxie } from "../CardAxie";
import { CardCurse } from "../CardCurse";
import { CardTool } from "../CardTool";
import { CardCharm } from "../CardCharm";
import { CardRuna } from "../CardRuna";
import { MouseEventHandler } from "react";

interface CardFavoriteProps {
  type: keyof typeof ECardTypes;
  cardId: number;
  card: any;
}

export function CardFavorite({ cardId, type, card }: CardFavoriteProps) {
  if (type === "CARD")
    return (
      <>
        <CardAxie key={cardId} {...{ ...card, id: cardId }} />
      </>
    );
  if (type === "CURSE")
    return (
      <>
        <CardCurse key={cardId} {...{ ...card, cardId }} />
      </>
    );
  if (type === "TOOL")
    return (
      <>
        <CardTool key={cardId} {...{ ...card, cardId }} />
      </>
    );
  if (type === "RUNE")
    return (
      <>
        <CardRuna key={cardId} {...{ ...card, cardId }} />
      </>
    );
  if (type === "CHARM")
    return (
      <>
        <CardCharm key={cardId} {...{ ...card, cardId }} />
      </>
    );
}
