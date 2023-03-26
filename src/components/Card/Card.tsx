import styles from './Card.module.css';
import { CardComponentProps } from '../../interfaces/dataInterfaces';
import cn from 'classnames';

function Card({ card, activeCard, handleCardClick }: CardComponentProps) {
  const isCardActive = card === activeCard;
  const cardClassName = cn(styles.card, { [styles.active]: isCardActive });
  const contentClassNames = cn(styles.content, {
    [styles.active]: isCardActive,
  });

  return (
    <div className={cardClassName} onClick={() => handleCardClick(card)}>
      <div className={styles.cardLeftColumn}>
        {<img src={card.icon} alt={card.title} />}
      </div>
      <div className={styles.cardRightColumn}>
        <h2>{card.title}</h2>
        <p className={contentClassNames}>{card.content}</p>
      </div>
    </div>
  );
}

export default Card;
