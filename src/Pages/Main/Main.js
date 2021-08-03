import React from 'react';
import global from '../../Global/Modules/Global.module.css';

import {Container} from "react-bootstrap";
import {WelcomeSection} from "../../Global/Components/Sections/WelcomeSection/WelcomeSection";
import StudentPage from "../AdditionalPages/StudentPage/StudentPage";

const Main = () => {
    return (
        <Container fluid className={global.Wrapper}>
            <WelcomeSection pageName='main' addBlock='form'/>
        </Container>
    );
};

export default Main;
