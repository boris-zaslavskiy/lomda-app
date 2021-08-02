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
                        <div className={styles.block}>
                            {/* first col: */}
                        </div>

                        <div className={styles.block}>
                            {/* second col: */}
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CreateLessonPage;
