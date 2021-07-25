import React from 'react';
import {TitleH2} from "../../../Global/Components/Texts/Headers/TitleH2/TitleH2";
import styles from './OurFeaturesSection.module.css';
import Card from "./Card/Card";
import cardImg1 from '../../../Assets/aboutUs-ourFeatures/feature1.png';
import cardImg2 from '../../../Assets/aboutUs-ourFeatures/feature2.png';
import cardImg3 from '../../../Assets/aboutUs-ourFeatures/feature3.png';
import GlobalStyles from "../../../Global/Modules/Global.module.css";

const cards = [
    {img:cardImg1,txt:'Interactive'},
    {img:cardImg2,txt:'A vast field of opportunities for pupils and teachers'},
    {img:cardImg3,txt:'It is simple for the teachers to control the learning progress'}
]

const OurFeaturesSection = () => {
    return (
        <div className={`${styles.ourFeaturesSection} ${GlobalStyles.Wrapper}`}>
            <TitleH2 titleType='h2' title='Our features'/>
            <div className={styles.content}>
                {
                    cards.map(item => (<Card item={item}/>))
                }
            </div>
        </div>
    );
};

export default OurFeaturesSection;