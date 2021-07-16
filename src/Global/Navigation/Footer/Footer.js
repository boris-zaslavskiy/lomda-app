import React from 'react';
import styles from './Footer.module.css';
import mobLogo from '../../../Assets/mobileLogo.png';
import {Link} from "react-router-dom";
import whatsappImg from '../../../Assets/whatsapp.png';
import telegramImg from '../../../Assets/telegram.png';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.logo}>
                <div className={styles.logoImg}>
                </div>
                <p>LOMDA@all rights reserved (2021)</p>
                <div className={`d-md-none ${styles.address}`}>
                    <p>Yad Harutsim 10, Jerusalem, Israel,  PO Box 100003, Zip 9110001</p>
                </div>
            </div>
            <div className={styles.navigation}>
                <nav className={styles.nav}>
                <Link>Home</Link>
                <Link>Courses</Link>
                <Link>About us</Link>
                <Link>Contacts</Link>
                </nav>
                <div className={styles.contacts}>
                    <p className={styles.phoneNum}>P: +972 2 502 11 59 <br/> F: +972 2 502 11 65</p>
                    <div className={styles.messengers}>
                        <p>yours@alpiltd.com</p>
                    <p><span>Messengers:</span> <img src={whatsappImg} alt="Whatsapp"/><img src={telegramImg} alt="Telegram"/></p>
                </div>
                </div>
            </div>
            <div className={`d-none d-md-block ${styles.address}`}>
                <p>Yad Harutsim 10, Jerusalem, Israel,  PO Box 100003, Zip 9110001</p>
            </div>
        </div>
    );
};

export default Footer;
