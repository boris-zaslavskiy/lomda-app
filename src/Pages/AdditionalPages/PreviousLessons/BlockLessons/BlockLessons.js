import React from 'react';
import { CourseCard } from '../../../../Global/Components/CourseCard/CourseCard';


const BlockLessons = ({lessonsToRender}) => {
    console.log(lessonsToRender);

    return (
        <div className='row'>
            {lessonsToRender.map((lesson, index) =>
                <div className='col-12 col-lg-6 col-xl-4 mt-3' key={index}>
                    <CourseCard img={lesson.image} title={lesson.title}/>
                </div> )}
        </div>
    );
};

export default BlockLessons;