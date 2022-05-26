export type TCard = {
  name: string;
  description: string | undefined;
  id?: number;
  cardInformation: string | undefined;
  cardType: string | undefined;
  action: string | undefined;
  energyCost: string | undefined;
  status?: Status | undefined;
  bodyPart: BodyPart;
  class: BodyPart;
  tags: BodyPart[] | undefined;
  cardStyle: CardStyle;
  keyWordType: KeyWordType[] | undefined;
};

interface KeyWordType {
  keyWord: string;
  keywordDescription: string;
}

interface CardStyle {
  backgroundCard: string;
  imageCard: string;
  imageBottomCard: string;
  imageTopCard?: string | undefined;
}

interface BodyPart {
  graphiURL: string;
  name: string;
}

interface Status {
  attack?: Attack | undefined;
  shield?: Shield | undefined;
  healing?: Healing | undefined;
}

interface Healing {
  healingImage: string;
  healingAmount: number | string;
}

interface Shield {
  shieldImage: string;
  shieldDamage: number | string;
}

interface Attack {
  attackImage: string;
  attackDamage: number | string;
}
