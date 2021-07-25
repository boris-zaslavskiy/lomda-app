import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Logo from '../Logo/Logo';
import Bar from '../Bar/Bar';
import styles from './Footer.module.css';
import global from '../../../Global/Modules/Global.module.css';
import { FaTelegramPlane,FaWhatsapp } from "react-icons/fa";
import Menu2 from "../NavBar/Menu/Menu";

const Footer = () => {
    return (
        <Container fluid className={`${styles.footer} py-5 ${styles.whiteText}`}>
            <Row className={`${global.Wrapper} ${styles.fontStyle}`}>
                <div className='col-7 col-md-4 p-0 h-100'>
                    <Logo position='footer'/>
                </div>
                <div className='col-5 col-md-2'>
                    <Bar position='footer'/>
                </div>
                <div className='col-7  col-md-4 m-0 px-0 pt-3 pt-md-0'>
                    <div className='d-flex flex-column justify-content-between h-100'>
                        <p>Yad Harutsim 10,Jerusalem, Israel<br/>PO Box 100003, Zip 9110001</p>
                        <p>
                            P: +972 2 502 11 59 <br/>
                            F: +972 2 502 11 65
                        </p>
                        <p>yours@alpiltd.com</p>
                    </div>
                </div>
                <div className='col-5 col-md-2 pt-3 pt-md-0'>
                    <div className={`d-flex flex-column ${styles.messengers}`}>
                        <p className='mb-2'>Messengers:</p>
                        <span className='mb-1'><FaTelegramPlane style={{ fontSize: 20 }}/> Telegram</span>
                        <span><FaWhatsapp style={{ fontSize: 20 }}/> WhatsApp</span>
                    </div>
                </div>
                <p className={`${styles.textUnderLogo} d-flex justify-content-center align-items-center mt-5`}>LOMDA@all rights reserved (2021)</p>
            </Row>
        </Container>
    );
};

export default Footer;