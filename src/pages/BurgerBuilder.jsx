import React, { useState } from 'react';
import styles from '../styles/pages/burgerBuilder.module.css';
import Ingredients from '../components/Ingredients';
import Burger from '../components/Burger';
import Price from '../components/Price';

const BurgerBuilder = () => {
  const buns = [
    {
      id: '101',
      name: 'Bun',
      img: 'https://via.placeholder.com/130.png?text=Bun',
      price: 5,
    },
    {
      id: '102',
      name: 'Bun',
      img: 'https://via.placeholder.com/130.png?text=Bun',
      price: 5,
    },
  ];
  const [items] = useState(buns);
  return (
    <div className={styles.container}>
      <h1>Burger Restaurant</h1>
      <div className={styles.mainSection}>
        <Ingredients />
        <Burger items={items} />
        <Price items={items} />
      </div>
    </div>
  );
};

export default BurgerBuilder;
