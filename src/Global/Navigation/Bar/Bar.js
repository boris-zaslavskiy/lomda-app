import React, {useEffect, useState} from 'react';
import {NavLink, useLocation} from "react-router-dom";
import styles from '../Bar/Bar.module.css';


const Bar = ({position}) => {

    const [page, setPage] = useState('login');

    let location = useLocation();

    useEffect(() => {
        if(location.pathname === '/login' || location.pathname === '/sign-in'){
            setPage(location.pathname);
        }
    }, [location]);


    return (
        <div
            className={`${position === 'burger' ? styles.navBurger : position === 'footer' ? styles.navFooter : `${styles.navHeader}`} `}>
            <NavLink exact to={page} activeStyle={position === 'header' ? {color: '#009DB3', borderBottom: '3px solid #009DB3'} : null}>Home</NavLink>
            <NavLink exact to={'/about-us'} activeStyle={position === 'header' ? {color: '#009DB3', borderBottom: '3px solid #009DB3'} : null}>About us</NavLink>
            <NavLink exact to={'/contacts'} activeStyle={position === 'header' ? {color: '#009DB3', borderBottom: '3px solid #009DB3'} : null}>Contacts</NavLink>
        </div>
    );
};

export default Bar;