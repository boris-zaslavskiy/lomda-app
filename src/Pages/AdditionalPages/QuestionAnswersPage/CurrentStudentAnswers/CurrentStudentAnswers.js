
import React, {useEffect, useRef} from 'react';
import styles from '../CurrentStudentAnswers/CurrentStudentAnswers.module.css';
import avatar from '../../../../Assets/users/student.svg';
import StarsRating from "../../../../Global/Components/StarsRating/StarsRating";

const CurrentStudentSAnswers = (props) => {
    const ref = useRef(null);
    useEffect(()=>{
        props.itemHeight(ref.current.offsetHeight);
    }, [])
    return (
        <div className='my-3'>
            <div className={`${styles.outerShadow}`} ref={ref}>
                    <div className={`d-flex flex-row align-items-center ${styles.whitePart} pe-2`}>
                        <div className='d-flex flex-row w-75'>
                            <img src={avatar} width='50px' height='50px' className='me-3' alt='avatar'/>
                            <div>
                                <div className='d-flex flex-row'>
                                    <p className={`m-0 ${styles.text}`}>User Name</p>
                                </div>
                                <p className={`m-0 ${styles.question} `}>Where does the Odyssey take place?</p>
                            </div>
                        </div>
                        <div className={`d-flex justify-content-end w-25`}>
                            <StarsRating index={0}/>
                        </div>
                    </div>
                        <div className={`${styles.scroll} `} style={{minHeight:140}}>
                            <p className={`py-3 px-2 m-0 `}>
                                <div className={`${styles.starsPosition}`}>
                                    <StarsRating index={1}/>
                                </div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.

                            </p>
                        </div>
                </div>
        </div>
    );
};

export default CurrentStudentSAnswers;