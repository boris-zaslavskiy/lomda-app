import React, {useEffect, useState} from 'react';
import styles from './Table5Column.module.css';
import {Tr_table_class_desktop} from "./Tr_table_class/desktop/Tr_table_class_desktop";
import {Tr_table_student_desktop} from "./Tr_table_student/desktop/Tr_table_student_desktop";
import {Tr_table_class_mobile} from "./Tr_table_class/mobile/Tr_table_class_mobile";
import {Tr_table_student_mobile} from "./Tr_table_student/mobile/Tr_table_student_mobile";


const Table5Column = (props) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth); //current size of the browser window
    const [accordionStatus, setAccordionStatus] = useState(false); //accordion state
    const [panelHeight, setPanelHeight] = useState(0);


    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    }, []);


    const statusChanges = () => {
        setAccordionStatus(!accordionStatus);
    };


    const getHeight = (height) => {
        let maxHeight = props.students.length * (height + 50);
        setPanelHeight(maxHeight);
    };


    const listStudentsDesktop = props.students.map((item, index) => {
        return(
            <Tr_table_student_desktop
                key={index}
                name={item.name}
                rate={item.rate}
                class={item.class}
                questions={item.questions}
                evaluations={item.evaluations}
                itemHeight={getHeight}
            />
        )
    });


    const listStudentsMobile = props.students.map((item, index) => {
        return(
            <Tr_table_student_mobile
                key={index}
                name={item.name}
                rate={item.rate}
                class={item.class}
                questions={item.questions}
                evaluations={item.evaluations}
                itemHeight={getHeight}
            />
        )
    });


    return (
        <div className={styles.wrapper}>
            {
                (windowWidth > 650)?(
                    <div>
                        <Tr_table_class_desktop clicked={statusChanges} studentsCount={props.studentsCount} studentsMaxCount={props.studentsMaxCount} className={props.className}/>
                        <div className={styles.panel} style={{maxHeight: `${(accordionStatus)?(`${panelHeight}px`):('0')}`}}>
                            {listStudentsDesktop}
                        </div>
                    </div>
                ):(
                    <div style={{width: '100%'}}>
                        <Tr_table_class_mobile clicked={statusChanges}/>
                        <div className={styles.panel} style={{maxHeight: `${(accordionStatus)?(`${panelHeight}px`):('0')}`}}>
                            {listStudentsMobile}
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export {Table5Column};
