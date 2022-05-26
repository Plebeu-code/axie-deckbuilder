export { Runa } from "./Runa"


export type TRuna = {
  name: string;
  description: string;
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