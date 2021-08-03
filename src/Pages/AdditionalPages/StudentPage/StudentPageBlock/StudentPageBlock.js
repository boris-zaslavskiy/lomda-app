import React from 'react';
import global from '../../../../Global/Modules/Global.module.css';
import styles from './StudentPageBlock.module.css';

import {Container} from "react-bootstrap";
import {DescriptionCard} from "../../../../Global/Components/DescriptionCard/DescriptionCard";
import {TitleH4} from "../../../../Global/Components/Texts/Headers/TitleH4/TitleH4";
import {TitleH5} from "../../../../Global/Components/Texts/Headers/TitleH5/TitleH5";
import {TitleH6} from "../../../../Global/Components/Texts/Headers/TitleH6/TitleH6";
import {TxtAdditionalGrey} from "../../../../Global/Components/Texts/TextDescription/TxtAdditionalGrey/TxtAdditionalGrey";
import {CourseCard} from "../../../../Global/Components/CourseCard/CourseCard";
import {Header} from "../../../../Global/Components/Tables/Header/Header";
import {Table2Column} from "../../../../Global/Components/Tables/Table2Column/Table2Column";

import images from '../../../../Assets/background/main.png'


const StudentPageBlock = () => {
    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
                <div className={global.RowBlock}>

                    <div className={styles.col}>
                        <div className={styles.tableBlock}>
                            <DescriptionCard type='form' title='Student' txt='56 points - 45 points avg at class'/>  {/*user card by type form (form has input changes)*/}
                        </div>

                        <div className={styles.tableBlock}>
                            {/*person info - only second parameter should change*/}
                            <div className={styles.tableBlock}>
                                <Header title='Personal info & progress' color='#009DB3' weight='700' radius='0.25rem'/>
                                <Table2Column first='Teacher' second='John Smith'/>
                                <Table2Column first='Class' second='5B'/>
                                <Table2Column first='Points' second='56'/>
                                <Table2Column first='Avg points at class' second='45'/>
                            </div>
                        </div>
                    </div>


                    <div className={styles.col}>
                        <div className={styles.tableBlock}>
                            <div className={global.WhiteBlock}>
                                <TitleH4 title='Current lesson:'/>
                                <div className={styles.block}>
                                    <div className={styles.col} style={{margin: '10px 0 0'}}>{/* person info*/}
                                        <TxtAdditionalGrey txt='teacher'/>
                                        <TitleH5 title='John Smith' color='black' weight='900'/>
                                    </div>
                                    <div className={styles.col} style={{margin: '10px 0 0'}}>
                                        <TxtAdditionalGrey txt='subject'/>
                                        <TitleH5 title='World literature' color='#F77D48' weight='900'/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.tableBlock}>
                            <div className={styles.info}>
                                <div className={styles.container}>
                                    <CourseCard img={images} title='test1'/>
                                </div>

                                <div className={styles.container}>
                                    {/*lesson info*/}
                                    <div>
                                        <TxtAdditionalGrey txt='Lesson will end in:'/>
                                        <TitleH6 title='02:13:59' color='black' weight='900'/>
                                    </div>
                                    <div style={{margin: '50px 0 0'}}>
                                        <TxtAdditionalGrey txt='Step 2 :'/>
                                        <TitleH6 title='Answer another students questions' color='black' weight='900'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default StudentPageBlock;
