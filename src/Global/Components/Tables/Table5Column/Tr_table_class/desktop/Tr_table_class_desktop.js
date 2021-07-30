import React from 'react';
import styles from './Tr_table_class_desktop.module.css';
import {TitleH5} from "../../../../Texts/Headers/TitleH5/TitleH5";
import {BorderBtn} from "../../../../Button/BorderBtn/BorderBtn";
import {LineBar} from "../../../../ProgressBar/LineBar/LineBar";
import {TextBar} from "../../../../ProgressBar/TextBar/TextBar";


const Tr_table_class_desktop = (props) => {

//Title text, type button changes depending on the props. - Alina
    return (
        <div className={styles.wrapper}>
            <div className={styles.col}>
                <div  className={styles.row}>
                    <TitleH5 title={props.className} color='black' weight='900'/>
                    <BorderBtn title='Show' color='#009DB3' clicked={props.clicked}/>
                </div>
            </div>

            <div className={styles.col}>
                <div>
                    <LineBar currentCount={props.studentsCount} maxCount={props.studentsMaxCount}/>
                    <TextBar flag='DescriptionCard' currentCount={props.studentsCount} text={`${props.studentsCount} of ${props.studentsMaxCount} students completed the task`}/>
                </div>
            </div>

            <div className={styles.col}>
                <BorderBtn title='Delete students' color='#F77D48'/>
            </div>

            <div className={styles.col}>
                <BorderBtn title='Delete class' color='#F77D48'/>
            </div>

        </div>
    );
};

export {Tr_table_class_desktop};
