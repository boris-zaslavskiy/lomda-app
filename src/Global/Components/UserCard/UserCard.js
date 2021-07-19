import React from 'react';
import styles from './UserCard.module.css';

import usersImg from '../../../Assets/users/alina.png';
import {TitleH3} from "../Texts/Headers/TitleH3/TitleH3";

const UserCard = (props) => {

//LineBar, TextBar, TitleH6, OrangeBtn, img srs - they need to be changed using data from the database. - Alina
    return (
        <div className={styles.wrapper}>
            <div>
                <img src={usersImg} alt='userImage' className={styles.image}/>
            </div>
            <div className={styles.header}>
                <TitleH3 type='form'/>
            </div>
        </div>
    );
};

export {UserCard};
