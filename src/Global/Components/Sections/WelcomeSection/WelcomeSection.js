import React, {useEffect, useState} from 'react';
import styles from './WelcomeSection.module.css';
import {TitleH1} from "../../Texts/Headers/TitleH1/TitleH1";
import imgMain from '../../../../Assets/background/main.png';
import {LineBar} from "../../ProgressBar/LineBar/LineBar";
import {TextBar} from "../../ProgressBar/TextBar/TextBar";
import Authorization from "../../../Authorization/Authorization";


const WelcomeSection = (props) => {


    const [page, setPage] = useState('main');
    const [statusAddBlock, setStatusAddBlock] = useState('form');

    const [currentTeacher, setCurrentTeacher] = useState({});

    useEffect(() => {
        setPage(props.pageName);
        setStatusAddBlock(props.addBlock);
    }, [props.addBlock]);


    useEffect(() => {
        setCurrentTeacher(props.data);
    }, []);



    return (
        <div className={styles.wrapper}>
            <div className={styles.leftBlock}>
                <TitleH1 pageName={page} person ={(page === 'main')? null :(`${props.data.firstName} ${props.data.surName}`)} />
                <div className={styles.additionalBlock}>
                    {(statusAddBlock === 'form') ? (
                        <div>
                            <Authorization/>
                        </div>
                    ) : (
                        <div>
                            <TextBar flag='DescriptionCard' currentCount='17' text={`Loading progress ${50}%`}/>
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
