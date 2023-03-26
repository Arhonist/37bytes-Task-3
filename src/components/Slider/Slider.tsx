import React, { FunctionComponent, useState } from 'react';
import styles from './Slider.module.css';
import CardsList from '../CardsList/CardsList';
import { CardProps } from '../../interfaces/dataInterfaces';

interface Props {
  cardsData: CardProps[];
}

const Slider: FunctionComponent<Props> = ({ cardsData }) => {
  const rightColumnRef = React.useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<CardProps>(cardsData[0]);
  const [prevImgElement, setPrevImgElement] = useState<HTMLImageElement | null>(
    null
  );

  const createNewImageElement = (url: string, alt: string) => {
    const newImg = document.createElement('img');
    newImg.classList.add(styles.fadebleImg);
    newImg.src = url;
    newImg.alt = alt;
    return newImg;
  };

  const handleCardClick = (card: CardProps) => {
    setActiveCard(card);

    const newImageElement = createNewImageElement(card.image, card.title);
    rightColumnRef.current?.append(newImageElement);

    prevImgElement?.classList.add(styles.fadeInImage);
    setTimeout(() => {
      prevImgElement?.remove();
    }, 1600);

    setPrevImgElement(newImageElement);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.leftColumn}>
        <CardsList
          cardsData={cardsData}
          activeCard={activeCard}
          handleCardClick={handleCardClick}
        />
      </div>
      <div
        ref={rightColumnRef}
        className={styles.rightColumn}
        onLoad={() => handleCardClick(cardsData[0])}
      >
        <img src="img/placeholder.png" className={styles.invisibleImage} />
      </div>
    </div>
  );
};

export default Slider;
