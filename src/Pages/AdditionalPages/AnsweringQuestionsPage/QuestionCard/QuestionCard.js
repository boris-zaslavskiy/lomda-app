import React from 'react';
import {questions} from "../../../../Utils/constants";
import styles from './QuestionCard.module.css';

const QuestionCard = (props) => {
    return (
        <div>
            <div className='d-flex flex-row my-2'>
                <img src={questions[props.id].avatar} width='40px' height='40px' className='me-3'/>
                <div>
                    <div className='d-flex flex-row'>
                        <p className={`m-0 ${styles.text}`}>{questions[props.id].name}, </p>
                        <p className={`m-0 ${styles.text}`}> {questions[props.id].class}</p>
                    </div>
                    <p className={`m-0 ${styles.question}`}>{questions[props.id].question}</p>
                </div>
            </div>
            <textarea id="step_2" name="step_2" rows="2" cols="55" placeholder='Start typing here...' className={`w-100`}></textarea>
        </div>
    );
};

export default QuestionCard;