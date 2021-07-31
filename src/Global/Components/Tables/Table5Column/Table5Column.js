import React, {useEffect, useState} from 'react';
import styles from './Table5Column.module.css';
import {Tr_table_class_desktop} from "./Tr_table_class/desktop/Tr_table_class_desktop";
import {Tr_table_student_desktop} from "./Tr_table_student/desktop/Tr_table_student_desktop";
import {Tr_table_class_mobile} from "./Tr_table_class/mobile/Tr_table_class_mobile";
import {Tr_table_student_mobile} from "./Tr_table_student/mobile/Tr_table_student_mobile";
import {useDispatch, useSelector} from "react-redux";
import {setClasses} from "../../../../Store/Reducers/classReducer";
import {TitleH6} from "../../Texts/Headers/TitleH6/TitleH6";

let newArr = [];
const Table5Column = (props) => {

    const dispatch = useDispatch(); //not remember remove
    const currentClasses = useSelector(state => state.classStates.classes);
    const [studentsList, setStudentsList] = useState(props.students);
    const [studentsListEmpty, setStudentsListEmpty] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [accordionStatus, setAccordionStatus] = useState(false);
    const [panelHeight, setPanelHeight] = useState(0);


    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    }, []);


    const getHeight = (height) => {
        let maxHeight = props.students.length * (height + 50);
        setPanelHeight(maxHeight);
    };


    const statusChanges = () => {
        setAccordionStatus(!accordionStatus);
    };


    const deleteChosenStudents = () => {
        let currentClassId = props.id;
        newArr = [];
        currentClasses.map((item,i) => {
            if(item.id === currentClassId){
                currentClasses[i].students.map((elem,index) => {
                    if(elem.chosen === false){
                        newArr.push(elem);
                        setStudentsList(newArr);
                        setStudentsListEmpty(false);
                       /*dispatch(setClasses(currentClasses[i].students = newArr));*/
                    }else{
                        setStudentsList(newArr);

                    }
                });
            }
        });
        if(newArr.length === 0){
            setStudentsListEmpty(true);
        }
    };


    const deleteCurrentStudent = (id, classId) => {
        newArr = [];
        currentClasses.map((item,i) => {
            if(item.id === classId){
                studentsList.map((elem) => {
                    if(elem.id === id){
                        setStudentsList(newArr);
                    }else{
                        newArr.push(elem);
                        setStudentsList(newArr);
                        setStudentsListEmpty(false);
                    }
                });
            }
        });
        if(newArr.length === 0){
            setStudentsListEmpty(true);
        }
    };


    const listStudentsDesktop = studentsList.map((item) => {
        return(
            <Tr_table_student_desktop
                key={item.id}
                classId={props.id}
                id={item.id}
                name={item.name}
                rate={item.rate}
                class={item.class}
                questions={item.questions}
                evaluations={item.evaluations}
                chosen={item.chosen}
                itemHeight={getHeight}
            />
        )
    });


    const listStudentsMobile = studentsList.map((item) => {
        return(
            <Tr_table_student_mobile
                key={item.id}
                classId={props.id}
                id={item.id}
                name={item.name}
                rate={item.rate}
                class={item.class}
                questions={item.questions}
                evaluations={item.evaluations}
                chosen={item.chosen}
                itemHeight={getHeight}
                deleteCurrentStudent={deleteCurrentStudent}
            />
        )
    });


    return (
        <div className={styles.wrapper}>
            {
                (windowWidth > 650)?(
                    <div>
                        <Tr_table_class_desktop clicked={statusChanges}
                                                deleteChosenStudents={deleteChosenStudents}
                                                deleteClass={props.deleteClass}
                                                status={accordionStatus}
                                                studentsListEmpty={studentsListEmpty}
                                                studentsCount={props.studentsCount}
                                                studentsMaxCount={props.studentsMaxCount}
                                                className={props.className}/>

                        <div className={styles.panel} style={{maxHeight: `${(accordionStatus)?(`${panelHeight}px`):('0')}`}}>
                            {listStudentsDesktop}
                        </div>
                    </div>
                ):(
                    <div style={{width: '100%'}}>
                        <Tr_table_class_mobile clicked={statusChanges}
                                               deleteClass={props.deleteClass}
                                               status={accordionStatus}
                                               studentsListEmpty={studentsListEmpty}
                                               className={props.className}
                                               classId={props.id}/>
                        <div>
                            {(studentsListEmpty)?
                                (<div  className={styles.panel} style={{maxHeight: `${(accordionStatus)?(`${panelHeight}px`):('0')}`, textAlign: 'center', margin: '10px 0'}} >
                                    <TitleH6 title='The class list is empty.'/>
                                </div>):
                                (<div className={styles.panel} style={{maxHeight: `${(accordionStatus)?(`${panelHeight}px`):('0')}`}}>
                                    {listStudentsMobile}
                                </div>)
                            }
                        </div>

                    </div>
                )
            }
        </div>
    );
};

export {Table5Column};
