import React from 'react';
import styles from './Card.module.css';
import {TxtAdditionalGrey} from "../../../../Global/Components/Texts/TextDescription/TxtAdditionalGrey/TxtAdditionalGrey";

const Card = ({item}) => {
    return (
        <div className={`col-12 col-lg-3 ${styles.card}`}>
            <img src={item.img} alt="Card Image"/>
            <TxtAdditionalGrey txt={item.txt}/>
        </div>
    );
};

export default Card;