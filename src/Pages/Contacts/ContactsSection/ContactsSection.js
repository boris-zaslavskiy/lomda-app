import React from 'react';
import styles from '../ContactsSection/ContactsSection.module.css';
import {Container, Row} from "react-bootstrap";
import { FaPhoneSquareAlt, FaMapMarkerAlt,FaEnvelope } from "react-icons/fa";
import {TitleH2} from "../../../Global/Components/Texts/Headers/TitleH2/TitleH2";

const ContactsSection = () => {
    return (
        <div className={`mb-5`}>
            <Container>
                <Row className={'gx-0'}>
                    <TitleH2 titleType='h2' title='Contacts'/>
                    <table className='col-12 col-md-4'>
                        <tbody>
                        <tr>
                            <td className='pe-3 align-top'>
                                <FaPhoneSquareAlt style={{ fontSize: 20 }}/>
                            </td>
                            <td className={`${styles.tableBorder}`}>
                                <p className={'m-0'}>Phone:</p>
                                <span>
                                    P: +972 2 502 11 59 <br/>
                                    F: +972 2 502 11 65
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className='pe-3 align-top pt-2'>
                                <FaEnvelope style={{ fontSize: 20 }}/>
                            </td>
                            <td className={`${styles.tableBorder} pt-2`}>
                                <p className={'m-0'}>Email:<br/></p>
                                <span>yours@alpiltd.com</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='pe-3 align-top pt-2'>
                                <FaMapMarkerAlt style={{ fontSize: 20 }}/>
                            </td>
                            <td className='pt-2'>
                                <p className={'m-0'}>Adress:<br/></p>
                                <span>Yad Harutsim 10, Jerusalem, Israel, PO Box 100003, Zip 9110001</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div className={`col-12 col-md-6 offset-md-2 ${styles.location}`}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.606608701982!2d35.21468211510071!3d31.75393714274871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1503281f90986d8f%3A0x7cf88baf7a2860db!2sYad%20Harutsim%2010%2C%20Jerusalem!5e0!3m2!1sru!2sil!4v1625073676830!5m2!1sru!2sil" allowFullScreen="" loading="lazy" className='w-100 h-100'/>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default ContactsSection;