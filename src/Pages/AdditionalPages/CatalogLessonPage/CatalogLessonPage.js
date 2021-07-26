import React from 'react';
import global from '../../../Global/Modules/Global.module.css';
import styles from './CatalogLessonPage.module.css';
import {Container} from "react-bootstrap";

import {DescriptionCard} from "../../../Global/Components/DescriptionCard/DescriptionCard";
import {TitleH2} from "../../../Global/Components/Texts/Headers/TitleH2/TitleH2";

const CatalogLessonPage = () => {
    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
               <TitleH2 titleType='h2' title='Catalog Lessons'/>
                <div className={global.RowBlock}>
                    <div className={styles.col}>
                        <DescriptionCard type='user'/>
                    </div>
                </div>
            </div>

            <div className={global.GreyWrapper}>
                <div className={global.Wrapper}>

                    <div className={global.RowBlock}>
                        {/* 1. input (choose a subject (history, math ... )) */}
                        {/* 2. input (choose a class) */}
                        {/* 3. input (search lesson by title) */}
                    </div>

                    <div className={global.RowBlock}>
                        {/* catalog */}
                    </div>


                </div>
            </div>
        </Container>
    );
};

export default CatalogLessonPage;
