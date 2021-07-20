import React, {useContext, useState}  from 'react';
import {Link} from "react-router-dom";
import styles from '../Bar/Bar.module.css';
// import {context} from '../../../Utils/Context';

const Bar = ({position}) => {

    return (
        <div className={`${position==='burger'? styles.navBurger :position === 'footer'?styles.navFooter: `${styles.navHeader} mt-4`} `}>
            <Link to={`/`} className={styles.link}>Home</Link>
            <Link to={`/courses`} className={styles.link} >Courses</Link>
            <Link to={`/about-us`} className={styles.link}>About us</Link>
            <Link to={`/contacts`} className={styles.link}>Contacts</Link>
        </div>
    );
};

export default Bar;