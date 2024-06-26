import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';


const App = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const cards = [
    {
      id: 1,
      price: 300,
      speed: 10,
      colour: "#2cc1d5"
    },
    {
        id: 2,
        price: 450,
        speed: 50,
        colour: "#24ae8d"
      },
      {
        id: 3,
        price: 550,
        speed: 100,
        colour: "#f46a5f"
      },
      {
        id: 4,
        price: 1000,
        speed: 200,
        colour: "#333a44"
      }
  ];
  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <div className="cardContainer">
      {cards.map((card, index) => (
        <Card
          key={index}
          colour={card.colour}
          price={card.price}
          speed={card.speed}
          className={selectedCard === index ? 'specialCard' : ''}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
};

export default App
