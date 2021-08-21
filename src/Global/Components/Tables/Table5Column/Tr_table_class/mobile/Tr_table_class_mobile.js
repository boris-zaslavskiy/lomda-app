import React, {useEffect, useState} from 'react';
import styles from './Tr_table_class_mobile.module.css';
import {TitleH5} from "../../../../Texts/Headers/TitleH5/TitleH5";
import {BorderBtn} from "../../../../Button/BorderBtn/BorderBtn";
import {IconBtn} from "../../../../Button/IconBtn/IconBtn";
import {faTrashAlt, faPlus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Tr_table_class_mobile = (props) => {

    const [accordionStatus, setAccordionStatus] = useState(false);

    useEffect(() => {
        setAccordionStatus(props.status)
    }, [props.status]);

    return (
        <div className={styles.wrapper}>
            <TitleH5 title={props.className} color='white' weight='900'/>
            <div className={styles.block}>
                {(accordionStatus)?
                    (<BorderBtn title='Hide' color='white' clicked={props.clicked}/>):
                    (<BorderBtn title='Show' color='white' clicked={props.clicked}/>)}

                <Link to={`/addStudents/${'10A'}`}>
                    <IconBtn icon={faPlus}
                             color='white'
                             border='white'
                             backgroundColor='transparent'
                             clicked={() => {props.deleteClass(props.classId)}}/>
                </Link>

                <IconBtn icon={faTrashAlt}
                         color='white'
                         border='white'
                         backgroundColor='transparent'
                         clicked={() => {props.deleteClass(props.classId)}}/>
            </div>
        </div>
    );
};

export {Tr_table_class_mobile};
