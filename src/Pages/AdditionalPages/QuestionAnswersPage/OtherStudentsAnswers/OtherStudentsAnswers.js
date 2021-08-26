import React, {useEffect, useRef} from 'react';
import avatar from "../../../../Assets/users/student.svg";
import styles from '../OtherStudentsAnswers/OtherStudentsAnswers.module.css';
import StarsRating from "../../../../Global/Components/StarsRating/StarsRating";
import {Stars} from "../../../../Global/Components/Stars/Stars";
import useHeight from "../../../../Hooks/useHeight";
import {TitleH6} from "../../../../Global/Components/Texts/Headers/TitleH6/TitleH6";

const OtherStudentsAnswers = (props) => {

    const starRating = [true,true,false,false,false];//test data
    const ref = useRef(null);

    const height = useHeight(ref);
    props.itemHeight(height);


    return (
        <div className='my-3'>
            <div className={`${styles.outerShadow}`} ref={ref} >

                <div className={`${styles.greyField} d-flex flex-row align-items-center`} >
                    <img src={avatar} width='50px' height='50px' className='me-3' alt='avatar'/>
                    <div className='d-flex flex-row'>
                        <TitleH6 color='black' weight='900' title={'User Name'}/>
                    </div>
                </div>

                <div className={`${styles.scroll} `} style={{minHeight:140}}>
                    <p className={`p-3 pb-0 m-0 `}>
                        <div className={`${styles.starsPosition}`}>
                            {/*<StarsRating index={4} ratingAnsOther={2}/>*/}
                            <Stars data={starRating}/>
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