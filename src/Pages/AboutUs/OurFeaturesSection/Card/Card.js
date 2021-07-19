import React from 'react';
import styles from './Card.module.css';
import {TxtAdditionalGrey} from "../../../../Global/Components/Texts/TextDescription/TxtAdditionalGrey/TxtAdditionalGrey";

const Card = ({img,txt}) => {

    return (
        <div className={styles.card}>
            <img src={img} alt="Card Image"/>
            <TxtAdditionalGrey txt={txt}/>
        </div>
    );
};

export default Card;