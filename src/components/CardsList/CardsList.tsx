import { CardsListProps } from '../../interfaces/dataInterfaces';
import Card from '../Card/Card';

function CardsList({ cardsData, activeCard, handleCardClick }: CardsListProps) {
  return (
    <>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          card={card}
          activeCard={activeCard}
          handleCardClick={handleCardClick}
        />
      ))}
    </>
  );
}

export default CardsList;
