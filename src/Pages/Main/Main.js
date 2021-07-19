import React from 'react';
import styles from './Main.module.css';
import global from '../../Global/Models/Global.module.css';
import Header from "../../Global/Navigation/Header/Header";
import {Container} from "react-bootstrap";
import {WelcomeSection} from "../../Global/Components/Sections/WelcomeSection/WelcomeSection";
import {UserCard} from "../../Global/Components/UserCard/UserCard";
import {TitleH2} from "../../Global/Components/Texts/Headers/TitleH2/TitleH2";


const Main = () => {
    return (
        <Container fluid className={global.Wrapper}>
            <Header/>
            <WelcomeSection pageName='main' addBlock='form'/>
            <div className={styles.block}>
                <UserCard/>
            </div>

        </Container>
    );
};

export default Main;
