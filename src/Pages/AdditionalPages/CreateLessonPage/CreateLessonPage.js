import React from 'react';
import global from '../../../Global/Modules/Global.module.css';
import styles from './CreateLessonPage.module.css';
import {Container} from "react-bootstrap";

import {DescriptionCard} from "../../../Global/Components/DescriptionCard/DescriptionCard";
import {TitleH2} from "../../../Global/Components/Texts/Headers/TitleH2/TitleH2";

const CreateLessonPage = () => {
    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
               <TitleH2 titleType='h2' title='Create Lesson'/>
                <div className={global.RowBlock}>
                    <div className={styles.col}>
                        <DescriptionCard type='user'/>
                    </div>
                </div>
            </div>

            <div className={global.GreyWrapper}>
                <div className={global.Wrapper}>

                    <div className={global.RowBlock}>
                        {/* first col:
                         1.
                         2.
                         3.
                         */}

                        {/* second col:
                         4.
                         5.
                         6.
                         */}
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default CreateLessonPage;
