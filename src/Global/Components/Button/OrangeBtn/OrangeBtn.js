import React from 'react';
import styles from './OrangeBtn.module.css';
import {Button} from "react-bootstrap";

const OrangeBtn = (props) => {

//Title text, type button changes depending on the props. - Alina
    return (
        <Button type={props.type} className={styles.orangeBtn} onClick={props.clicked}>{props.title}</Button>
    );
};

export {OrangeBtn};
