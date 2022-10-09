import React, { useEffect, useState } from 'react';
import Ingredient from './Ingredient';
import styles from '../styles/components/ingredients.module.css';

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch('ingredients.json')
      .then((res) => res.json())
      .then((data) => setIngredients(data));
  }, []);
  return (
    <div className={styles.container}>
      <h2>List of ingredients here</h2>
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient.key} ingredient={ingredient} />
      ))}
    </div>
  );
};

export default Ingredients;
