import React, {useEffect, useState} from 'react';
import global from '../../../Global/Modules/Global.module.css';
import styles from './QuestionAnswersPage.module.css';
import {Container} from "react-bootstrap";

import {DescriptionCard} from "../../../Global/Components/DescriptionCard/DescriptionCard";
import {TitleH2} from "../../../Global/Components/Texts/Headers/TitleH2/TitleH2";
import {TitleH5} from "../../../Global/Components/Texts/Headers/TitleH5/TitleH5";
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CurrentStudentAnswers from "./CurrentStudentAnswers/CurrentStudentAnswers";
import OtherStudentsAnswers from "./OtherStudentsAnswers/OtherStudentsAnswers";
import ListQuestionsAnswers from "./ListQuestionsAnswers/ListQuestionsAnswers";
import {questions} from "../../../Utils/constants";

const QuestionAnswersPage = () => {

    const [points,setPoints] = useState('');
    const [heightLeft, setHeightLeft] = useState(0);// ------Lera
    const [heightRight, setHeightRight] = useState(0);//------Lera

    useEffect(() => {
        const newPoints = '56 points';
        setPoints(newPoints);
    });
    //--------------Lera ---------
    const getHeightLeft = (heightLeft) =>{
        let currentHeightLeft = 2 *(heightLeft+20);
        setHeightLeft(currentHeightLeft );
    }
    const getHeightRight = (heightRight) =>{
        let currentHeightRight = 2 *(heightRight+20);
        setHeightRight(currentHeightRight );
    }


    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
               <TitleH2 titleType='h2' title='Question & Answers'/>
                <div className={global.RowBlock}>
                    <div className={styles.descBlock}>
                        <div className={styles.col}>
                            <DescriptionCard type='FAQ' title={'User Name, 1A'} question={'Where does the Odyssey take place?'}/>
                        </div>

                        <div className={styles.col}>
                            <div className={global.WhiteShadowBlock} style={{padding: '10px 0'}}>
                                <TitleH5 title={points} color='black' weight='900'/>
                            </div>
                        </div>

                        <div className={styles.col}>
                            <div className={global.WhiteShadowBlock} style={{padding: '10px 0'}}>
                                <span className={styles.star}><FontAwesomeIcon icon={faStar}/></span>
                                <span className={styles.star}><FontAwesomeIcon icon={faStar}/></span>
                                <span className={styles.star}><FontAwesomeIcon icon={faStar}/></span>
                                <span className={styles.star}><FontAwesomeIcon icon={faStar}/></span>
                                <span className={styles.star}><FontAwesomeIcon icon={faStar}/></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={global.GreyWrapper}>
                <div className={global.Wrapper}>

                    <div className={global.RowBlock}>
                        <div className={styles.colum}>
                           {/* Mark's Answers to Questions*/}
                            {/*------------Lera----------------*/}
                            <ListQuestionsAnswers title='Mark Answers to Questions'
                                                  componentToRender={<CurrentStudentAnswers itemHeight={getHeightLeft}/>}
                                                  height={heightLeft}
                            />
                        </div>

                        <div className={styles.colum}>
                            {/*3 Students who answer to question*/}
                            {/*------------Lera----------------*/}
                            <ListQuestionsAnswers title='Students who answer to question'
                                                  number={3}
                                                  componentToRender={<OtherStudentsAnswers itemHeight={getHeightRight}/>}
                                                  height={heightRight}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default QuestionAnswersPage;
