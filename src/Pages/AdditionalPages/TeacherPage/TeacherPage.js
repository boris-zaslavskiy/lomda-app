import React, {useEffect, useState} from 'react';
import global from '../../../Global/Modules/Global.module.css';
import {Container} from "react-bootstrap";
import {WelcomeSection} from "../../../Global/Components/Sections/WelcomeSection/WelcomeSection";
import TeachPageDesktop from "./TeachPageDesktop/TeachPageDesktop";
import TeachPageMobile from "./TeachPageMobile/TeachPageMobile";

const TeacherPage = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    }, [])


    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
                <WelcomeSection pageName='student' addBlock='progressBar'/>
            </div>

            <div className={global.GreyWrapper}>
                {
                    (windowWidth > 1020)?(
                        <TeachPageDesktop/>
                    ):(
                        <TeachPageMobile/>
                    )
                }
            </div>
        </Container>
    );
};

export default TeacherPage;
