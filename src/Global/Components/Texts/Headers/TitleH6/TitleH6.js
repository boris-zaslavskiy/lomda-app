import React from 'react';
import styles from './TitleH6.module.css';

const TitleH6 = (props) => {

//H6 text changes depending on the props "title".  - Alina
    return (
        <h6>{props.title}</h6>
    );
};

export {TitleH6};
