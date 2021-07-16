import React from 'react';
import styles from './TitleH1.module.css';
import {TxtAdditionalGrey} from "../../TextDescription/TxtAdditionalGrey/TxtAdditionalGrey";

const TitleH1 = (props) => {

//Span text changes depending on the props "pageName".  - Alina
    return (
        <div className={styles.titleH1Block}>
            <h1>
                <span className={styles.titleH1Green}>{(props.pageName === 'main')?('Your new way'):('Welcome back,')}</span><br/>
                <span className={styles.titleH1Black}>{(props.pageName === 'main')?('to online Education'):('PERSON')}</span> {/*  It is necessary to replace persons with data from the database!*/}
            </h1>
            <TxtAdditionalGrey txt={props.pageName}/>
        </div>
    );
};

export {TitleH1};
