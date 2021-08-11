import React, {useEffect, useRef} from 'react';
import avatar from "../../../../Assets/users/student.svg";
import styles from '../OtherStudentsAnswers/OtherStudentsAnswers.module.css';
import StarsRating from "../../../../Global/Components/StarsRating/StarsRating";

const OtherStudentsAnswers = (props) => {
    const ref = useRef(null);
    useEffect(()=>{
        props.itemHeight(ref.current.offsetHeight);
    },[])
    return (
        <div className='my-3'>
            <div ref={ref} className={`${styles.outerShadow}`}>
                <div className={`${styles.greyField} d-flex flex-row align-items-center`} >
                    <img src={avatar} width='50px' height='50px' className='me-3' alt='avatar'/>
                    <div className='d-flex flex-row'>
                        <p className={`m-0 ${styles.text}`}>User Name</p>
                    </div>
                </div>
                <div className={`${styles.scroll} `} style={{minHeight:140}}>
                    <p className={`p-3 pb-0 m-0 `}>
                        <div className={`${styles.starsPosition}`}>
                            <StarsRating index={2}/>
                        </div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias, atque aut
                        commodi consequatur culpa cum dolor dolorem enim et exercitationem fugit in incidunt
                        laudantium quas quod temporibus vero voluptate.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OtherStudentsAnswers;