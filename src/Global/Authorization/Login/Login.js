import React, {useState} from 'react';
import styles from './Login.module.css';
import {Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import RInput from "../RInput/RInput";

const Login = () => {




    return (
       <div className={styles.formWrapper}>
           <RInput type={`email`} placeholder={`Email`}/>
           <RInput type={`password`} placeholder={`Password`}/>
       </div>
    );
};

export default Login;
