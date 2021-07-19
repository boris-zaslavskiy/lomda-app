import React from 'react';
import styles from './Main.module.css';

//import styles from './Main.module.css';
import global from '../../Global/Modules/Global.module.css';

import Header from "../../Global/Navigation/Header/Header";
import {Container} from "react-bootstrap";
import {WelcomeSection} from "../../Global/Components/Sections/WelcomeSection/WelcomeSection";
import {UserCard} from "../../Global/Components/UserCard/UserCard";



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
