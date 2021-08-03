import React, {useEffect, useState} from 'react';
import global from '../../../../Global/Modules/Global.module.css';
import styles from './TeachPageBlock.module.css';

import {Container} from "react-bootstrap";
import {DescriptionCard} from "../../../../Global/Components/DescriptionCard/DescriptionCard";
import {TitleH5} from "../../../../Global/Components/Texts/Headers/TitleH5/TitleH5";
import {TitleH6} from "../../../../Global/Components/Texts/Headers/TitleH6/TitleH6";
import {Header} from "../../../../Global/Components/Tables/Header/Header";
import {Table2Column} from "../../../../Global/Components/Tables/Table2Column/Table2Column";
import {TableRowWithBtn} from "../../../../Global/Components/Tables/TableRowWithBtn/TableRowWithBtn";
import {TextBar} from "../../../../Global/Components/ProgressBar/TextBar/TextBar";
import {LineBar} from "../../../../Global/Components/ProgressBar/LineBar/LineBar";
import {Table2ColProgress} from "../../../../Global/Components/Tables/Table2ColProgress/Table2ColProgress";
import {BorderBtn} from "../../../../Global/Components/Button/BorderBtn/BorderBtn";

import images from "../../../../Assets/background/main.png";


const TeachPageBlock = (props) => {

    const userName = `${props.data.firstName} ${props.data.surName}`;
    let savedLes, activeLes, closedLes = [];

    useEffect(() => {
       /* props.data.map((item) => {
            item.map((element) => {
               if(element.status === 'saved'){
                   savedLes.push(element);
               }else if(element.status === 'active'){
                   activeLes.push(element);
               }else{
                   closedLes.push(element);
               }
            });
        });*/
    }, []);



    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
                <div className={global.RowBlock}>

                    <div className={styles.col}>
                        <div className={styles.tableBlock}>
                            <DescriptionCard type='form' title={userName} txt={`Subject: ${props.data.subjectTitle}`}/> {/*user card by type form (form has input changes)*/}
                        </div>

                        {/* person info - only second parameter should change*/}
                        <div className={styles.tableBlock}>
                            <Header title='Personal info & progress' color='#009DB3' weight='700' radius='0.25rem'/>
                            <Table2Column first='Lessons' second= {`${props.data.lessons.length} lessons`}/>
                        </div>

                        <div className={styles.tableBlock}>
                            <Header title='+ Create new lesson' color='#F77D48' weight='700' radius='0.25rem'/>
                            <TableRowWithBtn title='Initial (2)'/>
                            <TableRowWithBtn title='Active (2)'/>
                            <TableRowWithBtn title='Closed (2)'/>
                        </div>
                    </div>


                    <div className={styles.col}>
                        <div className={styles.tableBlock}>
                            <TitleH5 title='Current lesson:' color='black' weight='900'/>
                        </div>

                        <div className={styles.tableBlock}>
                            <div className={styles.currentLesson}>
                                <div className={styles.card}>
                                    <div>
                                        <img src={images} alt="Norway" className={styles.images}/>
                                    </div>
                                    <div style={{margin: '0 0 10px '}}>
                                        <LineBar currentCount='17' maxCount='34'/>
                                        <TextBar flag='DescriptionCard' currentCount='17' text={`${17} of ${34} students completed the task`}/>
                                    </div>

                                    <TitleH6 title='Odyssey of Homer'/>
                                    <div className={styles.btnBlock}>
                                        <BorderBtn title='View lesson' color='#009DB3'/>
                                        <BorderBtn title='Edit lesson' color='#F77D48'/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.tableBlock}>
                            <Header title='View All lesson' color='#009DB3' weight='700' radius='0.25rem'/>
                        </div>
                    </div>


                    <div className={styles.col}>
                        <div className={styles.tableBlock}>
                            <TitleH5 title='Classes progress:' color='black' weight='900'/>
                        </div>

                        <div className={styles.tableBlock}>
                                <Table2ColProgress class='5A' currentCount='10' maxCount='36'/>
                                <Table2ColProgress class='5A' currentCount='15' maxCount='30'/>
                                <Table2ColProgress class='5A' currentCount='10' maxCount='36'/>
                        </div>

                        <div className={styles.tableBlock}>
                            <Header title='Students List' color='#F77D48' weight='700' radius='0.25rem'/>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default TeachPageBlock;
