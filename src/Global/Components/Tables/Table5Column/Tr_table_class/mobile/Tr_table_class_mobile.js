import React from 'react';
import styles from './Tr_table_class_mobile.module.css';
import {TitleH5} from "../../../../Texts/Headers/TitleH5/TitleH5";
import {BorderBtn} from "../../../../Button/BorderBtn/BorderBtn";

const Tr_table_class_mobile = (props) => {

//Title text, type button changes depending on the props. - Alina
    return (
        <div className={styles.wrapper}>
            <TitleH5 title='5A' color='white' weight='900'/>
            <BorderBtn title='Show' color='white' clicked={props.clicked}/>
        </div>
    );
};

export {Tr_table_class_mobile};
