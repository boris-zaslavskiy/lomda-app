
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Logo from '../../Logo/Logo';
import Bar from '../../Bar/Bar';
import LoginHeader from '../LoginHeader/LoginHeader';
const Menu = () => {
    return (
        <Container className='p-0 mt-5 mb-5'>
            <Row>
                <div className='col-3 p-0'>
                    <Logo position='header'/>
                </div>
                <div className={`col-7 text-center p-0`}>
                    <Bar position='header'/>
                </div>
                <div className='col-2 p-0 d-flex align-items-center'>
                    <LoginHeader/>
                </div>
            </Row>
        </Container>
    );
};

export default Menu;