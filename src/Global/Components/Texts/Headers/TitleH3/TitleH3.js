import React, {useState, useEffect, useRef} from 'react';
import styles from './TitleH3.module.css';
import {TxtAdditionalGrey} from "../../TextDescription/TxtAdditionalGrey/TxtAdditionalGrey";

import {Form, Row, Col} from "react-bootstrap";
import {FaPencilAlt, FaCheck} from "react-icons/fa";

const TitleH3 = (props) => {

    const [name, setName] = useState('Marco Botton');
    const [change, setChange] = useState(false);

    const inputRef = useRef(null);

    const handleSubmit = async (e) => {
        setChange(false);
        console.log('handleSubmit')
    }

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleFocus = (e) => {
        setChange(true);
      //  inputRef.current.focus();
        console.log(change)
    }

//h3, TxtAdditionalGrey, defaultValue - changes depending on the props.  - Alina
    return (
        <div>
            {(props.type === 'form') ? (
                <div>
                    {(change) ?
                        (
                            <Form className={styles.form}>
                                <input name='userName' value={name} className={styles.input} onChange={handleChange} ref={inputRef}/>
                                <button className={styles.btn} type='button' onClick={handleSubmit}><FaCheck/></button>
                            </Form>
                        ) :
                        (
                            <div className={styles.block}>
                                <h3>{name}</h3>
                                <button className={styles.btn} type='button' onClick={handleFocus}><FaPencilAlt/></button>
                            </div>
                        )
                    }
                    <TxtAdditionalGrey txt='56 points - 45 points avg at class'/>
                </div>
            ) : (
                <div>
                    <h3>Marco Botton</h3>
                    <TxtAdditionalGrey txt='56 points - 45 points avg at class'/>
                </div>
            )}

        </div>
    );
};

export {TitleH3};
