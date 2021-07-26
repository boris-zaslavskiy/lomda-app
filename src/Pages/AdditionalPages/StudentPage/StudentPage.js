import React from 'react';
import global from '../../../Global/Modules/Global.module.css';
import styles from './StudentPage.module.css';
import {Container} from "react-bootstrap";
import {WelcomeSection} from "../../../Global/Components/Sections/WelcomeSection/WelcomeSection";
import {DescriptionCard} from "../../../Global/Components/DescriptionCard/DescriptionCard";

const StudentPage = () => {
    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
                <WelcomeSection pageName='student' addBlock='progressBar'/>
            </div>

            <div className={global.GreyWrapper}>
                <div className={global.Wrapper}>

                    <div className={global.RowBlock}>
                        <div className={styles.col}>
                            <DescriptionCard type='form'/> {/* user card by type form (form has input changes)*/}

                            {/* person information*/}
                        </div>
                        <div className={styles.col}>
                            {/* current lesson card*/}
                        </div>
                    </div>

                    {/* previous lessons*/}

                </div>
            </div>
        </Container>
    );
};

export default StudentPage;
