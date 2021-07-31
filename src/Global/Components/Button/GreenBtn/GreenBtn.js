import React from 'react';
import styles from './GreenBtn.module.css';
import {Button} from "react-bootstrap";

const GreenBtn = (props) => {

//Title text, type button changes depending on the props. - Alina
    return (
        <Button type={props.type} className={styles.greenBtn} onClick={props.clicked}>{props.title}</Button>
    );
};

export {GreenBtn};
