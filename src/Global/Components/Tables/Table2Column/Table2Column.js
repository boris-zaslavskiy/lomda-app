import React from 'react';
import styles from './Table2Column.module.css';
import global from '../../../../Global/Modules/Global.module.css';
import {TitleH5} from "../../Texts/Headers/TitleH5/TitleH5";
import {TxtAdditionalGrey} from "../../Texts/TextDescription/TxtAdditionalGrey/TxtAdditionalGrey";

const Table2Column = (props) => {

//Title text, type button changes depending on the props. - Alina
    return (
        <div className={styles.wrapper}>
            <div className={styles.col}>
                <div className={styles.row}>
                    <div className={global.WhiteBlock}>
                        <TitleH5 title={props.first} color='#878A8B' weight='400'/>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={global.WhiteBlock}>
                        <TitleH5 title={props.second} color='black' weight='900'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Table2Column};
