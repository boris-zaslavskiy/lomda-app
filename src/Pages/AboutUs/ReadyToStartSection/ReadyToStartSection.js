import React from 'react';
import {TitleH2} from "../../../Global/Components/Texts/Headers/TitleH2/TitleH2";
import {TxtAdditionalGrey} from "../../../Global/Components/Texts/TextDescription/TxtAdditionalGrey/TxtAdditionalGrey";
import GlobalStyles from "../../../Global/Modules/Global.module.css";
import styles from './ReadyToStart.module.css';
import aUImage from  '../../../Assets/aboutUsFooterImg.png';

const ReadyToStartSection = () => {
    return (
        <div className={styles.RTSSection}>
        <div className={`mt-5 ${GlobalStyles.Wrapper}`}>
            <TitleH2 titleType='h2' title='Ready to start?'/>
            <TxtAdditionalGrey txt={`Sign in and take a unique opportunity to make the learning process more interactive with LOMDA.`}/>
            <div className={`col-12 mt-5 ${styles.content}`}>
                <button className={`col-8 col-lg-4`}>Sign in as a teacher</button>
                <button className={`col-8 col-lg-4`}>Sign in as a student</button>
            </div>
        </div>
        </div>
    );
};

export default ReadyToStartSection;