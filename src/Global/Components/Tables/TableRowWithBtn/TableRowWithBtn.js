import React from 'react';
import styles from './TableRowWithBtn.module.css';
import global from '../../../../Global/Modules/Global.module.css';
import {TitleH5} from "../../Texts/Headers/TitleH5/TitleH5";
import {TxtAdditionalGrey} from "../../Texts/TextDescription/TxtAdditionalGrey/TxtAdditionalGrey";
import {GreenBtn} from "../../Button/GreenBtn/GreenBtn";

const TableRowWithBtn = (props) => {

//Title text, type button changes depending on the props. - Alina
    return (
        <div className={styles.wrapper}>
            <div className={global.WhiteBlock}>
                <div>
                    <TitleH5 title={props.title} color='#878A8B' weight='400'/>
                </div>
                <div>
                    <GreenBtn title='view'/>
                </div>
            </div>
        </div>
    );
};

export {TableRowWithBtn};
