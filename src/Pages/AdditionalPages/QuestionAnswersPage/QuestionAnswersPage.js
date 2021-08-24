import React, {useEffect, useState} from 'react';
import global from '../../../Global/Modules/Global.module.css';
import styles from './QuestionAnswersPage.module.css';
import {Container} from "react-bootstrap";

import {DescriptionCard} from "../../../Global/Components/DescriptionCard/DescriptionCard";
import {TitleH2} from "../../../Global/Components/Texts/Headers/TitleH2/TitleH2";
import {TitleH5} from "../../../Global/Components/Texts/Headers/TitleH5/TitleH5";
import {BsStar, BsStarFill} from "react-icons/bs";
import CurrentStudentAnswers from "./CurrentStudentAnswers/CurrentStudentAnswers";
import OtherStudentsAnswers from "./OtherStudentsAnswers/OtherStudentsAnswers";
import ListQuestionsAnswers from "./ListQuestionsAnswers/ListQuestionsAnswers";



const QuestionAnswersPage = () => {

    const [points, setPoints] = useState('');
    const [starsChosen, setStarsChosen] = useState([false,false,false,false,false]);
    const [heightLeft, setHeightLeft] = useState(0);//height for left column ------Lera
    const [heightRight, setHeightRight] = useState(0);//height for right column------Lera

    useEffect(() => {
        const newPoints = '56 points';
        setPoints(newPoints);
    });
    //--------------Lera ---------
    const getHeightLeft = (heightLeft) => {
        let currentHeightLeft = 1 * (heightLeft + 20);
        setHeightLeft(currentHeightLeft);
    }
    const getHeightRight = (heightRight) => {
        let currentHeightRight = 1 * (heightRight + 20);
        setHeightRight(currentHeightRight);
    }

    // Stars changes by count element
    const changeStarsType = (count) => {
        let arr = [];
        starsChosen.map((item,index) => {
            if(index <= count ){
                arr.push(true);
            }else {
                arr.push(false);
            }
        });
        setStarsChosen(arr);
    }


    let stars = starsChosen.map((item,index) => {
        return (
            <span className={styles.star} onClick={() => {changeStarsType(index)}}>
                {(starsChosen[index]) ? (
                    <BsStarFill style={{color: '#F77D48'}}/>
                ) : (
                    <BsStar/>
                )}
            </span>
        )
    });


    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
                <TitleH2 titleType='h2' title='Question & Answers'/>
                <div className={global.RowBlock}>
                    <div className={styles.descBlock}>
                        <div className={styles.col}>
                            <DescriptionCard type='FAQ' title={'User Name, 1A'}
                                             question={'Where does the Odyssey take place?'}/>
                        </div>

                        <div className={styles.col}>
                            <div className={global.WhiteShadowBlock} style={{padding: '10px 0'}}>
                                <TitleH5 title={points} color='black' weight='900'/>
                            </div>
                        </div>

                        <div className={styles.col}>
                            <div className={global.WhiteShadowBlock} style={{padding: '10px 0'}}>
                                {stars}
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
                                                  componentToRender={
                                                      <CurrentStudentAnswers
                                                          itemHeight={getHeightLeft}
                                                      />}
                                                  height={heightLeft}
                            />
                        </div>

                        <div className={styles.colum}>
                            {/*3 Students who answer to question*/}
                            {/*------------Lera----------------*/}
                            <ListQuestionsAnswers title='Students who answer to question'
                                                  number={3}//the number of students who answered the question---Lera
                                                  componentToRender={<OtherStudentsAnswers
                                                      itemHeight={getHeightRight}/>}
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
