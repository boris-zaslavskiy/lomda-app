import React, {useEffect, useState} from 'react';
import global from '../../../Global/Modules/Global.module.css';
import {Container} from "react-bootstrap";
import {WelcomeSection} from "../../../Global/Components/Sections/WelcomeSection/WelcomeSection";
import TeachPageBlock from "./TeachPageBlock/TeachPageBlock";

import {useSelector} from "react-redux";


const TeacherPage = () => {

    const teachers = useSelector(state => state.teacherStates.teachers);
    const [currentTeacher, setCurrentTeacher] = useState({});


    useEffect(() => {
        let currentUrlArr = window.location.pathname.split("/");
        const teacherId = currentUrlArr[currentUrlArr.length - 1];

        teachers.map((item) => {
            if(item.id === teacherId){
                setCurrentTeacher(item)
            }
        });
    }, []);


console.log(currentTeacher)

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
