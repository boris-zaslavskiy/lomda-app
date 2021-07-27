import React, {useEffect, useState} from 'react';
import {context} from '../../../Utils/Context';
import Menu from '../Header/Menu/Menu';
import MenuBurger from '../Header/MenuBurger/MenuBurger';
// import styles from '../Table2Column/Table2Column.module.css';


const Header = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);//current size of the browser window -- Lera
    const [openBurger, setOpenBurger] = useState(false);

    const burgerMenu = () => {
        openBurger ? closeBurgerMenu() : openBurgerMenu()
    }
    const closeBurgerMenu = () => {
        setOpenBurger(false)
        if (document.body.style.overflow === "hidden") {
            document.body.style.overflow = "auto"
        }
    }
    const openBurgerMenu = () => {
        setOpenBurger(true)
        if (document.body.style.overflow !== "hidden") {
            document.body.style.overflow = "hidden";
        }
    }
    //set the current window width
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
        //add an event to the global Window object to track window size changes --Lera
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <context.Provider value={
            {
                windowWidth, burgerMenu, openBurger,
            }
        }>

            {/* render the Menu component depending on the window size  -- Lera*/}
            {windowWidth < 768 ? <MenuBurger/> : <Menu/>

            }
        </context.Provider>
    );
};

export default Header;