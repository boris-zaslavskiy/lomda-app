import React, {useRef, useState} from 'react';
//import Popup from 'reactjs-popup';
import styles from './QuestionCard.module.css';
import StarsRating from "../StarsRating/StarsRating";
import { FaStar } from "react-icons/fa";
import TextScroll from "../Texts/TextScroll/TextScroll";

const QuestionCard = (props) => {
    //current student's answers to 3 question --Lera
    const [studentAnswers, setStudentAnswers] = useState([{answer: ''}, {answer: ''}, {answer: ''}]);

    const saveAnswer = (index,valueAnswer) =>{
        let newAnswer = [...studentAnswers];
        newAnswer[index].answer = valueAnswer;
        setStudentAnswers(newAnswer);
        //condition to show message PopUp
        if(studentAnswers[2].answer && props.marks.mark.length<3){
            props.setPopUp(true);
        }
    }

    return (
        <div className='w-100'>

            {props.questions?props.questions.map((item, index)=>

                <form className={`${styles.outerShadow}  mt-3`}>
                    <div className={`${styles.tabletSize} ${styles.whitePart} ${styles.mobileSize} pe-2`}>

                        <div className={`d-flex flex-row ${styles.topPart}`}>
                            {props.allInfo?
                                <img src={item.avatar}
                                                width='50px'
                                                height='50px'
                                                className='me-3'
                                                alt='avatarTeacher'/>:null}

                            <div>
                                <div className='d-flex flex-row'>
                                    {props.allInfo?<p className={`m-0 ${styles.text}`}>{item.name} {item.surname}</p>:null}
                                </div>
                                <p className={`m-0 ${styles.question} ${props.allInfo?null:'ps-2'}`}>{item.question}</p>
                            </div>

                        </div>

                        <div className={`d-flex justify-content-end ${styles.stars}`}>

                            {props.allInfo?
                                <div>
                                    <FaStar style={{color: '#F77D48'}}/>
                                </div>
                                :<StarsRating index={index}
                                              getDisabled={props.getDisabled}
                                              leaveMark={props.leaveMark}
                                              popUp={props.popUp}
                                              marks={props.marks}
                                />
                            }
                        </div>
                    </div>

                    <textarea id="step_2"
                              name="step_2"
                              rows="2"
                              cols="55"
                              placeholder = 'Start typing here...'
                              value={studentAnswers[index].answer}
                              className={`w-100 ${styles.greyField} ${styles.textArea} p-3`}
                              onChange={(event) => {
                                  saveAnswer(index, event.target.value);
                              }}
                    > </textarea>

                </form>)
                :<div>No data</div>}
        </div>
    );
};

export default QuestionCard;
