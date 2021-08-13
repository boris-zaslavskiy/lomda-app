import React, {useState} from 'react';
import {Route, Switch} from "react-router";
import Login from "./Login/Login";
import SignIn from "./SignIn/SignIn";

const Authorization = () => {

    const [state,setState] = useState('');

    /*const switchPage = () => {
        console.log(state);
        if (state === 'sign-in'){
            return(<SignIn/>);
        }else{
            return (<Login setPage={setState}/>);
        }
    }*/


    return (
       /* switchPage()*/
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/sign-in' component={SignIn}/>
        </Switch>
    );
};

export default Authorization;
