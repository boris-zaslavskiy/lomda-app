import React from "react";
import './App.css';
import Main from "./Pages/Main/Main";
import {Route, Switch} from "react-router";
import Contacts from "./Pages/Contacts/Contacts";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Header from "./Global/Navigation/Header/Header";
import Footer from "./Global/Navigation/Footer/Footer";
import StudentPage from "./Pages/StudentPage/StudentPage";
import StudentsListPage from "./Pages/StudentsListPage/StudentsListPage";
import Menu from "./Global/Navigation/NavBar/Menu/Menu";



function App() {
    return (
        <div className="App">
            <Header/>
            {/*<Menu/>*/}
            <Switch>
                <Route path={`/`} exact component={Main}/>
                <Route path={`/about-us`} component={AboutUs}/>
                <Route path={`/contacts`} component={Contacts}/>
                <Route path={`/student`} component={StudentPage}/>
                <Route path={`/studentsList`} component={StudentsListPage}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
