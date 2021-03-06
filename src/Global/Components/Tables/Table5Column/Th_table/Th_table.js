import React from 'react';
import styles from './Th_table.module.css';
import {Header} from "../../Header/Header";

const Th_table = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.col}>
                <Header title='Name' color='#009DB3' weight='700' radius='0.25rem 0 0 0.25rem'/>
            </div>

            <div className={styles.col}>
                <div className={styles.colGroup}>
                    <div style={{width: '47%'}}>
                        <Header title='Rate' color='#009DB3' weight='700' radius='0'/>
                    </div>
                    <div style={{width: '47%'}}>
                        <Header title='Average' color='#009DB3' weight='700' radius='0'/>
                    </div>
                </div>
            </div>


            <div className={styles.col}>
                <Header title='Answers & questions' color='#009DB3' weight='700' radius='0'/>
            </div>

            <div className={styles.col}>
                <Header title='Evaluations' color='#009DB3' weight='700' radius='0 0.25rem 0.25rem 0'/>
            </div>

        </div>
    );
};

export {Th_table};
