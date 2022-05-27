export enum TFilterTypes {
  "az",
  "za",
  "highestdamage",
  "lowestdamage",
  "highestshield",
  "lowestshield",
  "highesthealth",
  "lowesthealth",
  "highestenergy",
  "lowestenergy",
}

export default class CardFilterListHandler {
  protected readonly filterTypes = {
    az: () =>
      this.cards.sort((firstCard, secondCard) =>
        firstCard.name.localeCompare(secondCard.name, "pt-br")
      ),
    za: () =>
      this.cards.sort((firstCard, secondCard) =>
        secondCard.name.localeCompare(firstCard.name, "pt-br")
      ),
    highestdamage: () =>
      this.cards.sort((firstCard, secondCard) => {
        const firstCardAttackValue =
          firstCard.status?.attack?.attackDamage ?? 0;
        const secondCardAttackValue =
          secondCard.status?.attack?.attackDamage ?? 0;

        return secondCardAttackValue - firstCardAttackValue;
      }),
    lowestdamage: () =>
      this.cards.sort((firstCard, secondCard) => {
        const firstCardAttackValue = firstCard.status?.attack?.attackDamage;
        const secondCardAttackValue = secondCard.status?.attack?.attackDamage;

        return firstCardAttackValue - secondCardAttackValue;
      }),
    highestshield: () =>
      this.cards.sort((firstCard, secondCard) => {
        const firstCardShieldValue =
          firstCard.status?.shield?.shieldDamage ?? 0;
        const secondCardShieldValue =
          secondCard.status?.shield?.shieldDamage ?? 0;

        return secondCardShieldValue - firstCardShieldValue;
      }),
    lowestshield: () =>
      this.cards.sort((firstCard, secondCard) => {
        const firstCardShieldValue = firstCard.status?.shield?.shieldDamage;
        const secondCardShieldValue = secondCard.status?.shield?.shieldDamage;

        return firstCardShieldValue - secondCardShieldValue;
      }),
    highesthealth: () =>
      this.cards.sort((firstCard, secondCard) => {
        const firstCardHealthValue =
          firstCard.status?.healing?.healingAmount ?? 0;
        const secondCardHealthValue =
          secondCard.status?.healing?.healingAmount ?? 0;

        return secondCardHealthValue - firstCardHealthValue;
      }),
    lowesthealth: () =>
      this.cards.sort((firstCard, secondCard) => {
        const firstCardHealthValue = firstCard.status?.healing?.healingAmount;
        const secondCardHealthValue = secondCard.status?.healing?.healingAmount;

        return firstCardHealthValue - secondCardHealthValue;
      }),
    highestenergy: () =>
      this.cards.sort((firstCard, secondCard) => {
        const firstCardEnergyValue = firstCard.energyCost ?? 0;
        const secondCardEnergyValue = secondCard.energyCost ?? 0;

        return secondCardEnergyValue - firstCardEnergyValue;
      }),
    lowestenergy: () =>
      this.cards.sort((firstCard, secondCard) => {
        const firstCardEnergyValue = firstCard.energyCost ?? 0;
        const secondCardEnergyValue = secondCard.energyCost ?? 0;

        return firstCardEnergyValue - secondCardEnergyValue;
      }),
  };

  constructor(public cards: any[]) {}

  public filterBy(by: keyof typeof TFilterTypes) {
    return this.filterTypes[by](), this;
  }
}
