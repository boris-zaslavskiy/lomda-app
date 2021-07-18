import React from 'react';
import {TitleH2} from "../../../Global/Components/Texts/Headers/TitleH2/TitleH2";
import styles from './OurFeaturesSection.module.css';
import Card from "./Card/Card";
import cardImg1 from '../../../Assets/aboutUs-ourFeatures/feature1.png';
import cardImg2 from '../../../Assets/aboutUs-ourFeatures/feature2.png';
import cardImg3 from '../../../Assets/aboutUs-ourFeatures/feature3.png';


const OurFeaturesSection = () => {
    return (
        <div className={styles.ourFeaturesSection}>
            <TitleH2 titleType='h2' title='Our features'/>
            <div className={styles.content}>
                <Card img={cardImg1} txt={'Interactive'}/>
                <Card img={cardImg2} txt={'A vast field of opportunities for pupils and teachers'}/>
                <Card img={cardImg3} txt={'It is simple for the teachers to control the learning progress'}/>
            </div>
        </div>
    );
};

export default OurFeaturesSection;