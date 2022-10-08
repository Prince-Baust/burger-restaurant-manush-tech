import React from 'react';
import styles from '../styles/pages/home.module.css';
import CustomerForm from '../components/CustomerForm';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to Burger Restaurant</h1>
      <CustomerForm />
    </div>
  );
};

export default Home;
