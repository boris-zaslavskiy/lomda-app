import React, {useEffect, useState} from 'react';
import global from '../../../../Global/Modules/Global.module.css';
import styles from './StudentPageBlock.module.css';

import {Container} from "react-bootstrap";
import {DescriptionCard} from "../../../../Global/Components/DescriptionCard/DescriptionCard";
import {TitleH4} from "../../../../Global/Components/Texts/Headers/TitleH4/TitleH4";
import {TitleH5} from "../../../../Global/Components/Texts/Headers/TitleH5/TitleH5";
import {TitleH6} from "../../../../Global/Components/Texts/Headers/TitleH6/TitleH6";
import {TxtAdditionalGrey} from "../../../../Global/Components/Texts/TextDescription/TxtAdditionalGrey/TxtAdditionalGrey";
import {CourseCard} from "../../../../Global/Components/CourseCard/CourseCard";
import {Table2Column} from "../../../../Global/Components/Tables/Table2Column/Table2Column";

import images from '../../../../Assets/background/main.png'
import SearchInput from "../../../../Global/Components/SearchInput/SearchInput";
import {useSelector} from "react-redux";
import {subjects} from "../../../../Utils/constants";


const StudentPageBlock = (props) => {

    const classes = useSelector(state => state.classStates.classes);
    const [currentClass, setCurrentClass] = useState({});
    const [subject, setSubjects] = useState({
        id: '',
        idCurrentLesson: '',
        idTeacher: '',
        nameTeacher: '',
        title: ''
    });

    const userName = `${props.data.firstName} ${props.data.surName}`;
    const [averageNumber, setAverageNumber] = useState(0);



    let sum = 0;
    useEffect(() => {
        if( Object.keys(props.data).length !== 0 ){
            props.students.map((item) => {
               sum += item.rating;
            });
            setAverageNumber(Math.round(sum/props.students.length));

            classes.map((item) => {
                if(item.id === props.data.class.id){
                    setCurrentClass(item);
                }
            });
        }
    }, [props.data]);


    useEffect(() => {
        if(Object.keys(currentClass).length !== 0){
            currentClass.subjects.map((item) => {
                if(item.id === '100L'){
                    setSubjects(item);
                }
            });
        }
    }, [currentClass]);


    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
                <div className={global.RowBlock}>
                    <div className={styles.col}>

                        <div className={styles.tableBlock}>
                            <DescriptionCard type='form' title={userName} txt={`${props.data.rating} points - ${averageNumber} points avg at class`}/>
                        </div>

                        <div className={styles.tableBlock}>
                            <div className={styles.tableBlock}>
                              {/*  <Header title='Personal info & progress' color='#009DB3' weight='700' radius='0.25rem'/>*/}
                                <SearchInput data={subjects} title='Choose a Subject'/>
                                <Table2Column first='Teacher' second={subject.nameTeacher}/>
                                <Table2Column first='Points' second={props.data.rating}/>
                                <Table2Column first='Avg points at class' second={averageNumber}/>
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
                                        <TitleH5 title={subject.nameTeacher} color='black' weight='900'/>
                                    </div>
                                    <div className={styles.col} style={{margin: '10px 0 0'}}>
                                        <TxtAdditionalGrey txt='subject'/>
                                        <TitleH5 title={subject.title} color='#F77D48' weight='900'/>
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
