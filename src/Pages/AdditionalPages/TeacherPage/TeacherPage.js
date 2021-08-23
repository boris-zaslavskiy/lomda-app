import React, {useEffect, useState} from 'react';
import axios from "axios";
import global from '../../../Global/Modules/Global.module.css';
import {Container} from "react-bootstrap";

import {WelcomeSection} from "../../../Global/Components/Sections/WelcomeSection/WelcomeSection";
import TeachPageBlock from "./TeachPageBlock/TeachPageBlock";
import {useDispatch, useSelector} from "react-redux";
import {getDataById} from "../../../Store/API/API";



const TeacherPage = () => {

    const dispatch = useDispatch();
    const teachers = useSelector(state => state.teacherStates.teachers);
    const [currentTeacher, setCurrentTeacher] = useState({});



//test------------------------- from Api redux
    useEffect(() => {
        const type = 'teacher';
        const url = 'https://jsonplaceholder.typicode.com/users';
        const userId = 2;
        dispatch(getDataById(type,url,userId));
    }, []);
//-----------------------------



    useEffect(() => {
        let currentUrlArr = window.location.pathname.split("/");
        const teacherId = currentUrlArr[currentUrlArr.length - 1];

        teachers.map((item) => {
            if(item.id === teacherId){
                setCurrentTeacher(item)
            }
        });
    }, []);
//console.log(currentTeacher)

    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
                <WelcomeSection pageName='teacher' data={currentTeacher} addBlock='progressBar'/>
            </div>

            <div className={global.GreyWrapper}>
                <TeachPageBlock data={currentTeacher}/>
            </div>
        </Container>
    );
};

export default TeacherPage;
