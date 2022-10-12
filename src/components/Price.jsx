import React from 'react';
import styles from '../styles/components/price.module.css';
import { useNavigate } from 'react-router-dom';

const Price = ({ price }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/checkout');
  };

  return (
    <div className={styles.container}>
      <h2>Price</h2>
      <h3>Your Burger Price</h3>
      <h2 style={{ color: 'cyan' }}>{price} BDT</h2>

      <button onClick={handleClick} className={styles.submitBtn}>
        Checkout
      </button>
    </div>
  );
};

export default Price;
