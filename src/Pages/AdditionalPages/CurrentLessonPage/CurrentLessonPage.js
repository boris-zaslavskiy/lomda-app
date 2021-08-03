import React from 'react';
import styles from './CurrentLessonPage.module.css';
import global from '../../../Global/Modules/Global.module.css';

import {Container} from "react-bootstrap";
import {DescriptionCard} from "../../../Global/Components/DescriptionCard/DescriptionCard";


const CurrentLessonPage = () => {


    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
                <div className={global.RowBlock}>

                </div>
            </div>
        </Container>
    );
};

export default CurrentLessonPage;
