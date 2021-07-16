import React from 'react';
import styles from './Main.module.css';
import global from '../../Global/Models/Global.module.css';
import Header from "../../Global/Navigation/Header/Header";
import {Container} from "react-bootstrap";
import {TemplatePage} from "../../Global/Components/TemplatePage/TemplatePage";

const Main = () => {
    return (
        <Container fluid className={global.Wrapper}>
            <Header/>
            <TemplatePage/>
        </Container>
    );
};

export default Main;
