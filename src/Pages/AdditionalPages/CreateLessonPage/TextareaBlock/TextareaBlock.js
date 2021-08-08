import React, {useEffect, useRef, useState} from 'react';
import styles from './TextareaBlock.module.css';
import {IconBtn} from "../../../../Global/Components/Button/IconBtn/IconBtn";
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";


const TextareaBlock = (props) => {

    const [text, setText] = useState('');
    const [focus, setStatusFocus] = useState(false);
    const [height, setHeight] = useState(0);
    const ref = useRef(null);


    useEffect(() => {
        setStatusFocus(true);
    },[]);

    useEffect(() => {
        setHeight(ref.current.scrollHeight); //auto height in textarea
    },[text]);


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
        setHeight(0);
        setStatusFocus(true);
    }


    return (
        <div className={styles.form}>
            <div className={styles.block}>
                <textarea type='text' name='userName' value={text} className={styles.textarea} placeholder={props.placeholder} onChange={handleChange} ref={ref} onFocus={handleFocus}
                          style={{border: `${(focus)?('2px solid #009DB3'):('2px solid transparent')}`, height: `${height}px`}}/>
            </div>
            <div className={styles.block}>
                <IconBtn type='button' color='white' backgroundColor='#009DB3' icon={faCheck} clicked={handleSubmit}/>
                <IconBtn type='button' color='white' backgroundColor='#F77D48' icon={faTimes} clicked={deleteData}/>
            </div>
        </div>
    );
};

export default TextareaBlock;
