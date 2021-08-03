import React, {useEffect, useRef, useState} from 'react';
import { CourseCard } from '../../../../Global/Components/CourseCard/CourseCard';
import  style from './BlockLessons.module.css';


const BlockLessons = ({lessonsToRender}) => {
    console.log(lessonsToRender);
    return (
        <div className={`row `} >
            {lessonsToRender.map((lesson, index)=>
                <div className={`col-12 col-lg-6 col-xl-4 mt-3 `} >
                    <CourseCard img={lesson.image} title={lesson.title}/>
                </div> )}
        </div>
    );
};

export default BlockLessons;