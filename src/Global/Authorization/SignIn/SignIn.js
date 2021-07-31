import React, {useState} from 'react';
import styles from "./SignIn.module.css";
import RInput from "../RInput/RInput";
import {Form} from "react-bootstrap";

const SignIn = () => {

    const [formState, setFormState] = useState({
        teacher:true,
        student:false
    })

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
                    <button className={styles.subBtn}>Submit</button>
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
                                <button className={styles.subBtn} type={`submit`}>Submit</button>
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
