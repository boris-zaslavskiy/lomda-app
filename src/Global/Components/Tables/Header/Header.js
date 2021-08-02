import React, {useEffect, useState} from 'react';
import styles from './Header.module.css';
import {TitleH5} from "../../Texts/Headers/TitleH5/TitleH5";
import {BorderBtn} from "../../Button/BorderBtn/BorderBtn";
import {IconBtn} from "../../Button/IconBtn/IconBtn";

const Header = (props) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    }, []);

    return (
        <div className={styles.headerBlock} style={{backgroundColor: `${props.color}`, borderRadius: `${props.radius}`}}>
            {(props.type === 'btn')?(
                (windowWidth > 770)?(
                    <BorderBtn title={props.title} color='white' clicked={props.clicked}/>
                ):(
                    <IconBtn icon={props.icon}
                             color='white'
                             border='white'
                             backgroundColor='transparent'
                             clicked={props.clicked}/>
                    )
            ):(
                <TitleH5 title={props.title} color='white' weight={props.weight}/>
            )}
        </div>
    );
};

export {Header};
