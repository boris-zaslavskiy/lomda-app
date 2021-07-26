import React from 'react';
import avatar from '../../../../Assets/avatar.png';
import styles from './LoginHeader.module.css';

const LoginHeader = () => {
    return (
        <div className={`${styles.positionMenu}`}>
            <img src={avatar} alt="Avatar" className={`${styles.imageBurger}`}/>
            <h4 className='text-center'>Login</h4>
        </div>
    );
};

export default LoginHeader;