import React from 'react';
import global from '../../../Global/Modules/Global.module.css';
import {Container} from "react-bootstrap";
import {WelcomeSection} from "../../../Global/Components/Sections/WelcomeSection/WelcomeSection";
import styles from "../StudentPage/StudentPage.module.css";
import {DescriptionCard} from "../../../Global/Components/DescriptionCard/DescriptionCard";

const TeacherPage = () => {
    return (
        <Container fluid className={global.Wrapper}>
            <WelcomeSection  pageName='teacher' addBlock='progressBar'/>

            <div className={global.GreyWrapper}>
                <div className={global.Wrapper}>

                    <div className={global.RowBlock}>
                        <div className={styles.col}>
                            <DescriptionCard type='form'/> {/* user card by type form (form has input changes)*/}

                            {/* lesson information*/}
                        </div>
                        <div className={styles.col}>
                            {/* current lesson card*/}
                        </div>

                        <div className={styles.col}>
                            {/* current classes progress*/}
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default TeacherPage;
