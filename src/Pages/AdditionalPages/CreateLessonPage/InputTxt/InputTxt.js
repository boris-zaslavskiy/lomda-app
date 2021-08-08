import React, {useEffect, useRef, useState} from 'react';
import styles from './InputTxt.module.css';
import {GreenBtn} from "../../../../Global/Components/Button/GreenBtn/GreenBtn";
import {IconBtn} from "../../../../Global/Components/Button/IconBtn/IconBtn";
import {faTimes} from "@fortawesome/free-solid-svg-icons";


const InputTxt = (props) => {

    const [text, setText] = useState('');
    const [focus, setStatusFocus] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        setStatusFocus(true);
    },[]);


    const handleSubmit = () => {
        let newText;
        setStatusFocus(false);
        if (text.length === 0){
            newText = '';
        }else {
            newText = text;
        }
        console.log(newText)
    }

    const handleChange = (e) => {
        setText(e.target.value);
        setStatusFocus(true);
    }

    const handleFocus = () => {
        setStatusFocus(true);
    }


    const deleteData = (e) => {

        setText('');
        setStatusFocus(true);
    }


    return (
        <div className={styles.form}>
            <input type='text' name='userName' value={text} className={styles.input} placeholder={props.placeholder} onChange={handleChange} ref={inputRef} onFocus={handleFocus}
                   style={{border: `${(focus)?('2px solid #009DB3'):('2px solid transparent')}`, fontSize: `${(props.type !== 'header')? (20):(24) }px`}}/>
            <GreenBtn type='button' style={{color: '#F77D48'}} title='Save' clicked={handleSubmit}/>
            {(props.type !== 'header')?(
                <div style={{marginLeft: '10px'}}>
                    <IconBtn type='button' color='white' backgroundColor='#F77D48' icon={faTimes} clicked={deleteData}/>
                </div>
            ):null}
        </div>
    );
};

export default InputTxt;
