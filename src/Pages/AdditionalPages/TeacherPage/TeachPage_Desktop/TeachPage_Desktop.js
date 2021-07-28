import React from 'react';
import global from '../../../../Global/Modules/Global.module.css';
import styles from './TeachPage_Desktop.module.css';

import {Container} from "react-bootstrap";
import {DescriptionCard} from "../../../../Global/Components/DescriptionCard/DescriptionCard";
import {TitleH4} from "../../../../Global/Components/Texts/Headers/TitleH4/TitleH4";
import {TitleH5} from "../../../../Global/Components/Texts/Headers/TitleH5/TitleH5";
import {TxtAdditionalGrey} from "../../../../Global/Components/Texts/TextDescription/TxtAdditionalGrey/TxtAdditionalGrey";
import {CourseCard} from "../../../../Global/Components/CourseCard/CourseCard";
import {TitleH6} from "../../../../Global/Components/Texts/Headers/TitleH6/TitleH6";
import {Header} from "../../../../Global/Components/Tables/Header/Header";
import {Table2Column} from "../../../../Global/Components/Tables/Table2Column/Table2Column";
import {TableRowWithBtn} from "../../../../Global/Components/Tables/TableRowWithBtn/TableRowWithBtn";
import {TextBar} from "../../../../Global/Components/ProgressBar/TextBar/TextBar";
import {LineBar} from "../../../../Global/Components/ProgressBar/LineBar/LineBar";
import {GreenBtn} from "../../../../Global/Components/Button/GreenBtn/GreenBtn";
import {OrangeBtn} from "../../../../Global/Components/Button/OrangeBtn/OrangeBtn";
import {Table2ColProgress} from "../../../../Global/Components/Tables/Table2ColProgress/Table2ColProgress";
import images from "../../../../Assets/background/main.png";

const TeachPage_Desktop = () => {
    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
                <div className={global.RowBlock}>

                    <div className={styles.col}>
                        <div>
                            <DescriptionCard type='form' title='Teacher' txt='Subject: World Literature'/> {/*user card by type form (form has input changes)*/}
                        </div>

                        {/* person info - only second parameter should change*/}
                        <div className={styles.tableBlock}>
                            <Header title='Personal info & progress' color='#009DB3' weight='700'/>
                            <Table2Column first='Lessons' second='53 lessons'/>
                        </div>

                        <div className={styles.tableBlock}>
                            <Header title='+ Create new lesson' color='#F77D48' weight='700'/>
                            <TableRowWithBtn title='Initial (2)'/>
                            <TableRowWithBtn title='Active (2)'/>
                            <TableRowWithBtn title='Closed (2)'/>
                        </div>

                    </div>

                    <div className={styles.col}>
                        <div className={styles.block}>
                            <div style={{margin: '0 0 50px '}}>
                                <TitleH5 title='Classes progress:' color='black' weight='900'/>
                            </div>

                            <div className={styles.currentLesson}>
                                <div className={styles.card}>
                                    <div>
                                        <img src={images} alt="Norway" className={styles.images}/>
                                    </div>
                                    <div>
                                        <LineBar currentCount='17' maxCount='34'/>
                                        <TextBar flag='DescriptionCard' currentCount='17' text={`${17} of ${34} students completed the task`}/>
                                    </div>

                                    <TitleH6 title='Odyssey of Homer'/>
                                    <div className={styles.btnBlock}>
                                        <GreenBtn title='View lesson'/>
                                        <OrangeBtn title='Edit lesson'/>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.header}>
                                <Header title='View All lesson' color='#009DB3' weight='700'/>
                            </div>
                        </div>

                        <div className={styles.block}>
                            <div style={{margin: '0 0 50px '}}>
                                <TitleH5 title='Classes progress:' color='black' weight='900'/>
                            </div>

                            <div>
                                <Table2ColProgress class='5A' currentCount='10' maxCount='36'/>
                                <Table2ColProgress class='5A' currentCount='15' maxCount='30'/>
                                <Table2ColProgress class='5A' currentCount='10' maxCount='36'/>
                                <Table2ColProgress class='5A' currentCount='15' maxCount='30'/>
                                <Table2ColProgress class='5A' currentCount='34' maxCount='36'/>
                            </div>

                            <div className={styles.header}>
                                <Header title='Students List' color='#F77D48' weight='700'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default TeachPage_Desktop;
