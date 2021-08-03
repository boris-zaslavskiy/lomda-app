import React, {useEffect, useState} from 'react';
import styles from './Th_table.module.css';
import {Header} from "../../Header/Header";
import {faArrowUp, faArrowDown} from "@fortawesome/free-solid-svg-icons";

const Th_table = (props) => {

    const [accordionStatus, setAccordionStatus] = useState(false);

    useEffect(() => {
        setAccordionStatus(props.status)
    }, [props.status]);


    return (
        <div className={styles.wrapper}>
            <div className={styles.col}>
                <Header title={props.title} color={props.color} weight='700' radius='0.25rem 0 0 0.25rem'/>
            </div>

            <div className={styles.col}>
                <div className={styles.colGroup}>
                    <div style={{width: '47%'}}>
                        <Header title={props.studentsNumber} color={props.color} weight='700' radius='0'/>
                    </div>

                    <div style={{width: '47%'}}>
                        {(props.studentsNumber === 0)?(
                            <Header title='0' color={props.color} weight='700' radius='0 0.25rem 0.25rem 0'/>
                        ):(
                            <Header type='btn' icon={(accordionStatus)?(faArrowUp):(faArrowDown)} title={(accordionStatus)?('Hide'):('Show')} color={props.color} radius='0 0.25rem 0.25rem 0' clicked={props.clicked}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Th_table};
