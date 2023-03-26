interface CardProps {
  icon: string;
  title: string;
  content: string;
  image: string;
}

interface CardComponentProps {
  card: CardProps;
  activeCard: CardProps;
  handleCardClick: CallableFunction;
}

interface CardsListProps {
  cardsData: CardProps[];
  activeCard: CardProps;
  handleCardClick: CallableFunction;
}

export type { CardProps, CardComponentProps, CardsListProps };
