import React from 'react';
import global from '../../Global/Modules/Global.module.css';
import {Container} from "react-bootstrap";
import {WelcomeSection} from "../../Global/Components/Sections/WelcomeSection/WelcomeSection";

const TeacherPage = () => {
    return (
        <Container fluid className={global.Wrapper}>
            <WelcomeSection  pageName='teacher' addBlock='progressBar'/>
        </Container>
    );
};

export default TeacherPage;
