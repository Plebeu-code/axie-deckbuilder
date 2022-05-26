import DefaultCards from "../json/cardsAxies.json.old2";
import CurseCards from "../json/cardsCurses.json";
import ToolCards from "../json/cardsTools.json";
import RuneCards from "../json/cardsRunes.json";
import CharmCards from "../json/cardsCharms.json";

import { ECardTypes } from "../modules/CardFavoriteHandler";

export type TPageFavorite = {
  cardId: number;
  type: keyof typeof ECardTypes;
  card: any;
};

class PageFavoriteHandler {
  private _favorites: TPageFavorite[] = [];

  public get data(): TPageFavorite[] {
    return this._favorites;
  }

  public remove({ cardId, type }: Omit<TPageFavorite, "card">): this {
    return (
      (this._favorites = this._favorites.filter(
        ({ cardId: _cardId, type: _type, card: _card }) => {
          if (cardId !== _cardId && type !== _type)
            return {
              cardId,
              type,
              card: _card,
            };
        }
      )),
      this
    );
  }

  public add({ cardId, type }: Omit<TPageFavorite, "card">): this {
    if (type === "CARD")
      return (
        DefaultCards.forEach((card, cardIndex) =>
          cardId === cardIndex
            ? this._favorites.unshift({
                cardId,
                type,
                card,
              })
            : null
        ),
        this
      );
    if (type === "CURSE")
      return (
        CurseCards.forEach((card, cardIndex) =>
          cardId === cardIndex
            ? this._favorites.unshift({
                cardId,
                type,
                card,
              })
            : null
        ),
        this
      );
    if (type === "TOOL")
      return (
        ToolCards.forEach((card, cardIndex) =>
          cardId === cardIndex
            ? this._favorites.unshift({
                cardId,
                type,
                card,
              })
            : null
        ),
        this
      );
    if (type === "RUNE")
      return (
        RuneCards.forEach((card, cardIndex) =>
          cardId === cardIndex
            ? this._favorites.unshift({
                cardId,
                type,
                card,
              })
            : null
        ),
        this
      );
    if (type === "CHARM")
      return (
        CharmCards.forEach((card, cardIndex) =>
          cardId === cardIndex
            ? this._favorites.unshift({
                cardId,
                type,
                card,
              })
            : null
        ),
        this
      );

    return this;
  }

  public contains({ cardId, type }: Omit<TPageFavorite, "card">): boolean {
    return this._favorites
      .map(
        ({ cardId: _cardId, type: _type }) =>
          cardId === _cardId && type === _type
      )
      .includes(true);
  }
}

export const pageFavoriteHandler = new PageFavoriteHandler();
