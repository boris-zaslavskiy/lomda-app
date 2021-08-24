import React, {useEffect, useState} from 'react';
import {context} from '../../../Utils/Context';
import Menu from '../Header/Menu/Menu';
import MenuBurger from '../Header/MenuBurger/MenuBurger';
import useWidth from "../../../Hooks/useWidth";

const Header = () => {
    const windowWidth = useWidth();//current size of the browser window -- Lera
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