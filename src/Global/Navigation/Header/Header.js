import React, {useState} from 'react';
import styles from './Header.module.css';
import {Nav, Navbar} from "react-bootstrap";
import logo from '../../../Assets/logo.png';
import burgerF from '../../../Assets/burger-false.png';
import burgerT from '../../../Assets/burger-true.png';
import avatar from '../../../Assets/avatar.png';
import {Link} from "react-router-dom";

const Header = () => {

    const [burgerBtn, setBurgerBtn] = useState(burgerF);

    const burgerClick = () => {
        if(burgerBtn === burgerF){
            setBurgerBtn(burgerT)
        }else{
            setBurgerBtn(burgerF);
        }
    }
    const loginClick = () =>{

    }

    return (
        <div className={`container-fluid ${styles.header}`}>
            <Navbar collapseOnSelect expand={`md`} className={`${styles.navBar}`}>
                <Navbar.Brand className={`col-3 col-md-2 ${styles.navBrand}`}>
                    <img src={logo} alt="logo"/>
                    <p>
                        <span>Online</span>
                        <span>Educational</span>
                        <span>System</span>
                    </p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={'responsive-navbar-nav'} className={`col-2 ${styles.navBarToggle}`}>
                    <img src={burgerBtn} onClick={burgerClick} alt="Burger button"/>
                </Navbar.Toggle>
                <Navbar.Collapse id={'responsive-navbar-nav'} className={` ${styles.navCollapse}`}>
                    <Nav className={``}>
                        <Link to={`/`}>Home</Link>
                        <Link to={`/courses`}>Courses</Link>
                        <Link to={`/about-us`}>About us</Link>
                        <Link to={`/contacts`}>Contacts</Link>
                    </Nav>
                </Navbar.Collapse>
                <div className={`col-2 ${styles.loginBtn}`} onClick={loginClick}>
                    <img src={avatar} alt="Avatar"/>
                    <h4>Login</h4>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;
