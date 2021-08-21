import React from 'react';
import styles from './AddStudentsPage.module.css';
import global from '../../../Global/Modules/Global.module.css';
import {Container} from "react-bootstrap";

import {DescriptionCard} from "../../../Global/Components/DescriptionCard/DescriptionCard";



const AddStudentsPage = () => {


    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
                <div className={global.RowBlock}>

                    <div className={styles.col}>
                        <DescriptionCard type='user' title='John Smith' txt='Literature' url=''/>
                    </div>
                    <div>
                        <div className={styles.col}>
                            {/*col 1*/}
                        </div>
                        <div className={styles.col}>
                            {/*col 2*/}
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default AddStudentsPage;
