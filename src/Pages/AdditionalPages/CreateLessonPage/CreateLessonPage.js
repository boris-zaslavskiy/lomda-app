import React from 'react';
import global from '../../../Global/Modules/Global.module.css';
import styles from './CreateLessonPage.module.css';
import {Container} from "react-bootstrap";

import {DescriptionCard} from "../../../Global/Components/DescriptionCard/DescriptionCard";
import {TitleH2} from "../../../Global/Components/Texts/Headers/TitleH2/TitleH2";
import LessonTemplate from "./LessonTemplate/LessonTemplate";
import {TitleH4} from "../../../Global/Components/Texts/Headers/TitleH4/TitleH4";
import LessonOptions from "./LessonOptions/LessonOptions";
import {GreenBtn} from "../../../Global/Components/Button/GreenBtn/GreenBtn";
import {BorderBtn} from "../../../Global/Components/Button/BorderBtn/BorderBtn";
import {OrangeBtn} from "../../../Global/Components/Button/OrangeBtn/OrangeBtn";


const CreateLessonPage = () => {
    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
               <TitleH2 titleType='h2' title='Create Lesson'/>
                <div className={global.RowBlock}>
                    <div className={styles.col}>
                        <DescriptionCard type='user'/>
                    </div>
                </div>
            </div>

            <div className={global.GreyWrapper}>
                <div className={global.Wrapper}>
                    <div className={global.RowBlock}>
                        <div className={styles.wrapper}>
                            <div className={styles.col}>
                                <div className={styles.row}>
                                    <TitleH4 title='Lesson Template:'/>
                                </div>
                               <LessonTemplate/>
                            </div>

                            <div className={styles.col}>
                                <div className={styles.row}>
                                    <TitleH4 title='Add editions:'/>
                                </div>

                                <div style={{width: '100%'}}>
                                    <LessonOptions/>
                                </div>


                                <div className={styles.block}>
                                    <div className={styles.block}>
                                        <GreenBtn type='button' title='Active'/>
                                        <BorderBtn type='button' color='#009DB3' title='Save'/>
                                    </div>
                                    <OrangeBtn type='button' title='Delete'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CreateLessonPage;
