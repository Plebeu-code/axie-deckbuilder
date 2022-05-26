import React from "react";
import { pageFavoriteHandler } from "./PageFavoriteHandler";

export enum ECardTypes {
  "CARD",
  "CURSE",
  "TOOL",
  "RUNE",
  "CHARM",
}

export type TLocalStorageFavorite = {
  cardId: number;
  type: keyof typeof ECardTypes;
};

export default class CardFavoriteStorageHandler {
  private _cards: TLocalStorageFavorite[] | null;

  constructor() {
    if (!this.isValid()) return this.mount();
    this._cards = JSON.parse(atob(window.localStorage.getItem("favorites")));
  }

  public get cards(): TLocalStorageFavorite[] {
    return this._cards;
  }

  public isValid(): boolean {
    const localStorageData = window.localStorage.getItem("favorites");
    if (!localStorageData) return void this.mount(), true;
    try {
      const decryptData = atob(localStorageData);
      const validate: TLocalStorageFavorite[] = JSON.parse(decryptData);
      if (typeof validate !== "object") return false;
      return true;
    } catch {
      return false;
    }
  }

  public get exists(): boolean {
    return this._cards ? true : false;
  }

  public contains({ cardId, type: cardType }: TLocalStorageFavorite): boolean {
    return this._cards
      .map(
        ({ cardId: _cardId, type: _type }) =>
          _cardId === cardId && _type === cardType
      )
      .includes(true);
  }

  public remove({ cardId, type: cardType }: TLocalStorageFavorite): this {
    this._cards = this._cards.filter(
      ({ cardId: savedCardId, type: savedCardType }) =>
        savedCardId === cardId && savedCardType === cardType
          ? null
          : ({
              cardId: savedCardId,
              type: savedCardType,
            } as TLocalStorageFavorite)
    );

    return this;
  }

  public add({ cardId, type }: TLocalStorageFavorite): this {
    return (
      void this._cards.unshift({
        cardId,
        type,
      }),
      this
    );
  }

  /**
   * Cria o cache de favoritos.
   */
  public mount(): this {
    this._cards = [];
    return (
      void window.localStorage.setItem("favorites", btoa(JSON.stringify([]))),
      this
    );
  }

  public save(): this {
    return (
      window.localStorage.setItem(
        "favorites",
        btoa(JSON.stringify(this._cards))
      ),
      this
    );
  }
}

export const FavoritedCardsHandler = new CardFavoriteStorageHandler();

export function toggleFavorite({ cardId }: any, type: keyof typeof ECardTypes) {
  const addFavorite = document.getElementById(String(cardId));
  addFavorite.classList.toggle("favorite");

  const cardData: TLocalStorageFavorite = {
    cardId,
    type,
  };

  if (!FavoritedCardsHandler.exists || !FavoritedCardsHandler.isValid())
    return FavoritedCardsHandler.mount().add(cardData).save();

  if (FavoritedCardsHandler.contains(cardData)) {
    return (
      FavoritedCardsHandler.remove(cardData).save(),
      pageFavoriteHandler.remove(cardData)
    );
  }

  return (
    FavoritedCardsHandler.add(cardData).save(),
    pageFavoriteHandler.add(cardData)
  );
}
