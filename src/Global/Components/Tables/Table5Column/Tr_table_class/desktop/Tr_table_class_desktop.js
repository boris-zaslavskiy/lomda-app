import React from 'react';
import styles from './Tr_table_class_desktop.module.css';
import {TitleH5} from "../../../../Texts/Headers/TitleH5/TitleH5";
import {BorderBtn} from "../../../../Button/BorderBtn/BorderBtn";
import {LineBar} from "../../../../ProgressBar/LineBar/LineBar";
import {TextBar} from "../../../../ProgressBar/TextBar/TextBar";

/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown} from '@fortawesome/free-solid-svg-icons'
const icon = <FontAwesomeIcon icon={faArrowDown}/>;*/

const Tr_table_class_desktop = (props) => {

//Title text, type button changes depending on the props. - Alina
    return (
        <div className={styles.wrapper}>
            <div className={styles.col}>
                <div  className={styles.row}>
                    <TitleH5 title='5A' color='black' weight='900'/>
                    <BorderBtn title='Show' color='#009DB3'/>
                </div>
            </div>

            <div className={styles.col}>
                <div>
                    <LineBar currentCount='17' maxCount='34'/>
                    <TextBar flag='DescriptionCard' currentCount='17' text={`${17} of ${34} students completed the task`}/>
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
