import React, {useState} from 'react';
import avatar from '../../../../Assets/users/avatarLogin.png';
import styles from './LoginHeader.module.css';
import {FaSignOutAlt} from "react-icons/fa";
import { user } from '../../../../Utils/constants';

const LoginHeader = () => {
    //flag that the user is logged into the account
    const [login, setLogin] = useState(false)
    const handleClickLogin = () =>{
        setLogin(true);
    }
    const handleClickLogout = () =>{
        setLogin(false);
    }
    return (

                <div className={`${styles.positionMenu}`}>
                    <img src={login?user[0].avatar:avatar} alt="Avatar" className={`${styles.imageBurger}`}/>
                    <h4 className='ms-2' onClick={()=>handleClickLogin()}>{login?`${user[0].name} ${user[0].last_name}`:'Login'}</h4>
                    <div className={`ms-1 ${login?null:`${styles.show}`}`} onClick={()=>handleClickLogout()}>
                        <FaSignOutAlt style={{ fontSize: 20, color: '#007BA4' }}/>
                    </div>
                </div>

    );
};

export default LoginHeader;