import React from 'react';
import global from '../../../Global/Modules/Global.module.css';
import styles from './QuestionAnswersPage.module.css';
import {Container} from "react-bootstrap";

import {DescriptionCard} from "../../../Global/Components/DescriptionCard/DescriptionCard";
import {TitleH2} from "../../../Global/Components/Texts/Headers/TitleH2/TitleH2";

const QuestionAnswersPage = () => {
    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
               <TitleH2 titleType='h2' title='Question & Answers'/>
                <div className={global.RowBlock}>
                    <div className={styles.col}>
                        <DescriptionCard type='user'/>
                    </div>
                </div>
            </div>

            <div className={global.GreyWrapper}>
                <div className={global.Wrapper}>

                    <div className={global.RowBlock}>
                        {/* 1. input (choose a subject (history, math ... )) */}
                        {/* 2. input (choose a class) */}
                        {/* 3. input (search student by name) */}
                    </div>

                    <div className={global.RowBlock}>
                        {/* Slider*/}
                        {/* Question card*/}
                        {/* Question card*/}
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default QuestionAnswersPage;
