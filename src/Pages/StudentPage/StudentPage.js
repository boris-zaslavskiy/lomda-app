import React from 'react';
import global from '../../Global/Modules/Global.module.css';
import styles from './StudentPage.module.css';
import {Container} from "react-bootstrap";
import {WelcomeSection} from "../../Global/Components/Sections/WelcomeSection/WelcomeSection";
import {DescriptionCard} from "../../Global/Components/DescriptionCard/DescriptionCard";
import usersImg from "../../Assets/users/alina.png";
import {HeaderCardItem} from "../../Global/Components/HeaderCardItem/HeaderCardItem";
import {TitleH3} from "../../Global/Components/Texts/Headers/TitleH3/TitleH3";
import {TxtAdditionalGrey} from "../../Global/Components/Texts/TextDescription/TxtAdditionalGrey/TxtAdditionalGrey";
import {GreenBtn} from "../../Global/Components/Button/GreenBtn/GreenBtn";

const StudentPage = () => {
    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
                <WelcomeSection pageName='student' addBlock='progressBar'/>
            </div>

            <div className={global.GreyWrapper}>
                <div className={global.Wrapper}>

                    <div className={styles.cardBlock}>
                        <div className={styles.col}>
                            <DescriptionCard type='form'/>
                        </div>
                        <div className={styles.col}>
                            <DescriptionCard type='form'/>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default StudentPage;
