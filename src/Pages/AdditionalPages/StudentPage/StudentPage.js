import React, {useEffect, useState} from 'react';
import global from '../../../Global/Modules/Global.module.css';

import {Container} from "react-bootstrap";
import {WelcomeSection} from "../../../Global/Components/Sections/WelcomeSection/WelcomeSection";
import StudentPageBlock from "./StudentPageBlock/StudentPageBlock";
import PreviousLessons from "../PreviousLessons/PreviousLessons";
import StudentsListPage from "../StudentsListPage/StudentsListPage";
import {useSelector} from "react-redux";
import AnsweringQuestionsPage from "../AnsweringQuestionsPage/AnsweringQuestionsPage";
import QuestionCard from "../../../Global/Components/QuestionCard/QuestionCard";
import {questions, teacherQuestions} from "../../../Utils/constants";
import QuestionAnswersPage from "../QuestionAnswersPage/QuestionAnswersPage";


const StudentPage = () => {

    const students = useSelector(state => state.studentStates.students);
    const [currentStudent, setCurrentStudent] = useState({});

    useEffect(() => {
        let currentUrlArr = window.location.pathname.split("/");
        const studentId = currentUrlArr[currentUrlArr.length - 1];

        students.map((item) => {
            if(item.id === studentId){
                setCurrentStudent(item)
            }
        });
    }, []);

    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
                <WelcomeSection pageName='student' data={currentStudent} addBlock='progressBar'/>
            </div>
            <div className={global.GreyWrapper}>
                <StudentPageBlock data={currentStudent} students={students}/>
            </div>

            <div className={global.Wrapper}>
                <div className={global.RowBlock}>
                    <PreviousLessons/>
                    <AnsweringQuestionsPage/>
                </div>
            </div>
        </Container>
    );
};

export default StudentPage;
