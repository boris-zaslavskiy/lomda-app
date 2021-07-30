import React from 'react';
import styles from './BorderBtn.module.css';
import {Button} from "react-bootstrap";

const BorderBtn = (props) => {

//Title text, type button changes depending on the props. - Alina

    return (
        <Button type='button' className={styles.borderBtn} style={{color: `${props.color}`, border: `2px solid ${props.color}`}} onClick={props.clicked}>{props.title}</Button>
    );
};

export {BorderBtn};
