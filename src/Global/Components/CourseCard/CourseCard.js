import React, {useEffect, useRef} from 'react';
import styles from './CourseCard.module.css';
import {LineBar} from "../ProgressBar/LineBar/LineBar";
import {TextBar} from "../ProgressBar/TextBar/TextBar";
import {TitleH6} from "../Texts/Headers/TitleH6/TitleH6";
import {BorderBtn} from "../Button/BorderBtn/BorderBtn";
import {Link} from "react-router-dom";


const CourseCard = (props) => {

//LineBar, TextBar, TitleH6, IconBtn, img srs - they need to be changed using data from the database. - Alina
    const ref = useRef(null);
    // useEffect(() => {
    //     console.log(ref.current.offsetHeight);
    //     // props.itemHeight(ref.current.offsetHeight);//doesn't work
    // },[]);
    return (
        <div className={`${styles.wrapper}`} ref={ref} >
            <div className={styles.card}>
                <div className={styles.imgWrapper}>
                    <img src={props.img} alt="Norway" className={styles.images}/>
                    <div className={styles.imgBlock}>
                        <Link to={'/currentLesson/1s'}>
                            <BorderBtn title='view' color='white'/>
                        </Link>
                    </div>
                </div>
                <div>
                    <LineBar currentCount='17' maxCount='34'/>
                    <TextBar flag='CourseCard' currentCount='17' text={`${17} of ${34} students completed the task`}/>
                </div>
                <div className={styles.header}>
                    <TitleH6 title={props.title}/>
                    <span className={styles.span}>Active</span>
                </div>
            </div>
        </div>
    );
};

export {CourseCard};
