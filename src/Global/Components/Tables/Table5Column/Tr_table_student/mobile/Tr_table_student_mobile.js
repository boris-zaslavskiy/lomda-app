import React, {useEffect, useRef} from 'react';
import styles from './Tr_table_student_mobile.module.css';
import {TitleH6} from "../../../../Texts/Headers/TitleH6/TitleH6";

import {IconBtn} from "../../../../Button/IconBtn/IconBtn";

import avatar from '../../../../../../Assets/users/avatar.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar, faTrashAlt} from '@fortawesome/free-solid-svg-icons'


const Tr_table_student_mobile = (props) => {

    const ref = useRef(null);

    useEffect(() => {
        props.itemHeight(ref.current.offsetHeight);
    },[]);


    return (
        <div className={styles.wrapper} ref={ref} >
            <div className={styles.row}>
                <div className={styles.imgBlock}>
                    <img src={avatar} alt='avatar'/>
                </div>
                <TitleH6 title={props.name} color='black' weight='900'/>
                <IconBtn icon={faTrashAlt}
                         color='#878A8B'
                         border='#878A8B'
                         backgroundColor='transparent'
                         clicked={() => {props.deleteCurrentStudent(props.id, props.classId)}}/>
            </div>

            <div className={styles.col}>
                <div className={styles.cell}>
                    <span style={{color: '#818A8D',fontSize: '12px'}}>rate</span>
                    <div className={styles.tr}>
                        <TitleH6 title={props.rate} color='black' weight='900'/>
                        <FontAwesomeIcon icon={faStar} style={{color: '#F77D48'}}/>
                    </div>
                </div>

                <div className={styles.cell}>
                    <span style={{color: '#818A8D',fontSize: '12px'}}>rating</span>
                    <div className={styles.tr}>
                        <TitleH6 title={props.averageNumber} color='black' weight='900'/>
                    </div>
                </div>

                <div className={styles.cell}>
                    <span style={{color: '#818A8D',fontSize: '12px'}}>q&a</span>
                    <div className={styles.tr}>
                        <TitleH6 title={props.questions} color='black' weight='900'/>
                    </div>
                </div>

                <div className={styles.cell}>
                    <span style={{color: '#818A8D',fontSize: '12px'}}>evaluation</span>
                    <div className={styles.tr}>
                        <TitleH6 title={props.evaluations} color='black' weight='900'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Tr_table_student_mobile};
