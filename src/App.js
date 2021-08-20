import React from "react";
import './App.css';
import {Redirect, Route, Switch} from "react-router";

import Main from "./Pages/Main/Main";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Contacts from "./Pages/Contacts/Contacts";
import Courses from "./Pages/Courses/Courses";

import Header from "./Global/Navigation/Header/Header";
import Footer from "./Global/Navigation/Footer/Footer";

import TeacherPage from "./Pages/AdditionalPages/TeacherPage/TeacherPage";
import StudentPage from "./Pages/AdditionalPages/StudentPage/StudentPage";
import StudentsListPage from "./Pages/AdditionalPages/StudentsListPage/StudentsListPage";
import CreateLessonPage from "./Pages/AdditionalPages/CreateLessonPage/CreateLessonPage";
import CurrentLessonPage from "./Pages/AdditionalPages/CurrentLessonPage/CurrentLessonPage";
import QuestionAnswersPage from "./Pages/AdditionalPages/QuestionAnswersPage/QuestionAnswersPage";
import GeneralInformationPage from "./Pages/AdditionalPages/GeneralInformationPage/GeneralInformationPage";
import CatalogLessonPage from "./Pages/AdditionalPages/CatalogLessonPage/CatalogLessonPage";



function App() {
    return (
        <div>
            <Header/>
            <div className="App">
                <Switch>
                    <Route path={'/about-us'} component={AboutUs}/>
                    <Route path={'/contacts'} component={Contacts}/>
                    <Route path={'/student/:studentId'} component={StudentPage}/>
                    <Route path={'/teacher/:teacherId'} component={TeacherPage}/>
                    <Route path={'/studentsList'} component={StudentsListPage}/>
                    <Route path={'/createLesson'} component={CreateLessonPage}/>
                    <Route path={'/currentLesson'} component={CurrentLessonPage}/>
                    <Route path={'/questionAnswers'} component={QuestionAnswersPage}/>
                    <Route path={'/generalInfo/:classId'} component={GeneralInformationPage}/>
                    <Route path={'/catalog'} component={CatalogLessonPage}/>
                    <Redirect exact from='/' to='/login' />
                    <Route path={'/'} component={Main}/>
                </Switch>
            </div>

            <Footer/>
        </div>
    );
}

export default App;
