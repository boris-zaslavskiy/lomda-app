import React, {useEffect, useState} from 'react';
import global from '../../../Global/Modules/Global.module.css';
import {Container} from "react-bootstrap";
import {WelcomeSection} from "../../../Global/Components/Sections/WelcomeSection/WelcomeSection";
import TeachPage_Desktop from "./TeachPage_Desktop/TeachPage_Desktop";
import TeachPage_Mobile from "./TeachPage_Mobile/TeachPage_Mobile";

const TeacherPage = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);//current size of the browser window

    //set the current window width
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        //add an event to the global Window object to track window size changes --Lera
        window.addEventListener("resize", handleResize)

        /*return () => {
            window.removeEventListener("resize", handleResize)
        }*/
    }, [])


    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
                <WelcomeSection pageName='student' addBlock='progressBar'/>
            </div>

            <div className={global.GreyWrapper}>
                {
                    (windowWidth > 1020)?(
                        <TeachPage_Desktop/>
                    ):(
                        <TeachPage_Mobile/>
                    )
                }

            </div>

            <div className={global.Wrapper}>
                <div className={global.RowBlock}>
                    {/* previous lessons*/}
                </div>
            </div>
        </Container>
    );
};

export default TeacherPage;
