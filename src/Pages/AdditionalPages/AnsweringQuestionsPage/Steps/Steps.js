import React from 'react';
import {TitleH5} from "../../../../Global/Components/Texts/Headers/TitleH5/TitleH5";
import {TitleH6} from "../../../../Global/Components/Texts/Headers/TitleH6/TitleH6";
import {questions} from "../../../../Utils/constants";
import QuestionCard from "../QuestionCard/QuestionCard";
import styles from './Steps.module.css';

const Steps = ({step}) => {
    return (
        <div>
            {step===1?
                <div>
                    <label for='step_1'>
                        <div className='d-flex flex-row align-items-end'>
                            <div className={`d-inline-block me-1 ${styles.space}`}>
                                <TitleH5 title='Step 1:' color='grey'/>
                            </div>
                            <TitleH6 title='Ask your question'/>
                        </div>
                    </label>
                    <textarea id="step_1"
                              name="step_1" rows="3"
                              cols="55"
                              placeholder='Start typing here...'
                              className={`${styles.outerShadow} p-1 mt-2 w-100`}></textarea>
                </div>
                : null
            }
            {step===2?
                <div>
                    <label for='step_2'>
                        <div className='d-flex flex-row align-items-end'>
                            <div className={`d-inline-block me-1 ${styles.space}`}>
                                <TitleH5 title='Step 2:' color='grey'/>
                            </div>
                            <TitleH6 title='Answer the following questions'/>
                        </div>
                    </label>
                    {questions.map((item, index)=>
                        <div className={`${styles.outerShadow} p-1 mt-2`}>
                            <QuestionCard id={index}/>
                        </div>
                    )}
                </div>
                :null
            }
        </div>
    );
};

export default Steps;