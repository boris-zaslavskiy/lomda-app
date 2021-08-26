
import React, {useEffect, useRef, useState} from 'react';
import styles from '../CurrentStudentAnswers/CurrentStudentAnswers.module.css';
import avatar from '../../../../Assets/users/student.svg';
import {Stars} from "../../../../Global/Components/Stars/Stars";
import {TitleH6} from "../../../../Global/Components/Texts/Headers/TitleH6/TitleH6";
import useHeight from "../../../../Hooks/useHeight";


const CurrentStudentSAnswers = (props) => {

    const starRating = [true,true,true,false,false]; //test data
    const ref = useRef(null);

    const height = useHeight(ref);
    props.itemHeight(height);


    return (
        <div className='my-3'>
            <div className={`${styles.outerShadow}`} ref={ref}>
                    <div className={`d-flex flex-row align-items-center ${styles.whitePart} pe-2`}>
                        <div className='d-flex flex-row w-75'>
                            <img src={avatar} width='60px' height='60px' className='me-3' alt='avatar'/>
                            <div style={{margin: '5px 0'}}>
                                <div className='d-flex flex-row'>
                                    <TitleH6 color='#F77D48' weight='900' title={'User Name'}/>
                                </div>
                                <p className={`m-0 ${styles.question} `}>Where does the Odyssey take place?</p>
                            </div>
                        </div>
                        <div className={`d-flex justify-content-end w-25`}>

                            {/*it is necessary to change the index number, otherwise the dependence between the stars in the lines*/}
                            <Stars data={starRating}/>
                        </div>
                    </div>
                        <div className={`${styles.scroll} `} style={{minHeight:140}}>
                            <p className={`py-3 px-2 m-0 `}>
                                <div className={`${styles.starsPosition}`}>

                                    {/*it is necessary to change the index number, otherwise the dependence between the stars in the lines*/}
                                   {/* <StarsRating index={2} ratingAns={4}/>*/}
                                    <Stars data={starRating}/>
                                </div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                </div>
        </div>
    );
};

export default CurrentStudentSAnswers;