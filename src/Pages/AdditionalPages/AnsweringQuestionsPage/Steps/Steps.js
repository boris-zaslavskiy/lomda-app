import React, {useState} from 'react';
import {questions, teacherQuestions, user} from "../../../../Utils/constants";
import QuestionCard from "../../../../Global/Components/QuestionCard/QuestionCard";
import styles from './Steps.module.css';
import avatar from '../../../../Assets/users/student.svg';
import StarsRating from "../../../../Global/Components/StarsRating/StarsRating";

const Steps = (props) => {
    const [question, setQuestion] = useState('');
    const saveQuestion = (value)=>{
        setQuestion(value);
        console.log(question);
        props.getDisabled(true);

    }

    return (
        <div>
            {/*//Step -1*/}
            {props.step===1?
                <div>
                    <label for="step_1" className='my-3'>
                        <div className='d-flex flex-row align-items-end'>
                            <div className={`d-inline-block me-1 ${styles.space}`}>
                                <span className={`${styles.textGrey}`}>Step 1:</span>
                            </div>
                            <span className={`${styles.textBlack}`}>Ask your question</span>
                        </div>
                    </label>
                    <textarea id="step_1"
                              name="step_1" rows="3"
                              cols="55"
                              placeholder='Start typing here...'
                              value={question}
                              onChange={(event) => {
                                  saveQuestion(event.target.value);
                              }}
                              className={`${styles.outerShadow} ${styles.greyField} p-1 mt-2 w-100`}/>
                </div>
                : null
            }

            {/*Step 2*/}
            {props.step===2?
                <div>
                    <label for='step_2' className='my-3'>
                        <div className='d-flex flex-row align-items-end'>
                            <div className={`d-inline-block me-1 ${styles.space}`}>
                                <span className={`${styles.textGrey}`}>Step 2:</span>
                            </div>
                            <span className={`${styles.textBlack}`}>Answer the following questions</span>
                        </div>
                    </label>

                    {/*depends on the presence of questions (from Utils/constans.js) from students in the lesson --- Lera*/}
                        <QuestionCard
                            questions={questions.length?questions:teacherQuestions}
                            allInfo={questions.length?false:true} //attribute responsible for displaying information ---Lera
                            getDisabled={props.getDisabled}
                        />
                </div>
                :null
            }

            {/*Step 3*/}
            {props.step===3?
                <div>
                    <div className='d-flex flex-row align-items-end my-4'>
                        <div className={`d-inline-block me-1 ${styles.space}`}>
                            <span className={`${styles.textGrey}`}>Step 3:</span>
                        </div>
                        <span className={`${styles.textBlack}`}>Evaluate the questions and answers</span>
                    </div>
                    <div className={`${styles.outerShadow}`}>
                        <div className={`d-flex flex-row align-items-center  my-3 ${styles.field}`}>
                            <img src={avatar} width='50px' height='50px' className='mx-3' alt='avatar'/>
                            <div className='ms-3'>
                                <div className='d-flex flex-row'>
                                    <p className={`m-0 ${styles.text}`}>Marco Botton,</p>
                                    <p className={`m-0 ${styles.text}`}> 5B</p>
                                </div>
                                <p className={`m-0 ${styles.question}`}>{question}</p>
                            </div>
                        </div>
                    </div>

                    {/*array user is array from file constans.js. just to check the displaying --- Lera*/}
                    {user[0].answers.map((item,index)=>
                            <form className={`${styles.outerShadow} my-3`}>
                                <div className='container px-2'>
                                    <div className='row'>
                                        <div className={`col-8 ${styles.field}  ps-3 mt-3`}>
                                            <p className='m-0'>Answer</p>
                                        </div>
                                        <div className={`col-4 ${styles.greyField} d-flex align-items-center justify-content-center`}>
                                            <StarsRating index={index}/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                    )}
                </div>
                :null
            }
        </div>
    );
};

export default Steps;