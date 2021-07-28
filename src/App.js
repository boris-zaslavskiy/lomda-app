import React from "react";
import './App.css';
import {Route, Switch} from "react-router";

import Main from "./Pages/Main/Main";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Contacts from "./Pages/Contacts/Contacts";
import Courses from "./Pages/Courses/Courses";

import Header from "./Global/Navigation/Header/Header";
import Footer from "./Global/Navigation/Footer/Footer";

import StudentPage from "./Pages/AdditionalPages/StudentPage/StudentPage";
import StudentsListPage from "./Pages/AdditionalPages/StudentsListPage/StudentsListPage";
import CreateLessonPage from "./Pages/AdditionalPages/CreateLessonPage/CreateLessonPage";
import QuestionAnswersPage from "./Pages/AdditionalPages/QuestionAnswersPage/QuestionAnswersPage";
import GeneralInformationPage from "./Pages/AdditionalPages/GeneralInformationPage/GeneralInformationPage";
import CatalogLessonPage from "./Pages/AdditionalPages/CatalogLessonPage/CatalogLessonPage";
import TeacherPage from "./Pages/AdditionalPages/TeacherPage/TeacherPage";



function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path={`/`} exact component={Main}/>
                <Route path={`/about-us`} component={AboutUs}/>
                <Route path={`/contacts`} component={Contacts}/>
                <Route path={`/courses`} component={Courses}/>
                <Route path={`/student`} component={StudentPage}/>
                <Route path={`/teacher`} component={TeacherPage}/>
                <Route path={`/studentsList`} component={StudentsListPage}/>
                <Route path={`/createLesson`} component={CreateLessonPage}/>
                <Route path={`/questionAnswers`} component={QuestionAnswersPage}/>
                <Route path={`/generalInfo`} component={GeneralInformationPage}/>
                <Route path={`/catalog`} component={CatalogLessonPage}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
