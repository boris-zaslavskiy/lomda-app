import React from 'react';
import {TitleH2} from "../../../Global/Components/Texts/Headers/TitleH2/TitleH2";
import styles from './AboutUsSection.module.css';
import {TxtAdditionalGrey} from "../../../Global/Components/Texts/TextDescription/TxtAdditionalGrey/TxtAdditionalGrey";
import abUsLogo from '../../../Assets/aboutUsLogoMD.png';
import {TxtAdditionalBlue} from "../../../Global/Components/Texts/TextDescription/TxtAdditionalBlue/TxtAdditionalBlue";

const AboutUsSection = () => {
    return (
        <div className={styles.aboutUsSection}>
            <TitleH2 titleType='h2' title='About Us'/>
            <div className={styles.content}>
            <div className={styles.leftBlock}>
                <TxtAdditionalGrey txt={'Project LOMDA is a new interactive system that makes the education process more profound and amusing. It was developed to improve the level of creative and critical thinking of the pupils. The project was also designed as an instrument for creating motivation to achieve a higher level of education. For teachers it is a tool that helps to elevate their lesson to a new level, in order for their pupils to understand and learn the material more deeply and easily.'}/>
                <TxtAdditionalBlue txt={'LOMDA allows the teacher to control the progress of each student online.'}/>
            </div>
            <div className={styles.rightBlock}>
                <img src={abUsLogo} alt="About Us Logo"/>
            </div>
            </div>
        </div>
    );
};

export default AboutUsSection;