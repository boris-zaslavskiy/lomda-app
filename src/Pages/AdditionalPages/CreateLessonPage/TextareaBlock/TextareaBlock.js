import React, {useEffect, useRef, useState} from 'react';
import styles from './TextareaBlock.module.css';
import {IconBtn} from "../../../../Global/Components/Button/IconBtn/IconBtn";
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";

import useChangeArticle from "../../../../Hooks/ArticleHooks/useChangeArticle";


const TextareaBlock = (props) => {

    const [text, setText] = useState('');
    const [data, setData] = useState({});
    const [type, setType] = useState('');
    const [focus, setStatusFocus] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [height, setHeight] = useState(0);
    const ref = useRef(null);


    const article = useChangeArticle(type,data);

    useEffect(() => {
        setStatusFocus(true);
    },[]);


    useEffect(() => {
        if(props.value !== ''){
            setText(props.value);
            setStatusFocus(false);
        }else{
            setStatusFocus(true);
        }
    },[props.value]);


    useEffect(() => {
        setHeight(ref.current.scrollHeight); //auto height in textarea
    },[text]);


    const handleSubmit = (id) => {
        const myObj = {...props.data, articleId:id, text: text};
        setData(myObj);
        if(text === ''){
            setIsEmpty(true);
            setStatusFocus(false);
        }else{
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
            <div className={styles.block}>
                <textarea type='text' name={props.id} value={text} className={styles.textarea} placeholder={props.placeholder} onChange={handleChange} ref={ref} onFocus={handleFocus}
                          style={{border: `${(focus)?('2px solid #009DB3'):((isEmpty)?('2px solid #F77D48'):('2px solid transparent'))}`,
                              height: `${height}px`,
                              fontWeight: `${props.styleText}`,
                              textDecoration: `${props.styleText}`}}/>
            </div>
            <div className={styles.block}>
                <IconBtn type='button' color='white' backgroundColor='#009DB3' icon={faCheck} clicked={() => {handleSubmit(props.id)}}/>
                <IconBtn type='button' color='white' backgroundColor='#F77D48' icon={faTimes} clicked={() => {deleteData(props.id)}}/>
            </div>
        </div>
    );
};

export default TextareaBlock;
