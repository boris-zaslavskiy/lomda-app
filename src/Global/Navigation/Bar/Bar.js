import React, {useContext, useState}  from 'react';
import {NavLink} from "react-router-dom";
import styles from '../Bar/Bar.module.css';
// import {context} from '../../../Utils/Context';

const Bar = ({position}) => {

    return (
        <div className={`${position==='burger'? styles.navBurger :position === 'footer'?styles.navFooter: `${styles.navHeader}`} `}>
            <NavLink exact to={`/`} activeStyle={position === 'header'?{color: '#009DB3', borderBottom: '3px solid #009DB3'}:null}>Home</NavLink>
            <NavLink exact to={`/courses`} activeStyle={position === 'header'?{color: '#009DB3', borderBottom: '3px solid #009DB3'}:null}>Courses</NavLink>
            <NavLink exact to={`/about-us`} activeStyle={position === 'header'?{color: '#009DB3', borderBottom: '3px solid #009DB3'}:null}>About us</NavLink>
            <NavLink exact to={`/contacts`} activeStyle={position === 'header'?{color: '#009DB3', borderBottom: '3px solid #009DB3'}:null}>Contacts</NavLink>
        </div>
    );
};

export default Bar;