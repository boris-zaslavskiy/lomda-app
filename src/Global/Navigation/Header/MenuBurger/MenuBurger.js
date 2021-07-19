import React, {useState, useContext} from 'react';
import Logo from '../../Logo/Logo';
import Login from '../Login/Login';
import Bar from '../../Bar/Bar';
import {context} from '../../../../Utils/Context';
import styles from '../MenuBurger/MenuBurger.module.css';


const MenuBurger = () => {
    const {openBurger, burgerMenu} = useContext(context);

    return (
        <div  className={`container mt-5 p-0 mb-4`}>
            <div className={`${styles.headerBody}`}>
                <div className={`${styles.logo}`}>
                    <Logo/>
                </div>
                <div className={`${styles.login}`}>
                    <Login/>
                </div>
                <div className={`${styles.buttonBurger} ${openBurger ? styles.active: null}`}
                     onClick={()=>{
                         burgerMenu();
                     }} >
                    <span></span>
                </div>
                {openBurger ? <Bar position='burger'/> : null}
            </div>
        </div>
    );
};

export default MenuBurger;