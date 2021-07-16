import React from 'react';
import styles from './CourseCard.module.css';
import images from '../../../Assets/background/main.png'
import {LineBar} from "../ProgressBar/LineBar/LineBar";
import {TextBar} from "../ProgressBar/TextBar/TextBar";
import {TitleH6} from "../Texts/Headers/TitleH6/TitleH6";
import {OrangeBtn} from "../Button/OrangeBtn/OrangeBtn";

const CourseCard = (props) => {

//LineBar, TextBar, TitleH6, OrangeBtn, img srs - they need to be changed using data from the database. - Alina
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <div>
                    <img src={images} alt="Norway" className={styles.images}/>
                </div>
                <div>
                    <LineBar currentCount='17' maxCount='34'/>
                    <TextBar flag='CourseCard' currentCount='17' text={`${17} of ${34} students completed the task`}/>
                </div>
                <div className={styles.header}>
                    <TitleH6 title='Odyssey of Homer'/>
                    <OrangeBtn title='Active'/>
                </div>
            </div>
        </div>
    );
};

export {CourseCard};
