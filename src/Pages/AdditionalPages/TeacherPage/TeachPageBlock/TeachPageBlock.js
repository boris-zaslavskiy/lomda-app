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
import {Link} from "react-router-dom";


const TeachPageBlock = (props) => {

    const userName = `${props.data.firstName} ${props.data.surName}`;
    const [lessonsNumber, setLessonsNumber] = useState({
        allLes: 0,
        savedLes: 0,
        activeLes: 0,
        closedLes: 0
    });

    useEffect(() => {
        if(Object.keys(props.data).length !== 0){
            let allLes = props.data.lessons.length;
            let savedLes = [];
            let activeLes = [];
            let closedLes = [];

            props.data.lessons.map((item) => {
                if(item.status === 'saved'){
                    savedLes.push(item);
                }else if(item.status === 'active'){
                    activeLes.push(item);
                }else{
                    closedLes.push(item);
                }
            });

            setLessonsNumber({
                allLes: allLes,
                savedLes: savedLes.length,
                activeLes: activeLes.length,
                closedLes: closedLes.length
            });
        }
    }, [props.data]);





    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
                <div className={global.RowBlock}>

                    <div className={styles.col}>
                        <div className={styles.tableBlock}>
                            <DescriptionCard type='form' title={userName} txt={`Subject: ${props.data.subjectTitle}`}/> {/*user card by type form (form has input changes)*/}
                        </div>

                        <div className={styles.tableBlock}>
                            <div style={{margin: '20px 0'}}>
                                <TitleH5 title='Personal info & progress :' color='black' weight='900'/>
                            </div>
                            <Table2Column first='Lessons' second= {`${lessonsNumber.allLes} lessons`}/> {/* props.data.lessons.length - doesn't work .... */}
                        </div>

                        <div className={styles.tableBlock}>
                            <Link to={'/createLesson'} className={global.Link}>
                                <Header title='+ Create new lesson' color='#F77D48' weight='700' radius='0.25rem'/>
                            </Link>
                            <TableRowWithBtn title={`Initial (${lessonsNumber.savedLes})`}/>
                            <TableRowWithBtn title={`Active (${lessonsNumber.activeLes})`}/>
                            <TableRowWithBtn title={`Closed (${lessonsNumber.closedLes})`}/>
                        </div>
                    </div>


                    <div className={styles.col}>
                        <div className={styles.tableBlock}>
                            <TitleH5 title='Current lesson :' color='black' weight='900'/>
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
                                        {/*<BorderBtn title='View lesson' color='#009DB3'/>*/}
                                        <BorderBtn title='Edit lesson' color='#F77D48'/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.tableBlock}>
                            <Link to={'/catalog'} className={global.Link}>
                                <Header title='View All lesson' color='#009DB3' weight='700' radius='0.25rem'/>
                            </Link>
                        </div>
                    </div>


                    <div className={styles.col}>
                        <div className={styles.tableBlock}>
                            <TitleH5 title='Classes progress :' color='black' weight='900'/>
                        </div>

                        <div className={styles.tableBlock}>
                                <Table2ColProgress class='5A' currentCount='10' maxCount='36'/>
                                <Table2ColProgress class='5A' currentCount='15' maxCount='30'/>
                                <Table2ColProgress class='5A' currentCount='10' maxCount='36'/>
                        </div>

                        <div className={styles.tableBlock}>
                            <Link to={'/studentsList'} className={global.Link}>
                                <Header title='Students List' color='#F77D48' weight='700' radius='0.25rem'/>
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default TeachPageBlock;
