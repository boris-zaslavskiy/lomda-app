import React from 'react';
import styles from './TxtAdditionalGrey.module.css';

const TxtAdditionalGrey = (props) => {

//TextBar changes depending on the props. To add a new text, add props "txt" to your component. - Alina
    return (
        <p className={styles.txtAdditional}>{(props.txt === 'main')?('A visible difference'):(props.txt)}</p>
    );
};

export {TxtAdditionalGrey};
