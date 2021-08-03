import React, { useState, useEffect } from 'react';
import { GreenBtn } from '../../../Global/Components/Button/GreenBtn/GreenBtn';
import { TitleH2 } from '../../../Global/Components/Texts/Headers/TitleH2/TitleH2';
import BlockLessons from './BlockLessons/BlockLessons';
import {arrayLessons} from '../../../Utils/constants';
import SearchInput from '../../../Global/Components/SearchInput/SearchInput';
import styles from '../PreviousLessons/PreviousLessons.module.css';


const PreviousLessons = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [lessonsToShow, setLessonsToShow] = useState([]);
    const [count, setCount] = useState(1);
    const lessonsPerPage = 3;//the number of Lessons in BlockLesson we want to show on each page
    const arrayForHoldingLessons = [];//array will hold our Lessons just before we display them.
    const index = windowWidth<992?3:windowWidth>=1200?1:2;//

    console.log(lessonsPerPage);
    const loopThroughLessons = (count) => {
        if(lessonsToShow.length===arrayLessons.length){
            console.log(lessonsToShow.splice(lessonsPerPage,arrayLessons.length-lessonsPerPage ));
        } else{
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
        }
    };
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };
    // load the first set of Lessons when the page loads
    // and then set the value of count to 2
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        if(lessonsToShow.length===arrayLessons.length){
            setCount(2);
        }else{
            setCount((prevCount) => prevCount + 1);
        }
        loopThroughLessons(count);
    }, []);
    const handleShowMoreLessons = () => {
        if(lessonsToShow.length===arrayLessons.length){
            setCount(2);

        }else{
            setCount((prevCount) => prevCount + 1);
        }
        loopThroughLessons(count);
    };

    return (
        <div>
            <div className={`text-center mt-3`}>
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
            {/*3 cards always */}
            <div className={`${styles.class}`} style={{maxHeight:`${(lessonsToShow.length * 500)/3}px`}} >
                <BlockLessons lessonsToRender={lessonsToShow}/>
            </div>
            <div onClick={()=>{
                handleShowMoreLessons();
            }} className={`mt-3 mb-3 text-center`}>
                <GreenBtn title={lessonsToShow.length===arrayLessons.length?`View Less`:'View More'}/>
            </div>
        </div>
    );
};

export default PreviousLessons;