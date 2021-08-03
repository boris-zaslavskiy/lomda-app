import React from 'react';
import global from '../../../Global/Modules/Global.module.css';

import {Container} from "react-bootstrap";
import {WelcomeSection} from "../../../Global/Components/Sections/WelcomeSection/WelcomeSection";
import StudentPageBlock from "./StudentPageBlock/StudentPageBlock";
import PreviousLessons from "../PreviousLessons/PreviousLessons";
import QuestionAnswersPage from "../QuestionAnswersPage/QuestionAnswersPage";
import CatalogLessonPage from "../CatalogLessonPage/CatalogLessonPage";
import StudentsListPage from "../StudentsListPage/StudentsListPage";
import AnsweringQuestionsPage from "../AnsweringQuestionsPage/AnsweringQuestionsPage";


const StudentPage = () => {

    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
                <WelcomeSection pageName='student' addBlock='progressBar'/>
            </div>
            <div className={global.GreyWrapper}>
                <StudentPageBlock/>
            </div>

            <div className={global.Wrapper}>
                <div className={global.RowBlock}>
                    <PreviousLessons/>
                    <StudentsListPage/>
                </div>
            </div>
        </Container>
    );
};

export default StudentPage;
