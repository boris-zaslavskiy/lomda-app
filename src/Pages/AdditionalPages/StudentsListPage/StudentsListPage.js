import React from 'react';
import global from '../../../Global/Modules/Global.module.css';
import styles from './StudentsListPage.module.css';
import {Container} from "react-bootstrap";

import {DescriptionCard} from "../../../Global/Components/DescriptionCard/DescriptionCard";
import {TitleH2} from "../../../Global/Components/Texts/Headers/TitleH2/TitleH2";

const StudentsListPage = () => {
    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
               <TitleH2 titleType='h2' title='Students list'/>
                <div className={global.RowBlock}>
                    <div className={styles.col}>
                        <DescriptionCard type='user'/>
                    </div>
                    <div className={styles.col}>
                        {/* btn add new class */}
                    </div>
                </div>
            </div>

            <div className={global.GreyWrapper}>
                <div className={global.Wrapper}>

                    <div className={global.RowBlock}>
                        {/* first input */}
                        {/* second input*/}
                    </div>

                    <div className={global.RowBlock}>
                       {/* tabla + accordion */}
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default StudentsListPage;
