import React, {useEffect, useState} from 'react';
import styles from './Tr_table_class_desktop.module.css';
import {TitleH5} from "../../../../Texts/Headers/TitleH5/TitleH5";
import {BorderBtn} from "../../../../Button/BorderBtn/BorderBtn";
import {LineBar} from "../../../../ProgressBar/LineBar/LineBar";
import {TextBar} from "../../../../ProgressBar/TextBar/TextBar";
import {Link} from "react-router-dom";


const Tr_table_class_desktop = (props) => {

    const [accordionStatus, setAccordionStatus] = useState(false);

    useEffect(() => {
        setAccordionStatus(props.status)
    }, [props.status]);


    return (
        <div className={styles.wrapper}>
            <div className={styles.col}>
                <div className={styles.row}>
                    <TitleH5 title={`Class ${props.className} :`} color='black' weight='900'/>
                    {(props.studentsListEmpty) ? null : (
                        (accordionStatus) ?
                            (<BorderBtn title='Hide' color='#009DB3' clicked={props.clicked}/>) :
                            (<BorderBtn title='Show' color='#009DB3' clicked={props.clicked}/>)
                    )}
                </div>
            </div>

            <div className={styles.col}>
                {(props.studentsListEmpty) ?
                    (
                        <TextBar flag='DescriptionCard' currentCount={props.studentsCount}
                                 text={'The class is empty.'}/>
                    ) :
                    (
                        <div>
                            <LineBar currentCount={props.studentsCount} maxCount={props.studentsMaxCount}/>
                            <TextBar flag='DescriptionCard' currentCount={props.studentsCount}
                                     text={`${props.studentsCount} of ${props.studentsMaxCount} students completed all tasks`}/>
                        </div>
                    )
                }

            </div>

            <div className={styles.col}>
                {(props.studentsListEmpty) ?
                    (
                        <Link to={`/addStudents/${'10A'}`}>
                            <BorderBtn title='Add students' color='#009db3' clicked={props.deleteChosenStudents}/>
                        </Link>
                    ) :
                    (
                       <div className={styles.block}>
                           <Link to={`/addStudents/${'10A'}`}>
                               <BorderBtn title='Add students' color='#009db3' clicked={props.deleteChosenStudents}/>
                           </Link>
                           <BorderBtn title='Delete students' color='#F77D48' clicked={props.deleteChosenStudents}/>
                       </div>
                    )
                }

            </div>

            <div className={styles.col}>
                <BorderBtn title='Delete class' color='#F77D48' clicked={props.deleteClass}/>
            </div>
        </div>
    );
};

export {Tr_table_class_desktop};
