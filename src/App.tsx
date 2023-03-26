import React from 'react';
import styles from './App.module.css';
import Slider from './components/Slider/Slider';
import cardsData from './data/cards';
import Button from './components/UI/Button/Button';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1>Решайте задачи, опираясь на данные о&nbsp;рынке труда</h1>
        <Slider cardsData={cardsData} />
        <Button className={styles.button}>Перейти к статистике</Button>
      </div>
    </div>
  );
};

export default App;
