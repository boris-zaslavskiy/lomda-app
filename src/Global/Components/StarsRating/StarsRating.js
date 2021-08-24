import React, {useEffect, useState} from 'react';
import styles from './StarsRating.module.css';
import AnsweringQuestionsPage from "../../../Pages/AdditionalPages/AnsweringQuestionsPage/AnsweringQuestionsPage";

const StarsRating = (props) => {
    // props.leaveMark - function only from AnsweringQuestionsPage
    // props.index - necessary to get rid of the dependency between stars when used in different components
    // props.ratingQ, props.ratingAns, props.ratingAnsOther - states for displaying grades
    return (
        <div className={`${styles.rating} ${styles.popup}`}>

            <div className={`${styles.rating__items}`}>
                <input id={`rating_5_${props.index}`}
                       type='radio'
                       className={`${styles.rating__item}`}
                       name={`rating_${props.index}`}
                       value={5}
                       onClick={(e) => {
                           if(props.leaveMark){
                               props.leaveMark(e.target.value);
                           }
                           console.log(e.target.value, props.index);
                       }}
                />
                <label htmlFor={`rating_5_${props.index}`}
                       className={`${(props.ratingQ && props.ratingQ>=5)||
                       (props.ratingAns&&props.ratingAns>=5)||
                       (props.ratingAnsOther&&props.ratingAnsOther>=5)?
                           props.ratingAns?styles.ratingAnswer:styles.ratingQuestion:styles.rating__label}`}
                />

                <input id={`rating_4_${props.index}`}
                       type='radio'
                       className={`${styles.rating__item}`}
                       name={`rating_${props.index}`}
                       value={4}
                       onClick={(e) => {
                           if(props.leaveMark){
                               props.leaveMark(e.target.value);
                           }
                           console.log(e.target.value, props.index);
                       }}
                />
                <label htmlFor={`rating_4_${props.index}`}
                       className={`${(props.ratingQ && props.ratingQ>=4)||
                       (props.ratingAns&&props.ratingAns>=4)||
                       (props.ratingAnsOther&&props.ratingAnsOther>=4)?
                           props.ratingAns?styles.ratingAnswer:styles.ratingQuestion:styles.rating__label}`}
                />

                <input id={`rating_3_${props.index}`}
                       type='radio'
                       className={`${styles.rating__item}`}
                       name={`rating_${props.index}`}
                       value={3}
                       onClick={(e) => {
                           if(props.leaveMark){
                               props.leaveMark(e.target.value);
                           }
                           console.log(e.target.value, props.index);
                       }}
                />
                <label htmlFor={`rating_3_${props.index}`}
                       className={`${(props.ratingQ && props.ratingQ>=3)||
                       (props.ratingAns&&props.ratingAns>=3)||
                       (props.ratingAnsOther&&props.ratingAnsOther>=3)?
                           props.ratingAns?styles.ratingAnswer:styles.ratingQuestion:styles.rating__label}`}
                />

                <input id={`rating_2_${props.index}`}
                       type='radio'
                       className={`${styles.rating__item}`}
                       name={`rating_${props.index}`}
                       value={2}
                       onClick={(e) => {
                           if(props.leaveMark){
                               props.leaveMark(e.target.value);
                           }
                           console.log(e.target.value, props.index);
                       }}
                />
                <label htmlFor={`rating_2_${props.index}`}
                       className={`${(props.ratingQ && props.ratingQ>=2)||
                       (props.ratingAns&&props.ratingAns>=2)||
                       (props.ratingAnsOther&&props.ratingAnsOther>=2)?
                           props.ratingAns?styles.ratingAnswer:styles.ratingQuestion:styles.rating__label}`}
                />

                <input id={`rating_1_${props.index}`}
                       type='radio'
                       className={`${styles.rating__item}`}
                       name={`rating_${props.index}`}
                       value={1}
                       onClick={(e) => {
                           if(props.leaveMark){
                               props.leaveMark(e.target.value);
                           }
                           console.log(e.target.value, props.index);
                       }}
                />
                <label htmlFor={`rating_1_${props.index}`}
                       className={`${(props.ratingQ && props.ratingQ>=1)||
                       (props.ratingAns&&props.ratingAns>=1)||
                       (props.ratingAnsOther&&props.ratingAnsOther>=1)?
                           props.ratingAns?styles.ratingAnswer:styles.ratingQuestion:styles.rating__label}`}
                />
            </div>

            {/*ModalWindow message*/}
            <span className={`${styles.popupText} ${props.popUp?styles.show:null}`}>Take a mark</span>
        </div>
    );
};

export default StarsRating;