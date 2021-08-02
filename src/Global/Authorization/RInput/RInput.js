import React, {useState} from 'react';
import styles from './RInput.module.css';


const RInput = (props) => {

    const [inpData, setInpData] = useState(``);

    const helpBlock = () =>{
        if (props.error === 'true'){
            return(<i className={`fa fa-check ${styles.helpBlockTrue}`}/>)
        }else{
            return props.error;
        }
    }

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        if (value.length > 0){
            // changeValue(inpData, key);
        }
        setInpData(value);
        props.getData(inpData, key);
    }
    const checkInput = () =>{
        switch (props.type){
            case 'email':
                return (
                    <div className={`mb-3`}>
                        <input className={`form-control`} type={'email'} placeholder={'E-mail'} onChange={handleChange} name={props.name}/>
                        <span className={`help-block`}>{helpBlock()}</span>
                    </div>
                )
            case 'password':
                return (
                    <div className={`mb-3`}>
                        <input className={`form-control`} type={'password'} placeholder={'Password'} onChange={handleChange} name={props.name}/>
                        <span className={`help-block`}>{helpBlock()}</span>
                    </div>
                )
            case 'confirm-password':
                return (
                    <div className={`mb-3`}>
                        <input className={`form-control`} type={'password'} placeholder={'Confirm password'} onChange={handleChange} name={props.name}/>
                        <span className={`help-block`}>{helpBlock()}</span>
                    </div>
                )
            case 'checkbox':
                return (
                    <div className={``}>
                    <input type="checkbox" className={`form-check-input`}/>
                        <label className={`form-check-label`}>Remember me</label>
                    </div>
                )
            case 'first-name':
                return (
                    <div className={`mb-3`}>
                        <input className={`form-control`} type={'text'} placeholder={'First name'} name={props.name}/>
                    </div>
                )
            case 'last-name':
                return (
                    <div className={`mb-3`}>
                        <input className={`form-control`} type={'text'} placeholder={'Last name'}  name={props.name}/>
                    </div>
                )
            case 'select':
                return (
                    <select name="" id="" className={`form-control mb-3`}>
                        <option value="b1">B1</option>
                    </select>
                )
            default:
                return ``;
        }
    }


    return (
        checkInput()
    );

}
export default RInput;



//const pattern = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;
