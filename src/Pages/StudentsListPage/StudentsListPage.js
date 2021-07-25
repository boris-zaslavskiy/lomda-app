import React from 'react';
import global from '../../Global/Modules/Global.module.css';
import styles from './StudentsListPage.module.css';
import {Container} from "react-bootstrap";
import {WelcomeSection} from "../../Global/Components/Sections/WelcomeSection/WelcomeSection";
import {DescriptionCard} from "../../Global/Components/DescriptionCard/DescriptionCard";
import usersImg from "../../Assets/users/alina.png";
import {HeaderCardItem} from "../../Global/Components/HeaderCardItem/HeaderCardItem";
import {TitleH3} from "../../Global/Components/Texts/Headers/TitleH3/TitleH3";
import {TxtAdditionalGrey} from "../../Global/Components/Texts/TextDescription/TxtAdditionalGrey/TxtAdditionalGrey";
import {GreenBtn} from "../../Global/Components/Button/GreenBtn/GreenBtn";
import {TitleH2} from "../../Global/Components/Texts/Headers/TitleH2/TitleH2";

const StudentsListPage = () => {
    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
               <TitleH2 titleType='h2' title='Students list'/>
                <div className={styles.col}>
                    <DescriptionCard type='user'/>
                </div>
            </div>

            <div className={global.GreyWrapper}>
                <div className={global.Wrapper}>

                    <div className={styles.cardBlock}>

                    </div>

                </div>
            </div>
        </Container>
    );
};

export default StudentsListPage;
