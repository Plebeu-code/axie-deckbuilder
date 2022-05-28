export type TTool = {
  name: string;
  id: number;
  description: string | undefined ;
  cardInformation: string | undefined;
  energyCost: string | undefined;
  status: Status | undefined;
  bodyPart: BodyPart | undefined;
  class: BodyPart | undefined;
  tags: BodyPart[] | undefined;
  cardStyle: CardStyle;
  keyWordType: KeyWordType[] | undefined;
  onClick?: () => void;
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
  graphiURL: string;
  name: string;
}

interface Status {
  healing?: Healing;
  attack?: Attack;
  shield?: Shield;
}

interface Shield {
  shieldImage: string;
  shieldDamage: string;
}

interface Attack {
  attackImage: string;
  attackDamage: string;
}

interface Healing {
  healingImage: string;
  healingAmount: string;
}