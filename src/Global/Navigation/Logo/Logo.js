import React from 'react';
import { Container,Row } from 'react-bootstrap';
import logo from '../../../Assets/logo.png';
import styles from '../Logo/Logo.module.css';

const Logo = ({position}) => {
    return (
        <div className='d-flex flex-row align-items-center'>
            <img src={logo} alt="logo" className={`pe-2 pe-sm-3 ${styles.imageBurger}`}/>
            <div className={`${position==='footer'?styles.whiteText:styles.blackText}`}>
                <p>Online<br/></p>
                <p>Educational</p>
                <p>System</p>
            </div>
        </div>
    );
};

export default Logo;