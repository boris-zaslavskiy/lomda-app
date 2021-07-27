import React from 'react';
import styles from './TitleH4.module.css';


const TitleH4 = (props) => {

//h4 - changes depending on the props.  - Alina
    return (
        <h4>{props.title}</h4>
    );
};

export {TitleH4};
