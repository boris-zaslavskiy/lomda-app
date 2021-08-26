import React, {useState} from 'react';
import global from '../../../../Global/Modules/Global.module.css';
import styles from '../ListQuestionsAnswers/ListQuestionsAnswers.module.css';

import CurrentStudentAnswers from "../CurrentStudentAnswers/CurrentStudentAnswers";
import {TitleH5} from "../../../../Global/Components/Texts/Headers/TitleH5/TitleH5";
import {IconBtn} from "../../../../Global/Components/Button/IconBtn/IconBtn";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";

const ListQuestionsAnswers = (props) => {

    const [down, setDown] = useState(false);//state for animation ---Lera

    const handleUpDown = () => {
        setDown(!down);
    }


    return (
        <div className={` w-100 d-flex flex-column`}>
            <div className={global.WhiteShadowBlock}>
                <div className={styles.block}>
                    <div className={styles.row}>
                        <span style={{
                            color: '#F77D48',
                            fontWeight: '900',
                            fontSize: '24px',
                            marginRight: '20px'
                        }}>{props.number}</span>
                        <TitleH5 color='black' weight='900' title={props.title}/>
                    </div>

                    <div className='d-flex justify-content-end align-items-center w-25'>
                        {!down ?
                            <IconBtn icon={faChevronDown}
                                     color='#009db3'
                                     border='2px solid #009db3'
                                     backgroundColor='transparent'
                                     clicked={handleUpDown}
                            />
                            :
                            <IconBtn icon={faChevronUp}
                                     color='#F77D48'
                                     border='2px solid #F77D48'
                                     backgroundColor='transparent'
                                     clicked={handleUpDown}
                            />}
                    </div>
                </div>
            </div>

            <div className={`mt-3 ${styles.slowDown} px-2`}
                 style={{maxHeight: `${down ? (`${props.height}px`) : ('0')}`}}>
                {props.componentToRender}
            </div>
        </div>
    );
};

export default ListQuestionsAnswers;