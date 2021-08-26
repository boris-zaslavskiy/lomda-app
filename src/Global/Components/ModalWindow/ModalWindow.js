import React from 'react';
import styles from './ModalWindow.module.css';
import {Modal} from "react-bootstrap";
import {GreenBtn} from "../Button/GreenBtn/GreenBtn";
import {OrangeBtn} from "../Button/OrangeBtn/OrangeBtn";
import {TitleH5} from "../Texts/Headers/TitleH5/TitleH5";
import {TxtAdditionalGrey} from "../Texts/TextDescription/TxtAdditionalGrey/TxtAdditionalGrey";


const ModalWindow = (props) => {

    return (
        <Modal style={{backgroundColor: 'rgba( 0,0,0, 0.5)',backdropFilter: 'blur(10px)'}}
               show={props.show}
               backdrop="static"
               keyboard={false}>

            <div className={styles.block}>
                <div className={styles.line}>
                    <TitleH5 color='black' weight='900' title={props.data.title}/>
                </div>
                <div className={styles.line}>
                    <TxtAdditionalGrey txt={props.data.text}/>
                </div>
                {(props.data.type === 'form')?(
                    <div className={styles.line}>
                        <input className={`form-control`} type={'text'} placeholder='Class:'/>
                        <span> error</span>
                    </div>
                ): null}


                <div className={styles.row}>
                    <GreenBtn type='button' title='Confirm' clicked={() => {props.confirmData()}}/>
                    <OrangeBtn type='button' title='Cancel' clicked={() => {props.hide()}}/>
                </div>
            </div>
        </Modal>
    );
};

export {ModalWindow};
