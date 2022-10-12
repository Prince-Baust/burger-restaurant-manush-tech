import React, { useState } from 'react';
import styles from '../styles/pages/burgerBuilder.module.css';
import Ingredients from '../components/Ingredients';
import Burger from '../components/Burger';
import Price from '../components/Price';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

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

  const price = items.reduce((acc, obj) => acc + obj.price, 0);
  return (
    <div className={styles.container}>
      <h1>Burger Restaurant</h1>
      <DragDropContext onDragEnd={(result) => console.log(result)}>
        <div className={styles.mainSection}>
          <Droppable droppableId="ingredients">
            {(provided) => {
              return (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{ width: '100%' }}>
                  <Ingredients />
                </div>
              );
            }}
          </Droppable>
          <Droppable droppableId="burgerItems">
            {(provided) => {
              return (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{ width: '100%' }}>
                  <Burger items={items} />
                </div>
              );
            }}
          </Droppable>
          <div>
            <Price price={price} />
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default BurgerBuilder;
