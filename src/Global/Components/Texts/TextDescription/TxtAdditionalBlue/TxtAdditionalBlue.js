import React from 'react';
import styles from './TxtAdditionalBlue.module.css';

const TxtAdditionalBlue = (props) => {

    return (
        <p className={styles.txtAdditional}>{(props.txt)}</p>
    );
};

export {TxtAdditionalBlue};