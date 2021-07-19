import React from 'react';
import styles from './TeacherPage.module.css';
import global from '../../Global/Modules/Global.module.css';
import Header from "../../Global/Navigation/Header/Header";
import {Container} from "react-bootstrap";
import {WelcomeSection} from "../../Global/Components/Sections/WelcomeSection/WelcomeSection";

const TeacherPage = () => {
    return (
        <Container fluid className={global.Wrapper}>
            <Header/>
            <WelcomeSection  pageName='teacher' addBlock='progressBar'/>
        </Container>
    );
};

export default TeacherPage;
