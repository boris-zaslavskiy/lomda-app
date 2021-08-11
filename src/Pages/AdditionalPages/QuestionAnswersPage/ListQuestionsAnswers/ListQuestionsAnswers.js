import React, {useState} from 'react';
import { FaChevronDown, FaChevronUp} from "react-icons/fa";
import styles from '../ListQuestionsAnswers/ListQuestionsAnswers.module.css';
import CurrentStudentAnswers from "../CurrentStudentAnswers/CurrentStudentAnswers";

const ListQuestionsAnswers = (props) => {
    const [down, setDown] = useState(false);
    const handleUpDown = () => {
        setDown(!down);
    }
    return (
        <div className={` w-100 d-flex flex-column`}>
            <div className={`${styles.outerShadow} ${styles.whiteField} mb-3`}>
                <div className='d-flex flex-row h-100'>
                    <div className='d-flex align-items-center w-75 ms-3'>
                        <span style={{color: 'orange', fontWeight: 800}}>{props.number}</span>
                        <p className={`mb-0 ms-1 ${styles.text} `}>{props.title}</p>
                    </div>

                    <div className='d-flex justify-content-center align-items-center w-25'>
                        {!down?
                            <FaChevronDown style={{color: '#F77D48', border: '1px solid #F77D48', fontSize: 20}}
                                           onClick={()=>{handleUpDown();}}
                            />
                            :<FaChevronUp style={{color: '#F77D48', border: '1px solid #F77D48', fontSize: 20}}
                                          onClick={()=>{handleUpDown();}}
                            />}
                    </div>
                </div>
            </div>

            <div className={`mt-3 ${styles.slowDown} px-2`} style={{maxHeight: `${down?(`${props.height}px`):('0')}`}}>
                    {props.componentToRender}
            </div>

        </div>
    );
};

export default ListQuestionsAnswers;