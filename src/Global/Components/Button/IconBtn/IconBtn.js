import React from 'react';
import styles from './IconBtn.module.css';
import {Button} from "react-bootstrap";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const IconBtn = (props) => {

    return (
        <Button type={props.type} style={{color: `${props.color}`, border: `2px solid ${props.color}`, backgroundColor: `${props.backgroundColor}`}} className={styles.iconBtn} onClick={props.clicked}><FontAwesomeIcon icon={props.icon}/></Button>
    );
};

export {IconBtn};
