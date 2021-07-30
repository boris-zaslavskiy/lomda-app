import React, { useState, useEffect } from 'react';
import { GreenBtn } from '../../../Global/Components/Button/GreenBtn/GreenBtn';
import { TitleH2 } from '../../../Global/Components/Texts/Headers/TitleH2/TitleH2';
import BlockLessons from './BlockLessons/BlockLessons';
import {arrayLessons} from '../../../Utils/constants';
import SearchInput from '../../../Global/Components/SearchInput/SearchInput';
import global from "../../../Global/Modules/Global.module.css";


const PreviousLessons = () => {
    const [lessonsToShow, setLessonsToShow] = useState([]);
    const [count, setCount] = useState(1);
    //the number of Lessons in BlockLesson we want to show on each page
    const lessonsPerPage = 3;
    const arrayForHoldingLessons = [];//array will hold our Lessons just before we display them.

    const loopThroughLessons = (count) => {
        for (
            let i = 1 * lessonsPerPage - lessonsPerPage;
            i < count * lessonsPerPage;
            i++
        ) {
            if (arrayLessons[i] !== undefined) {
                arrayForHoldingLessons .push(arrayLessons[i]);
            }
        }
        setLessonsToShow(arrayForHoldingLessons );

    };
    // load the first set of Lessons when the page loads
    // and then set the value of count to 2
    useEffect(() => {
        setCount((prevCount) => prevCount + 1);
        loopThroughLessons(count);
    }, []);
    const handleShowMoreLessons = () => {
        setCount((prevCount) => prevCount + 1);
        loopThroughLessons(count);
    };

    return (
        <div>
            <div className={`text-center mt-3 ${global.RowBlock}`}>
                <TitleH2 titleType='h2' title='Previous Lessons' />
                <div className={`row my-3 my-md-5 `}>
                    <div className='col-12 col-md-6'>
                        <SearchInput type='options'/>
                    </div>
                    <div className={`col-12 col-md-6`}>
                        <SearchInput type='search'/>
                    </div>
                </div>
            </div>
            <BlockLessons lessonsToRender={lessonsToShow}/>
            <div onClick={handleShowMoreLessons} className='mt-3 mb-3 text-center'>
                <GreenBtn title='View More'/>
            </div>
        </div>
    );
};

export default PreviousLessons;