import React, {useEffect, useState} from 'react';
import global from '../../../Global/Modules/Global.module.css';
import styles from './GeneralInformationPage.module.css';
import {Container} from "react-bootstrap";
import {DescriptionCard} from "../../../Global/Components/DescriptionCard/DescriptionCard";
import {TitleH2} from "../../../Global/Components/Texts/Headers/TitleH2/TitleH2";
import {useDispatch, useSelector} from "react-redux";
import {Table3Column} from "../../../Global/Components/Tables/Table3Column/Table3Column";


const GeneralInformationPage = () => {

    const dispatch = useDispatch(); //not remember remove
    const arrayClasses = useSelector(state => state.classStates.classes);
    const [studentsFirstTaskCompleted, setStudentsFirstTaskCompleted] = useState([]);
    const [studentsFirstTaskNotCompleted, setStudentsFirstTaskNotCompleted] = useState([]);
    const [studentsSecondTaskCompleted, setStudentsSecondTaskCompleted] = useState([]);
    const [studentsSecondTaskNotCompleted, setStudentsSecondTaskNotCompleted] = useState([]);


    let currentUrlArr = window.location.pathname.split("/");
    const currentClassId = currentUrlArr[currentUrlArr.length - 1];


    useEffect(() => {
        getStudentsFirstTaskCompleted();
        getStudentsFirstTaskNotCompleted();
        getStudentsSecondTaskCompleted();
        getStudentsSecondTaskNotCompleted();
    }, []);


    const getStudentsFirstTaskCompleted = () => {
        let firstTaskTrue = [];
        arrayClasses.map((elem) => {
            if(elem.currentLesson === currentClassId){
                elem.students.map((item) => {
                    if(item.firstTask === true) {
                        firstTaskTrue.push(item);
                    }
                });
            }
        });
        setStudentsFirstTaskCompleted(firstTaskTrue);
    };


    const getStudentsFirstTaskNotCompleted = () => {
        let firstTaskFalse = [];
        arrayClasses.map((elem) => {
            if(elem.currentLesson === currentClassId){
                elem.students.map((item) => {
                    if(item.firstTask === false){
                        firstTaskFalse.push(item);
                    }
                });
            }
        });
        setStudentsFirstTaskNotCompleted(firstTaskFalse);
    };

    const getStudentsSecondTaskCompleted = () => {
        let secondTaskTrue = [];
        arrayClasses.map((elem) => {
            if(elem.currentLesson === currentClassId){
                elem.students.map((item) => {
                    if(item.secondTask === true){
                        secondTaskTrue.push(item);
                    }
                });
            }
        });
        setStudentsSecondTaskCompleted(secondTaskTrue);
    };

    const getStudentsSecondTaskNotCompleted = () => {
        let secondTaskFalse = [];
        arrayClasses.map((elem) => {
            if(elem.currentLesson === currentClassId){
                elem.students.map((item) => {
                    if(item.secondTask === false){
                        secondTaskFalse.push(item);
                    }
                });
            }
        });
        setStudentsSecondTaskNotCompleted(secondTaskFalse);
    };



    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
               <TitleH2 titleType='h2' title='General Information'/>
                <div className={global.RowBlock}>
                    <div className={styles.col}>
                        <DescriptionCard type='user' title='Teacher' txt='Subject: World Literature' url='teacher'/>
                    </div>
                </div>
            </div>

            <div className={global.GreyWrapper}>
                <div className={global.Wrapper}>

                    <div className={global.RowBlock}>
                        <Table3Column title='Students who accomplished the first task:'
                                      students={studentsFirstTaskCompleted}/>
                    </div>

                    <div className={global.RowBlock}>
                        <Table3Column title='Students who didn’t accomplished the first task:'
                                      students = {studentsFirstTaskNotCompleted}/>
                    </div>

                    <div className={global.RowBlock}>
                        <Table3Column title='Students who accomplished the second task (Evaluation):'
                                      students = {studentsSecondTaskCompleted}/>
                    </div>

                    <div className={global.RowBlock}>
                        <Table3Column title='Students who didn’t accomplished the second task (Evaluation):'
                                      students = {studentsSecondTaskNotCompleted}/>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default GeneralInformationPage;
