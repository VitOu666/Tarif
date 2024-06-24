import React from "react";
import '../components/card.scss';


export default function Card (props) {
    const {price, speed, colour} = props;
    return (
        <div className="card" >
                <div className="top">
                <p style={{backgroundColor: colour}} className="cardTitle">Безлимитный {price}</p>
                <p style={{backgroundColor: colour}} className="cardPrice"> 
                    <span className="currency">руб</span>
                    <div className="priceLine">
                        <span className="price">{price}</span>
                        <span className="perMonth">/мес</span>
                    </div>
                </p>
                </div>
                <p className="cardSpeed">до {speed} Мбит/сек</p>
                <p className="cardInfo">Обьем включенного трафика не ограничен</p>
            </div>
    )
}