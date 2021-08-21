import React, {useState, useRef} from 'react';
import styles from './HeaderCardItem.module.css';
import {TxtAdditionalGrey} from "../Texts/TextDescription/TxtAdditionalGrey/TxtAdditionalGrey";
import {TitleH3} from "../Texts/Headers/TitleH3/TitleH3";
import {TitleH4} from "../Texts/Headers/TitleH4/TitleH4";
import {TitleH5} from "../Texts/Headers/TitleH5/TitleH5";
import {TitleH6} from "../Texts/Headers/TitleH6/TitleH6";
import {Form} from 'react-bootstrap';
import {FaPencilAlt, FaCheck} from 'react-icons/fa';
import {BorderBtn} from "../Button/BorderBtn/BorderBtn";
import {Link} from "react-router-dom";


const HeaderCardItem = (props) => {


    const [name, setName] = useState(undefined);
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
                            <div className={styles.formBlock}>
                                <Form className={styles.form}>
                                    <input type='text' name='userName' value={(name === undefined)?(props.title):(name)} className={styles.input} onChange={handleChange}
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
                                <TxtAdditionalGrey txt={props.txt}/>
                            </div>
                        )
                    case 'user':
                        return (
                            <div className={styles.card}>
                                <div className={styles.header}>
                                    <TitleH3 title={props.title}/>
                                    <TxtAdditionalGrey txt={`Subject: ${props.txt}`}/>
                                </div>
                                <Link to={`/${props.url}`}>
                                    <BorderBtn type='button' title='Back to profile' color='#009DB3' />
                                </Link>

                            </div>
                        )
                    case 'lesson':
                        return (
                            <div>
                                <div className={styles.card}>
                                    <TitleH4 title={props.title}/>
                                </div>

                                <div className={styles.card}>
                                    <div className={styles.header}>
                                        <TxtAdditionalGrey txt='Teacher:'/>
                                        <TitleH6 title={props.teacher} color='black' weight='900'/>
                                    </div>
                                    <div className={styles.header}>
                                        <TxtAdditionalGrey txt='Active until:'/>
                                        <TitleH5 title={props.time} color='#F77D48' weight='900'/>
                                    </div>
                                </div>
                            </div>
                        )
                    case 'FAQ':
                        return (
                            <div>
                                <div className={styles.card}>
                                    <TitleH6 title={props.title} color='#F77D48' weight='900'/>
                                </div>

                                <div className={styles.card}>
                                    <div className={styles.header}>
                                        <TitleH4 title={props.question} color='black' weight='900'/>
                                    </div>
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
