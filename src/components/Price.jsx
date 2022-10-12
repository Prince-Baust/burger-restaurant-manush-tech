import React from 'react';
import styles from '../styles/components/price.module.css';

const Price = ({ items }) => {
  const price = items.reduce((acc, obj) => acc + obj.price, 0);
  console.log(price);

  return (
    <div className={styles.container}>
      <h2>Price</h2>
      <h3>Your Burger Price</h3>
      <h2 style={{ color: 'cyan' }}>{price} BDT</h2>

      <button className={styles.submitBtn}>Checkout</button>
    </div>
  );
};

export default Price;
