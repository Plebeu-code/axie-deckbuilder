import { ECardTypes } from "../../modules/CardFavoriteHandler";



interface CardFavoriteProps {
  type: keyof typeof ECardTypes;
  cardId: number;
  card: any;
}

export function CardFavorite({ cardId, type, card }: CardFavoriteProps) {
  
}
