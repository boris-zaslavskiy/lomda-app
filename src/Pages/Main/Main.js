import React from 'react';
import styles from './Main.module.css';

//import styles from './Main.module.css';
import global from '../../Global/Modules/Global.module.css';


import {Container} from "react-bootstrap";
import {WelcomeSection} from "../../Global/Components/Sections/WelcomeSection/WelcomeSection";
import {DescriptionCard} from "../../Global/Components/DescriptionCard/DescriptionCard";
import {HeaderCardItem} from "../../Global/Components/HeaderCardItem/HeaderCardItem";



const Main = () => {
    return (
        <Container fluid className={global.Wrapper}>
            <WelcomeSection pageName='main' addBlock='form'/>
            <div className={styles.block}>
                <DescriptionCard type='form'/>
            </div>

            <div className={styles.block}>
                <DescriptionCard type='user'/>
            </div>

            <div className={styles.block}>
                <DescriptionCard type='lesson'/>
            </div>

        </Container>
    );
};

export default Main;
