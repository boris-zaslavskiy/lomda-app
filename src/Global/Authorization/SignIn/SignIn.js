import React, {useState} from 'react';
import styles from "./SignIn.module.css";
import RInput from "../RInput/RInput";
import {Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import {OrangeBtn} from "../../Components/Button/OrangeBtn/OrangeBtn";

import axios from "axios"; // an asynchronous method for working with requests returns a promise

const SignIn = () => {

    const [formState, setFormState] = useState({
        teacher:true,
        student:false
    })

    const linkPath = () =>{
        if (formState.teacher===true){
            return '/teacher';
        }else{
            return '/student';
        }
    }

   //get data from mongoDB - test - Alina
   /*  const getData = async (e) => {
        e.preventDefault();
        if(formState.teacher === true){

        }else{

        }
    }*/

    const render = () =>{
        if (formState.teacher === true){
            return(
            <div className={styles.signIn}>
                <label className={`${styles.label} ${styles.active}`} onClick={()=>{
                    setFormState({...formState , teacher:true, student: false})
                }}>I'm teacher <i className={`fa fa-check ${styles.labelCheck}`}/></label>
                <label className={`${styles.label}`} onClick={()=>{
                    setFormState({...formState , teacher:false, student: true})
                }}>I'm student</label>
                <Form className={styles.formWrapper}>
                    <RInput type='first-name'/>
                    <RInput type='last-name'/>
                    <RInput type='email' />
                    <RInput type='password'/>
                    <RInput type='confirm-password'/>
                    <div className={`w-100 d-flex`}>
                       {/* <Link to={linkPath()} className={styles.subBtn} type={`submit`}>Submit</Link>*/}

                      {/* alina change btn */}
                       <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                           <Link to='/teacher/1t' ><OrangeBtn type='submit' title='Submit'/></Link>{/*clicked={getData}*/}
                       </div>

                    </div>
                </Form>
            </div>
            )}else{
                return (
                    <div className={styles.signIn}>
                        <label className={`${styles.label}`} onClick={()=>{
                            setFormState({...formState , teacher:true, student: false})
                        }}>I'm teacher</label>
                        <label className={`${styles.label} ${styles.active}`} onClick={()=>{
                            setFormState({...formState , teacher:false, student: true})
                        }}>I'm student <i className={`fa fa-check ${styles.labelCheck}`}/></label>
                        <Form className={styles.formWrapper}>
                            <RInput type='first-name'/>
                            <RInput type='last-name'/>
                            <RInput type='email'/>
                            <RInput type='select'/>
                            <RInput type='password'/>
                            <RInput type='confirm-password'/>
                            <div className={`w-100 d-flex`}>
                                {/*<Link to={linkPath()} className={styles.subBtn} type={`submit`}></Link>*/}

                                {/* alina change btn */}
                                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                                    <Link to='/student/1s' ><OrangeBtn type='submit' title='Submit'/></Link> {/*clicked={getData}*/}
                                </div>

                            </div>
                        </Form>
                    </div>
                )
            }
        }


    return (
        render()
    );
};

export default SignIn;
