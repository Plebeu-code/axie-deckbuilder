export type TRuna = {
  name: string;
  cardId?: number;
  description: string | undefined;
  cardInformation: string | undefined;
  energyCost: string | undefined;
  status: Status | undefined;
  bodyPart: BodyPart | undefined;
  class: BodyPart | undefined;
  tags: BodyPart[] | undefined;
  cardStyle: CardStyle | undefined;
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
}

interface BodyPart {
  graphiURL: string;
  name: string;
}

interface Status {
  healing: Healing;
}

interface Healing {
  healingImage: string;
  healingAmount: string;
}