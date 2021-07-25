import React from 'react';
import GlobalStyles from '../../Global/Modules/Global.module.css'
import {Container} from "react-bootstrap";
import AboutUsSection from "./AboutUsSection/AboutUsSection";
import Header from "../../Global/Navigation/Header/Header";
import HowItWorksSection from "./HowItWorksSection/HowItWorksSection";
import OurFeaturesSection from "./OurFeaturesSection/OurFeaturesSection";
import ReadyToStartSection from "./ReadyToStartSection/ReadyToStartSection";

const AboutUs = () => {
    return (
       <Container fluid>
           <Header/>
           <AboutUsSection/>
           <OurFeaturesSection/>
           <HowItWorksSection/>
           <ReadyToStartSection/>
       </Container>
    );

};

export default AboutUs;
