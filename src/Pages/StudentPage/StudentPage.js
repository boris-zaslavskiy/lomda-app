import React from 'react';
import styles from './StudentPage.module.css';
import global from '../../Global/Modules/Global.module.css';
import Header from "../../Global/Navigation/Header/Header";
import {Container} from "react-bootstrap";
import {WelcomeSection} from "../../Global/Components/Sections/WelcomeSection/WelcomeSection";

const StudentPage = () => {
    return (
        <Container fluid className={global.Wrapper}>
            <Header/>
            <WelcomeSection pageName='student' addBlock='progressBar'/>
        </Container>
    );
};

export default StudentPage;
