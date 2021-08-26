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
import {OrangeBtn} from "../../../../Global/Components/Button/OrangeBtn/OrangeBtn";

import images from '../../../../Assets/background/main.png'

import {useSelector} from "react-redux";
import {ModalWindow} from "../../../../Global/Components/ModalWindow/ModalWindow";
import {GreenBtn} from "../../../../Global/Components/Button/GreenBtn/GreenBtn";



const StudentPageBlock = (props) => {

    const classes = useSelector(state => state.classStates.classes);
    const subjects = useSelector(state => state.subjectStates.subjects);
    const currentLesson = useSelector(state => state.lessonStates.lesson);

    const [data, setData] = useState({
        class: {id: '', title: ''},
        email: '',
        firstName: '',
        id: '',
        password: '',
        position: '',
        rating: 0,
        surName: ''
    });
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

    const [statusPopUp, setStatusPopUp] = useState(false)    ;
    const [modalWindowData, setModalWindowData] = useState({
        title: '',
        text: '',
        type: ''
    });


    let sum = 0;
    useEffect(() => {
        if( Object.keys(props.data).length !== 0 ){
            setData(props.data);

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
        if( Object.keys(currentClass).length !== 0){
            subjects.map((elem) => {
                if(currentClass.subjects.id === elem.id){
                    setSubjects(elem);
                }
            });
        }
    }, [currentClass]);


    const deleteAccount = (data) => {
       console.log(data)
    }

    const changeStatusPopUp = (value, title, text, type) => {
        setStatusPopUp(value);
        setModalWindowData({
            title: title,
            text: text,
            type: type
        })
    }

    const confirmData = () => {
        console.log('confirmData')
        setStatusPopUp(false);
    }

    return (
        <Container fluid className={global.ContainerFluid}>

            {(statusPopUp)?(<ModalWindow show={statusPopUp} hide={() => {changeStatusPopUp(false)}} confirmData={confirmData} data={modalWindowData}/>):null}

            <div className={global.Wrapper}>
                <div className={global.RowBlock}>
                    <div className={styles.col}>

                        <div className={styles.tableBlock}>
                            <DescriptionCard type='form' title={userName} txt={`${data.rating} points - ${averageNumber} points avg at class`}/>
                        </div>

                        <div className={styles.tableBlock}>
                            <div className={styles.tableBlock}>

                                <div className={styles.info} style={{margin: '20px 0'}}>
                                    <div style={{margin: '0 0 20px'}}>
                                        <TitleH5 title='Personal info & progress :' color='black' weight='900'/>
                                    </div>
                                    <OrangeBtn title='Delete account' color='#F77D48'
                                               clicked={() => {changeStatusPopUp(true,'Deleting a user',`Confirm the deletion of ${userName}. All progress will be lost.`,'user')}}
                                    />
                                </div>

                                <Table2Column first='class' second={data.class.title}/>
                                <Table2Column first='Points' second={data.rating}/>
                                <Table2Column first='Avg points at class' second={averageNumber}/>
                            </div>
                        </div>
                    </div>


                    <div className={styles.col}>
                        <div className={styles.tableBlock}>
                            <div className={global.WhiteBlock}>
                                <TitleH4 title='Current lesson:'/>
                                <div className={styles.block}>
                                    <div className={styles.col} style={{margin: '10px 0 0'}}>
                                        <TxtAdditionalGrey txt='teacher'/>
                                        <TitleH5 title={subject.name} color='black' weight='900'/>
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
                                    <CourseCard img={images} title={currentLesson.required.theme}/>
                                </div>

                                <div className={styles.container}>
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
