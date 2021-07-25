import React from 'react';
import styles from './DescriptionCard.module.css';
import global from '../../../Global/Modules/Global.module.css';
import {HeaderCardItem} from "../HeaderCardItem/HeaderCardItem";

import usersImg from '../../../Assets/users/alina.png';


const DescriptionCard = (props) => {

//HeaderCardIte, usersImg - they need to be changed using data from the database. - Alina
//for a HeaderCardIte component there can be one of 3 types: form, user, lesson. (str 19)

    return (
        <div className={global.WhiteShadowBlock}>
            <div>
                <img src={usersImg} alt='userImage' className={styles.image}/>
            </div>
            <div className={styles.header}>
                <HeaderCardItem type={props.type}/>
            </div>
        </div>
    );
};

export {DescriptionCard};
