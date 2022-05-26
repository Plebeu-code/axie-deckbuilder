
export type TCurse = {
  name: string;
  cardId?: number;
  description: string | undefined;
  cardInformation: string | undefined;
  energyCost: string | undefined;
  status: Status | undefined;
  bodyPart: BodyPart | undefined;
  class: BodyPart | undefined;
  tags: BodyPart[] | undefined ;
  cardStyle: CardStyle;
  keyWordType: KeyWordType[];
}

interface KeyWordType {
  keyWord: string;
  keywordDescription: string;
}

interface CardStyle {
  backgroundCard: string;
  imageCard: string;
  imageBottomCard: string;
}

interface BodyPart {
  graphicURL?: string;
  name: string;
  graphiURL?: string;
}

interface Status {
  healing?: Healing;
  attack?: Attack;
}

interface Attack {
  attackImage: string;
  attackDamage: string;
}

interface Healing {
  healingImage: string;
  healingAmount: string;
}