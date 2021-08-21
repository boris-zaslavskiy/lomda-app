import React from 'react';
import styles from './PopUp.module.css';
import {Container} from "react-bootstrap";
import global from "../../Modules/Global.module.css";
import {GreenBtn} from "../Button/GreenBtn/GreenBtn";
import {OrangeBtn} from "../Button/OrangeBtn/OrangeBtn";
import {TitleH6} from "../Texts/Headers/TitleH6/TitleH6";

const PopUp = (props) => {

    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={styles.wrap}>
                <div className={styles.block}>
                    <div className={global.WhiteShadowBlock}>
                        <div style={{padding: '30px 0'}}>
                            <TitleH6 color='black' weight='700' title='You have added 3 new students to class 3A'/>
                            <div className={styles.row}>
                                <GreenBtn type='button' title='Confirm'/>
                                <div>
                                    <OrangeBtn type='button' title='Cancel' clicked={() => {props.closePopUp()}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export {PopUp};
