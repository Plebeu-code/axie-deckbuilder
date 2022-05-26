export { CardAxie } from "./Card";

export type TCard = {
  name: string;
  description: string | undefined;
  cardInformation: string | undefined;
  cardType: string | undefined;
  action: string | undefined;
  energyCost: string | undefined;
  status: Status | undefined;
  bodyPart: BodyPart;
  class: BodyPart;
  tags: BodyPart[] | undefined;
  cardStyle: CardStyle;
  keyWordType: KeyWordType[] | undefined;
}

interface KeyWordType {
  keyWord: string;
  keywordDescription: string;
}

interface CardStyle {
  backgroundCard: string;
  imageCard: string;
  imageBottomCard: string;
  imageTopCard: string;
}

interface BodyPart {
  graphiURL: string;
  name: string;
}

interface Status {
  attack: Attack;
  shield: Shield;
  healing: Healing;
}

interface Healing {
  healingImage: string;
  healingAmount: number;
}

interface Shield {
  shieldImage: string;
  shieldDamage: number;
}

interface Attack {
  attackImage: string;
  attackDamage: number;
}