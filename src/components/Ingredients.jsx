import React, { useEffect, useState } from 'react';
import Ingredient from './Ingredient';
import styles from '../styles/components/ingredients.module.css';
import { Draggable } from 'react-beautiful-dnd';

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
      {ingredients.map((ingredient, index) => (
        <Draggable
          key={ingredient.id}
          draggableId={ingredient.id}
          index={index}>
          {(provided) => {
            return (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}>
                <Ingredient ingredient={ingredient} />
              </div>
            );
          }}
        </Draggable>
      ))}
    </div>
  );
};

export default Ingredients;
