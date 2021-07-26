import React, {useContext, useState}  from 'react';
import {NavLink} from "react-router-dom";
import styles from '../Bar/Bar.module.css';
// import {context} from '../../../Utils/Context';

const Bar = ({position}) => {

    return (
        <div className={`${position==='burger'? styles.navBurger :position === 'footer'?styles.navFooter: `${styles.navHeader} mt-4`} `}>
            <NavLink exact to={`/`} activeStyle={position === 'header'?{color: '#007BA4', borderBottom: '1px solid #007BA4'}:null}>Home</NavLink>
            <NavLink exact to={`/courses`} activeStyle={position === 'header'?{color: '#007BA4', borderBottom: '1px solid #007BA4'}:null}>Courses</NavLink>
            <NavLink exact to={`/about-us`} activeStyle={position === 'header'?{color: '#007BA4', borderBottom: '1px solid #007BA4'}:null}>About us</NavLink>
            <NavLink exact to={`/contacts`} activeStyle={position === 'header'?{color: '#007BA4', borderBottom: '1px solid #007BA4'}:null}>Contacts</NavLink>
        </div>
    );
};

export default Bar;