import React from 'react';
import styles from './StepItem.module.css';

const StepItem = ({item}) => {

    const style = (num) => {
        if(num !== 2){
            return `d-none`;
        }
        else {
            return `d-block`;
        }
    }


    return (
        <div className={`${styles.stepItem}`}>
            <h2 className={`${styles.number}`}>{`${item.num}`}</h2>
            <div className={`col-10 col-lg-5 ${styles.content}`}>
            <p>{`${item.txt}`}</p>
            <ul className={`${style(item.num)}`}>
                <li><span>Makes up 1 deep question that require full answers</span></li>
                <li><span>Answers for 3 questions that require full answer</span></li>
                <li><span>Estimates the quality of the questions that require full answers of other pupils</span></li>
            </ul>
            </div>
            <img src={item.img} alt={`Step ${item.num} Image`} className={`col-10 offset-1 col-lg-3`}/>
        </div>
    );
};

export default StepItem;