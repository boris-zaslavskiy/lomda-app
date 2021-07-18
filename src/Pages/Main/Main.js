import React from 'react';
//import styles from './Main.module.css';
import global from '../../Global/Models/Global.module.css';
import Header from "../../Global/Navigation/Header/Header";
import {Container} from "react-bootstrap";
import {WelcomeSection} from "../../Global/Components/Sections/WelcomeSection/WelcomeSection";
import {CourseCard} from "../../Global/Components/CourseCard/CourseCard";


const Main = () => {
    return (
        <Container fluid className={global.Wrapper}>
            <Header/>
            <WelcomeSection pageName='main' addBlock='form'/>

            <CourseCard/>
        </Container>
    );
};

export default Main;
