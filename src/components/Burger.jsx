import React from 'react';
import styles from '../styles/components/burger.module.css';
import Ingredient from './Ingredient';

const Burger = ({ items }) => {
  return (
    <div className={styles.container}>
      <h2>Created burger here</h2>
      {items.map((item) => (
        <Ingredient key={item.id} ingredient={item} />
      ))}
    </div>
  );
};

export default Burger;
