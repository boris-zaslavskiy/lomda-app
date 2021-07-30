import React from 'react';
import styles from './Table2ColProgress.module.css';
import global from '../../../../Global/Modules/Global.module.css';
import {TitleH5} from "../../Texts/Headers/TitleH5/TitleH5";
import {LineBar} from "../../ProgressBar/LineBar/LineBar";
import {TextBar} from "../../ProgressBar/TextBar/TextBar";

const Table2ColProgress = (props) => {

//Title text, type button changes depending on the props. - Alina
    return (
        <div className={styles.wrapper}>
            <div className={styles.col}>
                <div className={styles.row}>
                    <TitleH5 title={props.class} color='black' weight='900'/>
                </div>
                <div className={styles.row}>
                    <LineBar currentCount={props.currentCount} maxCount={props.maxCount}/>
                    <TextBar flag='DescriptionCard' currentCount={props.currentCount} text={`${props.currentCount} of ${props.maxCount} students completed the task`}/>
                </div>
            </div>
        </div>
    );
};

export {Table2ColProgress};
