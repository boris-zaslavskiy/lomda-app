import React from 'react';
import Header from "../../Global/Navigation/Header/Header";
import {Container, Row} from "react-bootstrap";
import styles from "./Contacts.module.css";
import phone from '../../Assets/NormalPhoneIcon.png';
import email from '../../Assets/NormalMessageIcon.png';
import geo from '../../Assets/NormalGeoIcon.png';
import Footer from "../../Global/Navigation/Footer/Footer";



const Contacts = () => {
    return (
        <>
        <div className={styles.contacts}>
            <Header/>
            <Container fluid className={styles.container}>
                <Row>
                        <div className={styles.title}>
                            <div className={`d-none d-lg-block col-lg-1 ${styles.rectangles}`}>
                                <div className={styles.rect1}></div>
                                <div className={styles.rect2}></div>
                                <div className={styles.rect3}></div>
                            </div>
                            <h1>Contacts</h1>
                        </div>
                </Row>
                <Row className={`col-md-12 ${styles.content}`}>
                    <div className={`col-12 col-md-6 col-lg-5 ${styles.contactInfo}`}>
                    <div className={styles.card1}>
                        <div className={`${styles.icon}`}>
                            <img src={phone} alt="Telephone"/>
                        </div>
                        <div className={styles.cardText}>
                            phone
                            <p>
                                P: +972 2 502 11 59 <br/>
                                F: +972 2 502 11 65
                            </p>
                        </div>
                    </div>
                    <div className={styles.card2}>
                        <div className={`${styles.icon}`}>
                            <img src={email} alt="Email"/>
                        </div>
                        <div className={styles.cardText}>
                            mail
                            <p>yours@alpiltd.com</p>
                        </div>
                    </div>
                    <div className={styles.card3}>
                        <div className={`${styles.icon}`}>
                            <img src={geo} alt="Location"/>
                        </div>
                        <div className={styles.cardText}>
                            adress
                            <p>Yad Harutsim 10, Jeruslem, Israel, PO Box 100003, Zip 9110001</p>
                        </div>
                    </div>
                    </div>
                    <div className={`col-12 col-md-6 offset-lg-1 ${styles.location}`}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.606608701982!2d35.21468211510071!3d31.75393714274871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1503281f90986d8f%3A0x7cf88baf7a2860db!2sYad%20Harutsim%2010%2C%20Jerusalem!5e0!3m2!1sru!2sil!4v1625073676830!5m2!1sru!2sil" allowFullScreen="" loading="lazy"/>
                    </div>
                </Row>
            </Container>
        </div>
            <Footer/>
        </>
    );
};

export default Contacts;
