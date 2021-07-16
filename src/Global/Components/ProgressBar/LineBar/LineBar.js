import React, {useEffect, useState} from 'react';

const LineBar = (props) => {


//Logic: The "additionalBlock" component changes depending on the props and on the page on which it is located (Main, Teacher, Student) - Alina

    const [currentLoading, setCurrentLoading] = useState(0);

    useEffect(() => {
        let currentPercent = props.currentCount * 100 / props.maxCount; //calculation of current percent
        console.log(currentPercent)
        setCurrentLoading(currentPercent);
    }, [props.currentCount,props.maxCount]);


    return (
        <div>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: `${currentLoading}%`, backgroundColor: '#F77D48'}} aria-valuenow={props.currentCount} aria-valuemin="0" aria-valuemax={props.maxCount}/>
            </div>
        </div>
    );
};

export {LineBar};
