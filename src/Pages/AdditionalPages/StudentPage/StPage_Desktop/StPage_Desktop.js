import React from 'react';
import global from '../../../../Global/Modules/Global.module.css';
import styles from './StPage_Desktop.module.css';

import {Container} from "react-bootstrap";
import {DescriptionCard} from "../../../../Global/Components/DescriptionCard/DescriptionCard";
import {TitleH4} from "../../../../Global/Components/Texts/Headers/TitleH4/TitleH4";
import {TitleH5} from "../../../../Global/Components/Texts/Headers/TitleH5/TitleH5";
import {TxtAdditionalGrey} from "../../../../Global/Components/Texts/TextDescription/TxtAdditionalGrey/TxtAdditionalGrey";
import {CourseCard} from "../../../../Global/Components/CourseCard/CourseCard";
import {TitleH6} from "../../../../Global/Components/Texts/Headers/TitleH6/TitleH6";
import {Header} from "../../../../Global/Components/Tables/Header/Header";
import {Table2Column} from "../../../../Global/Components/Tables/Table2Column/Table2Column";

const StPage_Desktop = () => {
    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
                    <div className={global.RowBlock}>
                        <div className={styles.col}>
                            <DescriptionCard type='form'/>  {/*user card by type form (form has input changes)*/}
                        </div>

                        <div className={styles.col}>
                            <div className={global.WhiteBlock}>
                                <TitleH4 title='Current lesson:'/>
                                <div className={styles.block}>
                                    <div className={styles.col}> {/*person info*/}
                                        <TxtAdditionalGrey txt='teacher'/>
                                        <TitleH5 title='John Smith' color='black' weight='900'/>
                                    </div>
                                    <div className={styles.col}>
                                        <TxtAdditionalGrey txt='subject'/>
                                        <TitleH5 title='World literature' color='#F77D48' weight='900'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={global.Wrapper}>
                    <div className={global.RowBlock}>

                        <div className={styles.col}>
                            {/* person info - only second parameter should change*/}
                            <div className={styles.tableBlock}>
                                <Header title='Personal info & progress'/>
                                <Table2Column first='Teacher' second='John Smith'/>
                                <Table2Column first='Class' second='5B'/>
                                <Table2Column first='Points' second='56'/>
                                <Table2Column first='Avg points at class' second='45'/>
                            </div>
                        </div>

                        <div className={styles.col}>
                            <CourseCard/>
                            <div className={styles.descBlock}>
                                <div className={styles.container}>
                                    {/*lesson info*/}
                                    <TitleH6 title='Lesson will end in:'/>
                                    <TxtAdditionalGrey txt='02:13:59'/>
                                </div>
                                <div className={styles.container}>
                                    <TitleH6 title='Step 2 : '/>
                                    <TxtAdditionalGrey txt='Answer another students questions'/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
        </Container>
    );
};

export default StPage_Desktop;
