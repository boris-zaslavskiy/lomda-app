import React from 'react';
import styles from './HowItWorksSection.module.css';
import {TitleH2} from "../../../Global/Components/Texts/Headers/TitleH2/TitleH2";

const HowItWorksSection = () => {
    return (
        <div className={styles.howItWorksSection}>
            <TitleH2 titleType='h2' title='How it works'/>
            <div className={styles.content}>

            </div>
        </div>
    );
};

export default HowItWorksSection;