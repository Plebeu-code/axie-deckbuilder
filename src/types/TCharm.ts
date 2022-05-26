export type TCharm = {
  name: string;
  cardId?: number
  description: string;
  cardInformation: string;
  energyCost: string;
  status: Status;
  bodyPart: BodyPart;
  class: BodyPart;
  tags: BodyPart[];
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