import React from 'react';
import styles from './AddForm.module.css';
import global from "../../../../Global/Modules/Global.module.css";
import {IconBtn} from "../../../../Global/Components/Button/IconBtn/IconBtn";
import {faTimes} from "@fortawesome/free-solid-svg-icons";


const AddForm = (props) => {
    return (
        <div className={global.RowBlock}>
            <div className={styles.col}>
                <div className={styles.block}>
                    <input className={`form-control`} type={'text'} placeholder={'First name'}/>
                </div>

                <div className={styles.block}>
                    <input className={`form-control`} type={'text'} placeholder={'Last name'}/>
                </div>
            </div>


            <div className={styles.col}>
                <div className={styles.block}>
                    <input className={`form-control`} type={'text'} placeholder={'email'} />
                </div>

                <div className={styles.block}>
                    <IconBtn color='white' backgroundColor='#F77D48' icon={faTimes} clicked={() => {props.deleteStudent(props.item)}}/>
                </div>
            </div>
        </div>
    );
};

export default AddForm;
