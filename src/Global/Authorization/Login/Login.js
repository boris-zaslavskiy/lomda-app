import React, {useEffect, useState} from 'react';
import styles from './Login.module.css';
import RInput from "../RInput/RInput";
import {Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import {GreenBtn} from "../../Components/Button/GreenBtn/GreenBtn";


const Login = (props) => {

    const [data, setData] = useState({
        email:'',
        password:''
    });

    const correctData = {
        email:'',
        password:''
    }

    const [eError,setEmailError] = useState(`Enter your e-mail`);
    const [pError,setPasswordError] = useState(`Enter your password`);

    useEffect(()=> {
        const ePattern = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,15}$/;
        if (data.email.length === 0){
            setEmailError(`Enter your email`);
        }
        else if (!ePattern.test(data.email)){
            setEmailError(`Incorrect input`);
        }else{
            setEmailError(`true`);
            correctData.email = data.email;
        }
    }, [data.email])

    useEffect(()=> {
        const letters = /[a-zA-Z]/g;
        const numbers = /[0-9]/g;
        if (data.password.length === 0){
            setPasswordError(`Enter your password`);
        }
        else if (data.password.length < 6){
            setPasswordError(`Your password needs to contain more that 6 symbols`);
        }else if(!letters.test(data.password)){
           setPasswordError(`Your password needs to contain at least 1 letter`);
        }else if(!numbers.test(data.password)){
            setPasswordError(`Your password needs to contain at least 1 digit`);
        }else if(letters.test(data.password) && numbers.test(data.password)){
            setPasswordError('true');
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
        <RInput type={`email`} name='email' getData={getDataFromInp} error={eError}/>
        <RInput type={`password`} name='password' getData={getDataFromInp} error={pError}/>
           <div className={`d-flex justify-content-between align-items-center`}>
               <RInput type={`checkbox`}/>
               <Link className={styles.FYPLink}>Forgot your password?</Link> {/*You forgot to='url'*/}
           </div>
           <div className={'w-100 d-flex flex-column align-items-center justify-content-between mt-3'}>

               {/* alina change btn */}
               <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                   <Link to='/student/1s' ><GreenBtn type='submit' title='Login'/></Link>
               </div>

           {/*<button className={`mb-5 ${styles.loginBtn}`} type='submit'>Login</button>*/}
               <p className={`mb-0`}>Don't have an account yet?</p>
               <div onClick={()=>{props.setPage('sign-in')}} className={`${styles.SILink}`}>Sign in</div>
           </div>
       </Form>
    );
};

export default Login;

