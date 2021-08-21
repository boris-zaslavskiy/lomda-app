import React, {useState} from 'react';
import styles from "./ImageBlock.module.css";
import {IconBtn} from "../../../../Global/Components/Button/IconBtn/IconBtn";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import useChangeArticle from "../../../../Hooks/ArticleHooks/useChangeArticle";


const ImageBlock = (props) => {

    const [data, setData] = useState({});
    const [type, setType] = useState('');

    const article = useChangeArticle(type,data); // call a customHooks

    const deleteData = (id) => {
        const myObj = {...props.data, articleId:id};
        setType('delete');
        setData(myObj);
    }

    return (
        <div className={styles.imgBlock}>
            <img src={props.image} alt={props.id}/>
            <div className={styles.btnBlock}>
                <IconBtn type='button' color='white' backgroundColor='#F77D48' icon={faTimes} clicked={() => {deleteData(props.id)}}/>
            </div>
        </div>
    );
};

export default ImageBlock;
