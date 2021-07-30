import React from 'react';
import styles from './Th_table.module.css';
import {Header} from "../../Header/Header";

const Th_table = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.col}>
                <Header title='Name' color='#009DB3'/>
            </div>

            <div className={styles.col}>
                <div className={styles.colGroup}>
                    <div style={{width: '47%'}}>
                        <Header title='Rate' color='#009DB3'/>
                    </div>
                    <div style={{width: '47%'}}>
                    <Header title='Class' color='#009DB3'/>
                    </div>
                </div>
            </div>


            <div className={styles.col}>
                <Header title='Answers & questions' color='#009DB3'/>
            </div>

            <div className={styles.col}>
                <Header title='Evaluations' color='#009DB3'/>
            </div>

        </div>
    );
};

export {Th_table};
