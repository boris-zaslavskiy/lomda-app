import React from 'react';
import {Container} from "react-bootstrap";
import global from '../../Global/Models/Global.module.css';
import Footer from '../../Global/Navigation/Footer/Footer';
import Header from '../../Global/Navigation/Header/Header';
import ContactsSection from './ContactsSection/ContactsSection';

const Contacts1 = () => {
    return (
        <div>
            <Container fluid>
                <div className={global.Wrapper}>
                    <Header/>
                    <ContactsSection/>
                </div>
            </Container>
            <Footer/>
        </div>
    );
};

export default Contacts1;