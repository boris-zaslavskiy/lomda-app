import './App.css';
import Header from "./Global/Navigation/Header/Header";
import Main from "./Pages/Main/Main";
import {Route, Switch} from "react-router";
import Contacts from "./Pages/Contacts/Contacts";
import AboutUs from "./Pages/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path={`/about-us`} component={AboutUs}/>
            <Route path={`/contacts`} component={Contacts}/>
            <Route path={`/`} component={Main}/>
        </Switch>

    </div>
  );
}

export default App;
