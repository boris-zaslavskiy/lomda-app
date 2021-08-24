import React, {useEffect, useState} from 'react';
import styles from './Tr_table_class_desktop.module.css';
import {TitleH5} from "../../../../Texts/Headers/TitleH5/TitleH5";
import {BorderBtn} from "../../../../Button/BorderBtn/BorderBtn";
import {IconBtn} from "../../../../Button/IconBtn/IconBtn";
import {LineBar} from "../../../../ProgressBar/LineBar/LineBar";
import {TextBar} from "../../../../ProgressBar/TextBar/TextBar";
import {Link} from "react-router-dom";
import {faPlus, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

import useWidth from "../../../../../../Hooks/useWidth";


const Tr_table_class_desktop = (props) => {

    const width = useWidth();
    const [accordionStatus, setAccordionStatus] = useState(false);

    useEffect(() => {
        setAccordionStatus(props.status)
    }, [props.status]);



    return (
        <div className={styles.wrapper}>
            <div className={styles.col}>
                <div className={styles.row}>
                    {(width < 1000)?(
                        <TitleH5 title={props.className} color='black' weight='900'/>
                    ):(
                        <TitleH5 title={`Class ${props.className} :`} color='black' weight='900'/>
                    )}

                    {(props.studentsListEmpty) ? null : (
                        (accordionStatus) ?
                            (<BorderBtn title='Hide' color='#F77D48' clicked={props.clicked}/>) :
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
                            <BorderBtn title='Add students' color='#009db3'/>
                        </Link>
                    ) :
                    (
                       <div className={styles.block}>
                           {(width < 1620)?(
                               <div className={styles.block}>
                                   <Link to={`/addStudents/${'10A'}`}>
                                       <IconBtn icon={faPlus} color='#009db3' border='#009db3' backgroundColor='transparent'/>
                                   </Link>
                                   <IconBtn icon={faTrashAlt} color='#F77D48' border='#F77D48' backgroundColor='transparent' clicked={props.deleteChosenStudents}/>
                               </div>
                           ):(
                              <div className={styles.block}>
                                  <Link to={`/addStudents/${'10A'}`}>
                                      <BorderBtn title='Add students' color='#009db3'/>
                                  </Link>
                                  <BorderBtn title='Delete students' color='#F77D48' clicked={props.deleteChosenStudents}/>
                              </div>
                           )}
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
