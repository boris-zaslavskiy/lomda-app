import './App.css';
import Main from "./Pages/Main/Main";
import {Route, Switch} from "react-router";
import Contacts from "./Pages/Contacts/Contacts";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Header from "./Global/Navigation/Header/Header";
import Footer from "./Global/Navigation/Footer/Footer";

function App() {
    return (
        <div className="App">
           {/* <Header/>*/}
            <Switch>
                <Route path={`/about-us`} component={AboutUs}/>
                <Route path={`/contacts`} component={Contacts}/>
                <Route path={`/`} component={Main}/>
            </Switch>
           {/* <Footer/>*/}
        </div>
    );
}

export default App;
