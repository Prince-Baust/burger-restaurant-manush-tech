import React from 'react';
import styles from '../styles/components/ingredient.module.css';

const Ingredient = ({ ingredient }) => {
  const { name, price, img } = ingredient;
  return (
    <div className={styles.container}>
      <div>
        <h3>Item: {name}</h3>
        <h4>Price: {price} tk</h4>
      </div>
      <div>
        <img src={img} alt="burger ingredient" />
      </div>
    </div>
  );
};

export default Ingredient;
