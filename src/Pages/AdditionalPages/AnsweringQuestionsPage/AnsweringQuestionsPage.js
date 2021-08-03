import React, {useEffect, useState} from 'react';
import {TextBar} from "../../../Global/Components/ProgressBar/TextBar/TextBar";
import {LineBar} from "../../../Global/Components/ProgressBar/LineBar/LineBar";
import styles from './AnsweringQuestionsPage.module.css';
import Steps from "./Steps/Steps";
import {GreenBtn} from "../../../Global/Components/Button/GreenBtn/GreenBtn";
import {TitleH6} from "../../../Global/Components/Texts/Headers/TitleH6/TitleH6";

const AnsweringQuestionsPage = () => {
    const [step, setStep] = useState(1);//number of step
    const [count, setCount] = useState(1);//counter for checking  numbers of step

    const nextStep = () => {
        console.log(count);
        if(count>3){
            setStep(1);
            setCount(1);
        }else{
            setCount((prevCount) => prevCount + 1);
            setStep(count);
        }
    }
    useEffect(()=>{
        if(count>3){
            setCount(1);
        }else{
            setCount((prevCount) => prevCount + 1);
        }
    },[]);
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-lg-6 my-5'>
                    {/* <h4>User Card</h4>
                <DescriptionCard type='user'/> */}
                    {/* <div className=''>
                    <TextScroll text={'Text from lesson'}/>
                </div> */}
                </div>
                <div className={`col-12 col-lg-6 my-5 `}>
                    <div className={`${styles.outerShadow} p-2`}>
                        <div className='text-center'>
                            <TitleH6 title='Your Progress'/>
                        </div>
                        <TextBar flag='DescriptionCard' currentCount='17' text={`${50}%`}/>
                        <LineBar currentCount='50' maxCount='100'/>
                        <div className='container-fluid px-0 mt-2 mb-3'>
                            <div className={`row gx-0`}>
                                <div className={`${styles.step} ${styles.first}  col-4  ${step===1?styles.current:step>1?styles.done:null}`}>
                                    <span> Step 1: Ask yor question</span>
                                </div>
                                <div className={`${styles.step} ${styles.second} col-4 ${step===2?styles.current:step>2?styles.done:null}`}>
                                    <span>Step 2: Answer questions </span>
                                </div>
                                <div className={`${styles.step} ${styles.third} col-4 ${step===3?styles.current:step>3?styles.done:null}`}>
                                    <span > Step 3: Evaluate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='my-3'>
                        <Steps step={step}/>
                        <div className='d-flex justify-content-end mt-2' onClick={()=>{nextStep()}}>
                            <GreenBtn title='next ->'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnsweringQuestionsPage;