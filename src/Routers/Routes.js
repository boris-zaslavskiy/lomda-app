import React from "react";

import Main from "../Pages/Main/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contacts from "../Pages/Contacts/Contacts";

import StudentPage from "../Pages/AdditionalPages/StudentPage/StudentPage";
import TeacherPage from "../Pages/AdditionalPages/TeacherPage/TeacherPage";
import StudentsListPage from "../Pages/AdditionalPages/StudentsListPage/StudentsListPage";
import CreateLessonPage from "../Pages/AdditionalPages/CreateLessonPage/CreateLessonPage";
import CurrentLessonPage from "../Pages/AdditionalPages/CurrentLessonPage/CurrentLessonPage";
import QuestionAnswersPage from "../Pages/AdditionalPages/QuestionAnswersPage/QuestionAnswersPage";
import GeneralInformationPage from "../Pages/AdditionalPages/GeneralInformationPage/GeneralInformationPage";


export const PrivateRoutes = [
    {path: '/student/:id', component: StudentPage},
    {path: '/teacher/:id', component: TeacherPage},
    {path: '/studentsList', component: StudentsListPage},
    {path: '/createLesson/:teacherId', component: CreateLessonPage},
    {path: '/currentLesson/:id', component: CurrentLessonPage},
    {path: '/questionAnswers/:studentId', component: QuestionAnswersPage},
    {path: '/generalInfo/:classId', component: GeneralInformationPage},
    {path: '/about-us', component: AboutUs},
    {path: '/contacts', component: Contacts},
    {path: '/login', component: Main, exact: true},
    {path: '/sign-in', component: Main, exact: true}
];

export const PublicRoutes = [
    {path: '/about-us', component: AboutUs},
    {path: '/contacts', component: Contacts},
    {path: '/login', component: Main, exact: true},
    {path: '/sign-in', component: Main, exact: true}
];