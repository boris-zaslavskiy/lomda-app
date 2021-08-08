import React from 'react';
import styles from "./ImageBlock.module.css";
import {IconBtn} from "../../../../Global/Components/Button/IconBtn/IconBtn";
import {faTimes} from "@fortawesome/free-solid-svg-icons";


const ImageBlock = (props) => {


    return (
        <div className={styles.imgBlock}>
            <img src={props.image} alt="image"/>
            <div className={styles.btnBlock}>
                <IconBtn type='button' color='white' backgroundColor='#F77D48' icon={faTimes}/>
            </div>
        </div>
    );
};

export default ImageBlock;
