import React from 'react';
import styles from './HowItWorksSection.module.css';
import {TitleH2} from "../../../Global/Components/Texts/Headers/TitleH2/TitleH2";
import step1Img from '../../../Assets/aboutUs-howItWorks/1step.png';
import step2Img from '../../../Assets/aboutUs-howItWorks/2step.png';
import step3Img from '../../../Assets/aboutUs-howItWorks/3step.png';
import step4Img from '../../../Assets/aboutUs-howItWorks/4step.png';
import StepItem from "./StepItem/StepItem";
import GlobalStyles from "../../../Global/Modules/Global.module.css";

const stepsItems = [
    {num:1, img:step1Img, txt:'The teacher uploads the material  for the future lesson (text, audio, video)'},
    {num:2, img:step2Img, txt:'The pupil opens the home task, gets acquanted with it and performs the following activities:'},
    {num:3, img:step3Img, txt:'Each pupil has their own rating based on quality of his questions and answers. They can improve their level and it is visible to the teacher.'},
    {num:4, img:step4Img, txt:'While preparing the main part of the lesson in the class, the teacher may use the most original questions and answers, that were written by the pupils  in their home task.'}
]

const HowItWorksSection = () => {
    return (
        <div className={styles.howItWorksSection}>
            <div className={`${GlobalStyles.Wrapper}`}>
            <TitleH2 titleType='h2' title='How it works'/>
            <div className={styles.content}>
                {
                    stepsItems.map(item => (
                        <StepItem item={item}/>
                    ))
                }
            </div>
            </div>
        </div>
    );
};

export default HowItWorksSection;