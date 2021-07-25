import React from 'react';
import styles from './TitleH3.module.css';


const TitleH3 = (props) => {

//h3 - changes depending on the props.  - Alina
    return (
        <h3>{props.title}</h3>
    );
};

export {TitleH3};
