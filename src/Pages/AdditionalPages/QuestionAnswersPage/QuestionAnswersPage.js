import React, {useEffect, useState} from 'react';
import global from '../../../Global/Modules/Global.module.css';
import styles from './QuestionAnswersPage.module.css';
import {Container} from "react-bootstrap";

import {DescriptionCard} from "../../../Global/Components/DescriptionCard/DescriptionCard";
import {TitleH2} from "../../../Global/Components/Texts/Headers/TitleH2/TitleH2";
import {TitleH5} from "../../../Global/Components/Texts/Headers/TitleH5/TitleH5";
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const QuestionAnswersPage = () => {

    const [points,setPoints] = useState('');

    useEffect(() => {
        const newPoints = '56 points';
        setPoints(newPoints);
    });


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
                        </div>

                        <div className={styles.colum}>
                            {/*3 Students who answer to question*/}
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default QuestionAnswersPage;
