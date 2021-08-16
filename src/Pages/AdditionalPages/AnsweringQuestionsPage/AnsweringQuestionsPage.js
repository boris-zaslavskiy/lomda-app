import React, {useEffect, useState} from 'react';
import {TextBar} from "../../../Global/Components/ProgressBar/TextBar/TextBar";
import {LineBar} from "../../../Global/Components/ProgressBar/LineBar/LineBar";
import styles from './AnsweringQuestionsPage.module.css';
import Steps from "./Steps/Steps";
import {GreenBtn} from "../../../Global/Components/Button/GreenBtn/GreenBtn";
import {TitleH6} from "../../../Global/Components/Texts/Headers/TitleH6/TitleH6";
import {questions} from "../../../Utils/constants";
import TextScroll from "../../../Global/Components/Texts/TextScroll/TextScroll";
import {DescriptionCard} from "../../../Global/Components/DescriptionCard/DescriptionCard";

const AnsweringQuestionsPage = () => {
    const [step, setStep] = useState(1);//number of step ----Lera
    const [count, setCount] = useState(1);//counter for checking  numbers of step ---Lera
    const [hide, setHide] = useState(false);//state for disabling button ---Lera
    const [marks, setMars] = useState({mark: []});//array for rates on step 2 and step 3  ----Lera 14.08
    const [popUp, setPopUp] = useState(false);//state for showing PopUp message ----Lera  14.08

    //14.08 edited function for recording the rating ----Lera
    const leaveMark = (valueMark)=>{
        let newMarkQ = marks;
        newMarkQ.mark.push(valueMark);
        setMars(newMarkQ);
        //condition for step 2  to hide PopUp message
        if(marks.mark.length===3){
            setPopUp(false);
            setHide(true);
            marks.mark.splice(0,3);
        }
    }

    //go to next step
    const nextStep = () => {
        setHide(false);//top to button and hide
        if(count>3){
            setStep(1);
            setCount(1);
        }else{
                setCount((prevCount) => prevCount + 1);
                setStep(count);

                //condition for step 3 to show PopUp message
                if(count===3 && marks.mark.length===0){
                    setPopUp(true);
                }
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
                        {/*<h4>User Card</h4>*/}
                        {/*<DescriptionCard type='user'/>*/}
                        {/*<div>*/}
                        {/*    <TextScroll text={'Text from lesson'}/>*/}
                        {/*</div>*/}
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
                        <Steps step={step}
                               getDisabled={setHide}
                               leaveMark={leaveMark}
                               popUp={popUp}
                               setPopUp={setPopUp}
                               marks={marks}
                        />
                        <div className={`d-flex justify-content-end mt-2 ${!hide?styles.hideButton:null}`}>
                            <GreenBtn title={step===3?'Finish':'Next ->'}
                                      clicked = {()=>{
                                        nextStep();
                                      }}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnsweringQuestionsPage;