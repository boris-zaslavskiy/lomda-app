import React, {useEffect, useState} from 'react';
import styles from './Login.module.css';
import RInput from "../RInput/RInput";
import {Form} from "react-bootstrap";


const Login = () => {

    const [data, setData] = useState({
        email:'',
        password:''
    });

    const correctData = {
        email:'',
        password:''
    }

    const [error,setError] = useState(``);

    useEffect(()=> {
        const ePattern = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,15}$/;
        if (!ePattern.test(data.email)){
            setError(`Incorrect input`);
        }else{
            setError(``);
            correctData.email = data.email;
        }
    }, [data.email])

    useEffect(()=> {
        const letters = /[a-zA-Z]/g;
        const numbers = /[0-9]/g;
        if (data.password.length < 6){
            setError(`Your password needs to contain more that 6 symbols`);
        }else if(!letters.test(data.password)){
           setError(`Your password needs to contain at least 1 letter`);
        }else if(!numbers.test(data.password)){
            setError(`Your password needs to contain at least 1 digit`);
        }else{
            correctData.password = data.password;
        }
    }, [data.password])

    const getDataFromInp = (value, name) =>{
        setData({...data, [name]:value})
        console.log(data);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (correctData.password.length > 0 && correctData.email.length > 0){
            //axios
        }
    }

    return (
       <Form onSubmit={handleSubmit} className={styles.formWrapper}>
        <RInput type={`email`} name='email' getData={getDataFromInp} error={error}/>
        <RInput type={`password`} name='password' getData={getDataFromInp} error={error}/>
           <button type='submit'>button</button>
       </Form>
    );
};

export default Login;

