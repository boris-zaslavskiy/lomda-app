import React, {useState} from 'react';
import styles from './DescriptionCard.module.css';
import global from '../../../Global/Modules/Global.module.css';

import {HeaderCardItem} from "../HeaderCardItem/HeaderCardItem";

import usersImg from '../../../Assets/users/avatar.png';

const DescriptionCard = (props) => {

//HeaderCardIte, usersImg - they need to be changed using data from the database. - Alina
//for a HeaderCardIte component there can be one of 3 types: form, user, lesson. (str 19)

    const [image, setImage] = useState(usersImg);

    const handleChange = (e) => {
        setImage(e.target.value);
       console.log(e.target.files[0])
    }


    return (
        <div className={global.WhiteShadowBlock}>
            {(props.type === 'form')?(
                <div className={styles.imageUpload}>
                    <div className={styles.imageBlock}>
                        <img src={image} alt='userImage' className={styles.image}/>
                    </div>
                    <div className={styles.black}>
                        <div className={styles.fileInput}>
                            <input type="file" id="file" className={styles.file} onChange={handleChange}/>
                            <label htmlFor="file">+</label>
                        </div>
                    </div>
                </div>
            ):(
                <div className={styles.imageUpload}>
                    <div className={styles.imageBlock}>
                        <img src={image} alt='userImage' className={styles.image}/>
                    </div>
                </div>
            )}



            <div className={styles.header}>
                <HeaderCardItem type={props.type} title={props.title} txt={props.txt} url={props.url}/>
            </div>
        </div>
    );
};

export {DescriptionCard};
