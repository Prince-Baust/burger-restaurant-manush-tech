import React from 'react';
import styles from '../styles/components/price.module.css';

const Price = () => {
  return (
    <div className={styles.container}>
      <h2>
        Price <br /> xx Tk
      </h2>

      <button className={styles.submitBtn}>Checkout</button>
    </div>
  );
};

export default Price;
