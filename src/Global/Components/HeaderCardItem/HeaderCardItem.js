import React, {useState, useRef} from 'react';
import styles from './HeaderCardItem.module.css';
import {TxtAdditionalGrey} from "../Texts/TextDescription/TxtAdditionalGrey/TxtAdditionalGrey";
import {TitleH3} from "../Texts/Headers/TitleH3/TitleH3";
import {Form} from 'react-bootstrap';
import {FaPencilAlt, FaCheck} from 'react-icons/fa';
import {GreenBtn} from "../Button/GreenBtn/GreenBtn";


const HeaderCardItem = (props) => {

    const [name, setName] = useState('Marco Botton');
    const [statusChange, setStatusChange] = useState(false);

    const inputRef = useRef(null);


    const handleSubmit = async () => {//the function sends the changed data to the database
        setStatusChange(false);
        let newName = name; //new value for the database - Alina  (put request)
    }

    const handleChange = (e) => {//the function tracks changes to the input
        setName(e.target.value);
        setStatusChange(true);
    }

    const handleFocus = () => { //the function changes the state and thus changes the button
        setStatusChange(true);
    }

    const setCurrentInput = () => {  //the function allows editing the input
        setStatusChange(true);
        inputRef.current.focus(); //makes autofocus on input
    }


//h3, TxtAdditionalGrey, defaultValue - changes depending on the props.  - Alina

    return (
        <div>
            {(() => {
                switch (props.type) {
                    case 'form':
                        return (
                            <div>
                                <Form className={styles.form}>
                                    <input name='userName' value={name} className={styles.input} onChange={handleChange}
                                           ref={inputRef} onFocus={handleFocus}  style={{borderBottom: `${(statusChange)?('3px solid #F77D48'):('3px solid  #E0E3EF')}` }} />
                                    <div>
                                        {(statusChange) ?
                                            (
                                                <button className={styles.btn} type='button' style={{color: '#F77D48'}}
                                                        onClick={handleSubmit}><FaCheck/></button>
                                            ) : (
                                                <button className={styles.btn} type='button' onClick={setCurrentInput}>
                                                    <FaPencilAlt/></button>
                                            )}
                                    </div>
                                </Form>
                                <TxtAdditionalGrey txt='56 points - 45 points avg at class'/>
                            </div>
                        )
                    case 'user':
                        return (
                            <div className={styles.card}>
                                <div className={styles.header}>
                                    <TitleH3 title='User Users'/>
                                    <TxtAdditionalGrey txt='56 points - 45 points avg at class'/>
                                </div>
                                <GreenBtn type='button' title='Back to profile'/>
                            </div>
                        )
                    case 'lesson':
                        return (
                            <div className={styles.card}>
                                <TitleH3 title='lesson'/>
                                <div>

                                </div>
                            </div>
                        )
                    default:
                        return (
                            <div/>
                        )
                }
            })()}
        </div>
    );
};

export {HeaderCardItem};
