import React from 'react';
import {Container} from "react-bootstrap";
import global from '../../Global/Modules/Global.module.css';
import ContactsSection from './ContactsSection/ContactsSection';

const Contacts1 = () => {
    return (
        <div>
            <Container fluid>
                <div className={global.Wrapper}>
                    <ContactsSection/>
                </div>
            </Container>
        </div>
    );
};

export default Contacts1;