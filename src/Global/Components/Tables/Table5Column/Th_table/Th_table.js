import React from 'react';
import styles from './Th_table.module.css';
import global from '../../../../Modules/Global.module.css';
import {TitleH5} from "../../../Texts/Headers/TitleH5/TitleH5";
import {TxtAdditionalGrey} from "../../../Texts/TextDescription/TxtAdditionalGrey/TxtAdditionalGrey";
import {BorderBtn} from "../../../Button/BorderBtn/BorderBtn";
import {Header} from "../../Header/Header";

const Th_table = (props) => {

//Title text, type button changes depending on the props. - Alina
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
