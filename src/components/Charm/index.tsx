export { Charm } from "./Charm";


export type TCharm = {
  name: string;
  description: string;
  potencialPonints: number;
  cardType: string;
  class: Class;
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
  imageBorderCard: string;
}

interface Class {
  graphiURL: string;
  name: string;
}