import React from 'react';
import styles from './TemplatePage.module.css';
import {TitleH1} from "../TitleH1/TitleH1";
import Login from "../../Authorization/Login/Login";
import imgMain from  '../../../Assets/background/main.png';

const TemplatePage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftBlock}>
                <TitleH1/>
                <div className={styles.authBlock}>
                    <button>I'm a teacher</button>
                    <button>I'm a student</button>
                    <div className={styles.authForm}>
                        <Login/>
                    </div>
                </div>
            </div>
            <div className={styles.RightBlock}>
                <img src={imgMain} alt='bg'/>
            </div>
        </div>
    );
};

export {TemplatePage};
