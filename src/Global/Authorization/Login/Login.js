import React from 'react';
import styles from './Login.module.css';
import {Form,Button,Row,Col} from "react-bootstrap";
import {GreenBtn} from "../../Components/Button/GreenBtn/GreenBtn";
import {OrangeBtn} from "../../Components/Button/OrangeBtn/OrangeBtn";


const Login = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                   Error
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
                <Form.Text className="text-muted">
                    Error
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Row className="g-2">
                    <Col md> <Form.Check type="checkbox" label="Check me out" /></Col>
                    <Col md> <p className={styles.authFormTxt}>Forgot your password?</p></Col>
                </Row>
            </Form.Group>
            <GreenBtn type="submit" title='Login'/>
        </Form>
    );
};

export default Login;
