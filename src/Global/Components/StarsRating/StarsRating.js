import React, {useEffect, useState} from 'react';
import styles from './StarsRating.module.css';

const StarsRating = (props) => {
    // const [marks, setMars] = useState([{mark: ''}, {mark: ''}, {mark: ''}]);
    const [marks, setMarks] = useState([]);
    let newArray = [];

    const leaveMark = (index,valueMark)=>{
        newArray.splice(index, 0, valueMark);
        setMarks(newArray);

    }

    return (
        //PopUp message doesn't work yet
        <div className={`${styles.rating} ${styles.popup}`}>
            <div className={`${styles.rating__items}`}>
                <input id={`rating_5_${props.index}`} type='radio' className={`${styles.rating__item}`} name='rating'
                       value={5}
                       onClick={(e) => {
                           leaveMark(props.index, e.target.value);
                           console.log(e.target.value);
                       }}
                />
                <label htmlFor={`rating_5_${props.index}`} className={`${styles.rating__label}`}/>
                <input id={`rating_4_${props.index}`} type='radio' className={`${styles.rating__item}`} name='rating'
                       value={4}
                       onClick={(e) => {
                           leaveMark(props.index, e.target.value);
                           console.log(e.target.value);
                       }}
                />
                <label htmlFor={`rating_4_${props.index}`} className={`${styles.rating__label}`}/>
                <input id={`rating_3_${props.index}`} type='radio' className={`${styles.rating__item}`} name='rating'
                       value={3}
                       onClick={(e) => {
                           leaveMark(props.index, e.target.value);
                           console.log(e.target.value);
                       }}
                />
                <label htmlFor={`rating_3_${props.index}`} className={`${styles.rating__label}`}/>
                <input id={`rating_2_${props.index}`} type='radio' className={`${styles.rating__item}`} name='rating'
                       value={2}
                       onClick={(e) => {
                           leaveMark(props.index, e.target.value);
                           console.log(e.target.value);
                       }}
                />
                <label htmlFor={`rating_2_${props.index}`} className={`${styles.rating__label}`}/>
                <input id={`rating_1_${props.index}`} type='radio' className={`${styles.rating__item}`} name='rating'
                       value={1}
                       onClick={(e) => {
                           leaveMark(props.index, e.target.value);
                           console.log(e.target.value);
                       }}
                />
                <label htmlFor={`rating_1_${props.index}`} className={`${styles.rating__label}`}/>
            </div>
            {/*${styles.show} --- class for show or hide message */}
            <span className={`${styles.popuptext} `}>Take a mark</span>
        </div>
    );
};

export default StarsRating;