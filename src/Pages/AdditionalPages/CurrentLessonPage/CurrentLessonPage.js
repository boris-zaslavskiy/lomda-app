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

                    <div className={styles.col}>
                        <DescriptionCard type='lesson' title='Odyssey of Homer' teacher='John Smith' time='02:13:59'/>
                        {/*Current lesson*/}
                    </div>
                    <div className={styles.col}>
                        {/*Progress bar*/}

                        <div>
                            {/*exercises*/}
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CurrentLessonPage;
