import React, {useEffect, useRef} from 'react';
import styles from './Tr_table_student.module.css';
import {TitleH6} from "../../../Texts/Headers/TitleH6/TitleH6";

import avatar from '../../../../../Assets/users/avatar.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'


const Tr_table_student = (props) => {

    const ref = useRef(null);

    useEffect(() => {
        props.itemHeight(ref.current.offsetHeight);
    },[]);



    return (
        <div className={styles.wrapper} ref={ref} >
            <div className={styles.col}>
                <div className={styles.row}>
                    <div className={styles.imgBlock}>
                        <img src={avatar} alt='avatar'/>
                    </div>
                    <TitleH6 title={props.name} color='black' weight='900'/>
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
                    <TitleH6 title={props.class} color='black' weight='900'/>
                </div>
            </div>

        </div>
    );
};

export {Tr_table_student};
