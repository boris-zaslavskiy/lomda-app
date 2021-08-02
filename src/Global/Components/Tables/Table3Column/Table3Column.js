import React, {useState} from 'react';
import styles from './Table3Column.module.css';
import {Tr_table_student} from "./Tr_table_student/Tr_table_student";
import {Th_table} from "./Th_table/Th_table";


const Table3Column = (props) => {

    const [accordionStatus, setAccordionStatus] = useState(false);
    const [panelHeight, setPanelHeight] = useState(0);


    const getHeight = (height) => {
        let maxHeight = props.students.length * (height/2 + 50);
        setPanelHeight(maxHeight);
    };

    const statusChanges = () => {
        setAccordionStatus(!accordionStatus);
    }


    const students = props.students.map((item, index) => {
        return(
            <div className={styles.col} key={index}>
                <Tr_table_student
                    name={item.name}
                    rate={item.evaluations}
                    class={item.class}
                    itemHeight={getHeight}/>
            </div>
        )
    });


    return (
        <div className={styles.wrapper}>
            <Th_table title={props.title} color={(accordionStatus)?('#F77D48'):('#009DB3')} studentsNumber={props.students.length} status={accordionStatus} clicked={statusChanges}/>

            <div className={styles.block} style={{maxHeight: `${(accordionStatus)?(`${panelHeight}px`):('0')}`}}>
                    {students}
            </div>

        </div>
    );
};

export {Table3Column};
