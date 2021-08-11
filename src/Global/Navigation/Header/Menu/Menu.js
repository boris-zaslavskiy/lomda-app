
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Logo from '../../Logo/Logo';
import Bar from '../../Bar/Bar';
import LoginHeader from '../LoginHeader/LoginHeader';
import global from '../../../Modules/Global.module.css';
import styles from '../Menu/Menu.module.css';
const Menu = () => {
    return (
        <div className={`p-0 my-5`}>
            <Row className={`d-flex align-items-center ${global.Wrapper}`}>
                <div className='col-3 p-0'>
                    <Logo position='header'/>
                </div>
                <div className={`col-6 text-center p-0`}>
                    <Bar position='header'/>
                </div>
                <div className={`col-3 p-0 ${styles.end}`}>
                    <LoginHeader/>
                </div>
            </Row>
        </div>
    );
};

export default Menu;