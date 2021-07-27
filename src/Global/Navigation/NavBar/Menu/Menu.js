import React from 'react';
import styles from './Menu.module.css';
import {NavLink} from "react-router-dom";

const Menu2 = (props) => {

    {/*Alina menu v2*/}
    return (
        <div className={styles.wrapper}>
            <ul className={styles.ul}>
                <li className={styles.itemlist}>
                    <NavLink to='/' exact style={{color: `${props.color}`}}
                             activeStyle={{color: "#009DB3", borderBottom: '2px solid #009DB3'}}>Home</NavLink>
                </li>
                <li className={styles.itemlist}>
                    <NavLink to='/about-us' style={{color: `${props.color}`}}
                             activeStyle={{color: "#009DB3", borderBottom: '2px solid #009DB3'}}>About us</NavLink>
                </li>
                <li className={styles.itemlist}>
                    <NavLink to='/courses' style={{color: `${props.color}`}}
                             activeStyle={{color: "#009DB3", borderBottom: '2px solid #009DB3'}}>Courses</NavLink>
                </li>
                <li className={styles.itemlist}>
                    <NavLink to='/contacts' style={{color: `${props.color}`}}
                             activeStyle={{color: "#009DB3", borderBottom: '2px solid #009DB3'}}>Contacts</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Menu2;