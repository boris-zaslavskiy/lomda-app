import React, {useEffect, useRef, useState} from 'react';
import styles from './InputTxt.module.css';
import {GreenBtn} from "../../../../Global/Components/Button/GreenBtn/GreenBtn";
import {IconBtn} from "../../../../Global/Components/Button/IconBtn/IconBtn";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

import useChangeArticle from "../../../../Hooks/ArticleHooks/useChangeArticle";


const InputTxt = (props) => {

    const [text, setText] = useState('');
    const [data, setData] = useState({});
    const [type, setType] = useState('');
    const [focus, setStatusFocus] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const inputRef = useRef(null);


    const article = useChangeArticle(type,data,props.type); // call a customHooks


    useEffect(() => {
        setStatusFocus(true);
    },[]);


    useEffect(() => {
        if(props.value !== ''){
            setText(props.value);
            setStatusFocus(false);
        }else{
            setText(props.value);
            setStatusFocus(true);
        }
    },[props.value]);


    const handleSubmit = (value) => {
        if(text === ''){
            setIsEmpty(true);
            setStatusFocus(false);
        }else{
            if(value === null){
                const myObj = {...props.data, articleId: value, text: text};
                setData(myObj);
            }else{
                const myObj = {...props.data, text: text};
                setData(myObj);
            }
            setType('change');
            setIsEmpty(false);
            setStatusFocus(false);
        }
    }

    const handleChange = (e) => {
        setText(e.target.value);
        setStatusFocus(true);
    }

    const handleFocus = () => {
        setStatusFocus(true);
    }

    const deleteData = (id) => {
        const myObj = {...props.data, articleId:id};
        setType('delete');
        setData(myObj);
        setStatusFocus(true);
    }



    return (
        <div className={styles.form}>
            <input type='text' name={props.id} value={text} className={styles.input} placeholder={props.placeholder}
                   onChange={handleChange} ref={inputRef}
                   onFocus={handleFocus}
                   style={{border: `${(focus)?('2px solid #009DB3'):((isEmpty)?('2px solid #F77D48'):('2px solid transparent'))}`, fontSize: `${(props.type !== 'header')? (20):(24) }px`}}/>
            {(props.type !== 'header')?(
                <div style={{  display: 'flex'}}>
                    <GreenBtn type='button' style={{color: '#F77D48'}} title='Save' clicked={() => {handleSubmit(props.id)}}/>
                    <div style={{marginLeft: '10px'}}>

                        <IconBtn type='button' color='white' backgroundColor='#F77D48' icon={faTimes} clicked={() => {deleteData(props.id)}}/>
                    </div>
                </div>
            ):(
                 <GreenBtn type='button' style={{color: '#F77D48'}} title='Save' clicked={() => {handleSubmit(null)}}/>
            )}
        </div>
    );
};

export default InputTxt;
