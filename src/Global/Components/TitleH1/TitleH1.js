import React from 'react';
import styles from './TitleH1.module.css';

const TitleH1 = () => {
    return (
        <div className={styles.titleH1Block}>
            <h1>
                <span className={styles.titleH1Green}>Your new way</span><br/>
                <span className={styles.titleH1Black}>to online Education</span>  
            </h1>
            <a><i className="fa fa-whatsapp"/></a>
            <span className={styles.titleSpan}>A visible difference</span>
        </div>
    );
};

export {TitleH1};
