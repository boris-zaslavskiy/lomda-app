import React from 'react';
import styles from './TitleH5.module.css';


const TitleH5 = (props) => {

//h4 - changes depending on the props.  - Alina
    return (
        <h5 style={{color: `${props.color}`, fontWeight: `${props.weight}`}}>{props.title}</h5>
    );
};

export {TitleH5};
