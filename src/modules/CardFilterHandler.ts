export enum TFilterTypes {
  "aZ",
  "zA",
  "highestDamage",
  "lowestDamage",
  "highestShield",
  "lowestShield",
  "highestHealth",
  "lowestHealth",
  "highestEnergy",
  "lowestEnergy",
}

export default class CardFilterHandler {
  constructor(public cards: any[]) {}

  public filterBy(by: keyof typeof TFilterTypes): this {
    if (by === "aZ") {
      this.cards.sort((_, $) => _.name - $.name);
    }
    if (by === "zA") {
      this.cards.sort((_, $) => $.name - _.name);
    }
    return this;
  }
}
