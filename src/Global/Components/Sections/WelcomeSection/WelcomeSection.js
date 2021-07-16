import React, {useEffect, useState} from 'react';
import styles from './WelcomeSection.module.css';
import {TitleH1} from "../../Texts/Headers/TitleH1/TitleH1";
import Login from "../../../Authorization/Login/Login";
import imgMain from '../../../../Assets/background/main.png';
import {LineBar} from "../../ProgressBar/LineBar/LineBar";
import {TextBar} from "../../ProgressBar/TextBar/TextBar";

const WelcomeSection = (props) => {

//Logic: The "additionalBlock" component changes depending on the props and on the page on which it is located (Main, Teacher, Student) - Alina
    const [page, setPage] = useState('main');
    const [statusAddBlock, setStatusAddBlock] = useState('form');

    useEffect(() => {
        setPage(props.pageName);
        setStatusAddBlock(props.addBlock);
    }, [props.addBlock]);
//----------------------------------------------

    return (
        <div className={styles.wrapper}>
            <div className={styles.leftBlock}>
                <TitleH1 pageName={page}/>
                <div className={styles.additionalBlock}>
                    {(statusAddBlock === 'form') ? (
                        <Login/>
                    ) : (
                        <div>
                            <TextBar flag='CourseCard' currentCount='17' text={`Loading progress ${50}%`}/>
                            <LineBar currentCount='50' maxCount='100'/>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.RightBlock}>
                <img src={imgMain} alt='bg'/>
            </div>
        </div>
    );
};

export {WelcomeSection};
