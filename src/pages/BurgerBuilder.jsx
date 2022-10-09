import React from 'react';
import styles from '../styles/pages/burgerBuilder.module.css';
import Ingredients from '../components/Ingredients';
import Burger from '../components/Burger';
import Price from '../components/Price';

const BurgerBuilder = () => {
  return (
    <div className={styles.container}>
      <h1>Burger Restaurant</h1>
      <div className={styles.mainSection}>
        <Ingredients />
        <Burger />
        <Price />
      </div>
    </div>
  );
};

export default BurgerBuilder;
