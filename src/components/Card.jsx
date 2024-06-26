import React from "react";
import '../components/card.scss';


const Card = ({ colour, price, speed, className, onClick }) => {
    return (
    <div className={`cardPriceContainer ${className}`} onClick={onClick}>
        <div style={{ backgroundColor: colour, backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))' }}className="titleDiv">
            <p>Безлимитный {price}</p>
        </div>
        <div style={{ backgroundColor: colour }} className="priceDiv">
            <span className="currency">руб</span>
            <div className="priceLine">
            <span className="price">{price}</span> <span className="perMonth">/мес</span>
            </div>
        </div>
        <div className="speedDiv">
            <p>до {speed} Мбит/сек</p>
        </div>
        <div className="infoDiv">
            <p>Обьем включенного трафика не ограничен</p>
        </div>
    </div>
    );
  };
  
  export default Card;