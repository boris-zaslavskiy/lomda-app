import React from 'react';
import styles from './Tr_table_student_mobile.module.css';
import {TitleH6} from "../../../../Texts/Headers/TitleH6/TitleH6";

import {BorderBtn} from "../../../../Button/BorderBtn/BorderBtn";
import {IconBtn} from "../../../../Button/IconBtn/IconBtn";

import avatar from '../../../../../../Assets/users/avatar.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar, faTrashAlt} from '@fortawesome/free-solid-svg-icons'


const Tr_table_student_mobile = (props) => {

//Title text, type button changes depending on the props. - Alina
    return (
        <div className={styles.wrapper}>
            <div className={styles.row}>
                <div className={styles.imgBlock}>
                    <img src={avatar} alt='avatar'/>
                </div>
                <TitleH6 title='Marco Botton' color='black' weight='900'/>
                <IconBtn icon={faTrashAlt}/>
            </div>

            <div className={styles.col}>
                <div className={styles.cell}>
                    <span style={{color: '#818A8D',fontSize: '12px'}}>rate</span>
                    <div className={styles.tr}>
                        <TitleH6 title='20' color='black' weight='900'/>
                        <FontAwesomeIcon icon={faStar} style={{color: '#F77D48'}}/>
                    </div>
                </div>

                <div className={styles.cell}>
                    <span style={{color: '#818A8D',fontSize: '12px'}}>rating</span>
                    <div className={styles.tr}>
                        <TitleH6 title='23' color='black' weight='900'/>
                    </div>
                </div>

                <div className={styles.cell}>
                    <span style={{color: '#818A8D',fontSize: '12px'}}>q&a</span>
                    <div className={styles.tr}>
                        <TitleH6 title='20' color='black' weight='900'/>
                    </div>
                </div>

                <div className={styles.cell}>
                    <span style={{color: '#818A8D',fontSize: '12px'}}>elevation</span>
                    <div className={styles.tr}>
                        <TitleH6 title='56' color='black' weight='900'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Tr_table_student_mobile};
