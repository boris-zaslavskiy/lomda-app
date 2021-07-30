import React, {useEffect, useState} from 'react';
import global from '../../../Global/Modules/Global.module.css';

import {Container} from "react-bootstrap";
import {WelcomeSection} from "../../../Global/Components/Sections/WelcomeSection/WelcomeSection";
import StPageDesktop from "./StPageDesktop/StPageDesktop";
import StPageMobile from "./StPageMobile/StPageMobile";
import PreviousLessons from "../PreviousLessons/PreviousLessons";


const StudentPage = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    }, []);


    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
                <WelcomeSection pageName='student' addBlock='progressBar'/>
            </div>
            <div className={global.GreyWrapper}>
                {
                    (windowWidth > 1020)?(
                        <StPageDesktop/>
                    ):(
                        <StPageMobile/>
                    )
                }
            </div>

            <div className={global.Wrapper}>
                <div className={global.RowBlock}>
                    <PreviousLessons/>
                </div>
            </div>
        </Container>
    );
};

export default StudentPage;
