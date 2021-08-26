import React, {useEffect, useState} from 'react';
import styles from './Stars.module.css';
import {BsStar, BsStarFill} from "react-icons/bs";

const Stars = (props) => {

    const [starsChosen, setStarsChosen] = useState([]);

    useEffect(() => {
        if(props.data !== []){
            setStarsChosen(props.data);
        }
    },[]);


    const changeStarsType = (count) => {
        let arr = [];
        if(props.data !== []){
            props.data.map((item, index) => {
                if(index <= count ){
                    arr.push(true);
                }else {
                    arr.push(false);
                }
            });
        }
        setStarsChosen(arr);
    }


    let stars = starsChosen.map((item,index) => {
        return (
            <span className={styles.star} onClick={() => {changeStarsType(index)}}>
                {(starsChosen[index]) ? (
                    <BsStarFill style={{color: '#F77D48'}}/>
                ) : (
                    <BsStar/>
                )}
            </span>
        )
    });


    return (
        <div>
            {stars}
        </div>
    );
};

export {Stars};
