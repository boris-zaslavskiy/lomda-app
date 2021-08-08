import React, {useEffect, useRef, useState} from 'react';
import { CourseCard } from '../../../../Global/Components/CourseCard/CourseCard';
import  style from './BlockLessons.module.css';


const BlockLessons = ({lessonsToRender, itemHeight}) => {

    //console.log(lessonsToRender);
    const ref = useRef(null);

    useEffect(() => {
       if(window.innerWidth < '1000'){
           itemHeight(ref.current.offsetHeight / lessonsToRender.length);
       }else if(window.innerWidth < '1200'){
           itemHeight(ref.current.offsetHeight / (lessonsToRender.length / 2));
       }else {
           itemHeight(ref.current.offsetHeight / 3);
       }
    },[lessonsToRender]);


    return (
        <div className={`row`} ref={ref}>
            {lessonsToRender.map((lesson) =>
                <div className={`col-12 col-lg-6 col-xl-4 mt-3 `} >
                    <CourseCard img={lesson.image} title={lesson.title} />
                </div> )}
        </div>
    );
};

export default BlockLessons;