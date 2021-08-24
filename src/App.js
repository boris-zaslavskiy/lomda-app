import React, {useState} from "react";
import './App.css';
import {Redirect, Route, Switch} from "react-router";


import Header from "./Global/Navigation/Header/Header";
import Footer from "./Global/Navigation/Footer/Footer";


import {PrivateRoutes, PublicRoutes} from "./Routers/Routes";



function App() {

    const [isAuth, setAuth] = useState(true);

    const publicRoutes = PublicRoutes.map((item,index) => {
        return(
            <Route
                key={index}
                exact={item.exact}
                path={item.path}
                component={item.component}/>
        )
    });

    const privateRoutes = PrivateRoutes.map((item,index) => {
        return(
                <Route
                    key={index}
                    exact={item.exact}
                    path={item.path}
                    component={item.component}/>
            )
    });

    return (
        <div>
            <Header/>
            <div className="App">
                <Switch>
                    {(isAuth)?(
                        <div>
                            {privateRoutes}
                            <Redirect exact from='/' to='/login'/>
                        </div>):(
                        <div>
                            {publicRoutes}
                            <Redirect exact from='/' to='/login'/>
                        </div>)}



                    {/*<Route path={'/about-us'} component={AboutUs}/>
                    <Route path={'/contacts'} component={Contacts}/>
                    <Route path={'/student/:id'} component={StudentPage}/>
                    <Route path={'/teacher/:id'} component={TeacherPage}/>
                    <Route path={'/studentsList'} component={StudentsListPage}/>
                    <Route path={'/createLesson'} component={CreateLessonPage}/>
                    <Route path={'/currentLesson'} component={AddStudentsPage}/>
                    <Route path={'/questionAnswers'} component={QuestionAnswersPage}/>
                    <Route path={'/generalInfo/:classId'} component={GeneralInformationPage}/>
                    <Route path={'/catalog'} component={AddForm}/>
                    <Redirect exact from='/' to='/login' />
                    <Route path={'/'} component={Main}/>*/}
                </Switch>
            </div>

            <Footer/>
        </div>
    );
}

export default App;
