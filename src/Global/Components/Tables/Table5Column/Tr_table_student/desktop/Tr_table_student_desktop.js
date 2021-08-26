import React, {useRef, useState} from 'react';
import styles from './Tr_table_student_desktop.module.css';
import {TitleH6} from "../../../../Texts/Headers/TitleH6/TitleH6";

import {BorderBtn} from "../../../../Button/BorderBtn/BorderBtn";
import {IconBtn} from "../../../../Button/IconBtn/IconBtn";

import avatar from '../../../../../../Assets/users/avatar.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar, faPlus, faCheck} from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from "react-redux";
import {setClasses} from "../../../../../../Store/Reducers/classReducer";
import {Link} from "react-router-dom";

import useHeight from "../../../../../../Hooks/useHeight";


const Tr_table_student_desktop = (props) => {

    const dispatch = useDispatch();
    const currentClasses = useSelector(state => state.classStates.classes);
    const [studentStatus, setStudentStatus] = useState(props.chosen);
    const ref = useRef(null);

    const height = useHeight(ref);
    props.itemHeight(height);


    const changeStudentStatus = (id,classId) => {
        let currentStudent;
        for (let i = 0; i < currentClasses.length; i++){
            if(currentClasses[i].id === classId){
                currentClasses[i].students.map((item,index) => {
                    if(item.id === id){
                        currentStudent = item;
                        currentStudent.chosen = !studentStatus;

                        currentClasses[i].students.splice(index, 1, currentStudent);
                        dispatch(setClasses(currentClasses)); // the student has changed the -selected property, it will be used for deletion
                        setStudentStatus(!studentStatus);
                    }
                });
            }
        }
    };


    return (
        <div className={styles.wrapper} ref={ref} >
            <div className={styles.col}>
                <div className={styles.row}>
                    <div className={styles.imgBlock}>
                        <img src={avatar} alt='avatar'/>
                    </div>
                    <TitleH6 title={props.name} color='black' weight='900'/>
                    {(studentStatus)?(
                        <IconBtn icon={faCheck}
                                 color='white'
                                 border='2px solid #F77D48'
                                 backgroundColor='#F77D48'
                                 clicked={() => {changeStudentStatus(props.id, props.classId)}}/>
                    ):(
                        <IconBtn icon={faPlus}
                                 color='#878A8B'
                                 border='2px solid #878A8B'
                                 backgroundColor='transparent'
                                 clicked={() => {changeStudentStatus(props.id, props.classId)}}/>
                    )}

                </div>
            </div>

            <div className={styles.col}>
                <div className={styles.row}>
                    <TitleH6 title={props.rate} color='black' weight='900'/>
                    <FontAwesomeIcon icon={faStar} style={{color: '#F77D48'}}/>
                </div>
            </div>

            <div className={styles.col}>
                <div className={styles.row}>
                    <TitleH6 title={props.averageNumber} color='black' weight='900'/>
                </div>
            </div>

            <div className={styles.col}>
                <div className={styles.row}>
                    <TitleH6 title={props.questions} color='black' weight='900'/>
                    <Link to={`/questionAnswers/${props.id}`}>
                        <BorderBtn title='View' color='#F77D48' />
                    </Link>
                </div>
            </div>

            <div className={styles.col}>
                <div className={styles.row}>
                    <TitleH6 title={props.evaluations} color='black' weight='900'/>
                    <Link to={`/generalInfo/${props.currentLesson}`}>
                        <BorderBtn title='View' color='#F77D48' />
                    </Link>

                </div>
            </div>

        </div>
    );
};

export {Tr_table_student_desktop};
