import React from 'react';
import styles from './Header.module.css';
import {Button} from "react-bootstrap";
import {TitleH5} from "../../Texts/Headers/TitleH5/TitleH5";

const Header = (props) => {

//Title text, type button changes depending on the props. - Alina
    return (
        <div className={styles.headerBlock} style={{backgroundColor: `${props.color}`}}>
            <TitleH5 title={props.title} color='white' weight={props.weight}/>
        </div>
    );
};

export {Header};
