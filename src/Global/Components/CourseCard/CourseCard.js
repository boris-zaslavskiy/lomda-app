import React, {useEffect, useRef} from 'react';
import styles from './CourseCard.module.css';
import {LineBar} from "../ProgressBar/LineBar/LineBar";
import {TextBar} from "../ProgressBar/TextBar/TextBar";
import {TitleH6} from "../Texts/Headers/TitleH6/TitleH6";
import {BorderBtn} from "../Button/BorderBtn/BorderBtn";
import {Link} from "react-router-dom";
import useHover from "../../../Hooks/useHover";


const CourseCard = (props) => {

    const [coverIsHover, setCoverIsHover] = useHover();

    const ref = useRef(null);
    // useEffect(() => {
    //     console.log(ref.current.offsetHeight);
    //     // props.itemHeight(ref.current.offsetHeight);//doesn't work
    // },[]);

    return (
        <div className={`${styles.wrapper}`} ref={ref} >
            <div className={styles.card}>
                <div className={styles.imgWrapper} ref={coverIsHover}>
                    <img src={props.img} alt="Norway" className={styles.images}/>
                    <div className={styles.imgBlock} style={{backgroundColor: (setCoverIsHover)?('rgba(0,0,0,0.7)'):null}}>
                        <Link to={'/currentLesson/1s'} style={{display: (setCoverIsHover)?('block'):('none')}}>
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
