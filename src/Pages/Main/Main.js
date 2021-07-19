import React from 'react';
<<<<<<< HEAD
import styles from './Main.module.css';
import global from '../../Global/Models/Global.module.css';
=======
//import styles from './Main.module.css';
import global from '../../Global/Modules/Global.module.css';
>>>>>>> upstream/main
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
<<<<<<< HEAD
            <div className={styles.block}>
                <UserCard/>
            </div>

=======
>>>>>>> upstream/main
        </Container>
    );
};

export default Main;
