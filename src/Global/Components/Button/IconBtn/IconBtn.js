import React from 'react';
import styles from './IconBtn.module.css';
import {Button} from "react-bootstrap";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const IconBtn = (props) => {

//Title text, type button changes depending on the props. - Alina
    return (
        <Button type={props.type} className={styles.iconBtn}><FontAwesomeIcon icon={props.icon}/></Button>
    );
};

export {IconBtn};
