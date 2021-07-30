import React from 'react';
import global from '../../../Global/Modules/Global.module.css';
import styles from './CreateLessonPage.module.css';
import {Container} from "react-bootstrap";

import {DescriptionCard} from "../../../Global/Components/DescriptionCard/DescriptionCard";
import {TitleH2} from "../../../Global/Components/Texts/Headers/TitleH2/TitleH2";
import {TitleH5} from "../../../Global/Components/Texts/Headers/TitleH5/TitleH5";
import {GreenBtn} from "../../../Global/Components/Button/GreenBtn/GreenBtn";

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
                            <div className={styles.row}>
                                <TitleH5 title='1. Choose the subject' color='black' weight='900'/>
                                <GreenBtn title='search'/>
                            </div>

                            <div className={styles.row}>
                                <TitleH5 title='2. Choose the class' color='black' weight='900'/>
                                <GreenBtn title='search'/>
                            </div>

                            <div className={styles.row}>
                                <TitleH5 title='3. Choose the cover of the lesson' color='black' weight='900'/>
                                <GreenBtn title='search'/>
                            </div>
                        </div>

                        <div className={styles.block}>
                            {/* second col:
                         4.
                         5.
                         6.
                         */}
                        </div>


                    </div>

                </div>
            </div>
        </Container>
    );
};

export default CreateLessonPage;
