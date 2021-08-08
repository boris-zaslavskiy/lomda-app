import React from 'react';
import styles from './Table2Column.module.css';
import {TitleH5} from "../../Texts/Headers/TitleH5/TitleH5";

const Table2Column = (props) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.col}>
                <div className={styles.row}>
                    <TitleH5 title={props.first} color='#878A8B' weight='400'/>
                </div>
                <div className={styles.row}>
                    <TitleH5 title={props.second} color='black' weight='900'/>
                </div>
            </div>
        </div>
    );
};

export {Table2Column};
