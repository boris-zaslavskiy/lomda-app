
import React from 'react';
import {Container} from "react-bootstrap";
import AboutUsSection from "./AboutUsSection/AboutUsSection";
import HowItWorksSection from "./HowItWorksSection/HowItWorksSection";
import OurFeaturesSection from "./OurFeaturesSection/OurFeaturesSection";
import ReadyToStartSection from "./ReadyToStartSection/ReadyToStartSection";


const AboutUs = () => {
    return (
       <Container fluid>
           <AboutUsSection/>
           <OurFeaturesSection/>
           <HowItWorksSection/>
           <ReadyToStartSection/>
       </Container>
    );

};

export default AboutUs;
