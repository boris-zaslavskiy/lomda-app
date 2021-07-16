import React from 'react';
import styles from './AboutUs.module.css';
import Header from "../../Global/Navigation/Header/Header";
import Footer from "../../Global/Navigation/Footer/Footer";
import abUsLogo from '../../Assets/AboutUsLogo.png';
import abUsLogoMD from '../../Assets/aboutUsLogoMD.png';
import abCard1 from '../../Assets/AboutCard1.png';
import abCard2 from '../../Assets/AboutCard2.png';
import abCard3 from '../../Assets/AboutCard3.png';
import iW1CardImg from '../../Assets/itWorks1CardImg.png';
import iW2CardImg from '../../Assets/itWorks2CardImg.png';
import iW3CardImg from '../../Assets/itWorks3CardImg.png';
import iW4CardImg from '../../Assets/itWorks4CardImg.png';
import signImg from '../../Assets/AbUsSignImg.png';
import iW1CardImgMd from '../../Assets/HIW1CardMdImage.png';
import iW3CardImgMd from '../../Assets/itWorks3CardImgMD.png';

const AboutUs = () => {
    return (
        <>
            <div className={styles.aboutUsContent}>
                <Header/>
                <div className={styles.aboutUs}>
                    <div className={styles.title}>
                        <div className={`d-none d-lg-block col-lg-1 ${styles.rectangles}`}>
                            <div className={styles.rect1}></div>
                            <div className={styles.rect2}></div>
                            <div className={styles.rect3}></div>
                        </div>
                        <h1>About <span>us</span></h1>
                    </div>
                        <p className={styles.p1}>Project LOMDA is a new interactive system that makes the education process more profound and amusing. It was developed to improve the level of creative and critical thinking of the pupils. The project was also designed as an instrument for creating motivation to achieve a higher level of education. For teachers it is a tool that helps to elevate their lesson to a new level, in order for their pupils to understand and learn the material more deeply and easily.</p>
                        <p className={styles.p2}>LOMDA allows the teacher to control the progress of each student online.</p>
                    <div className={styles.aboutUsLogo}>
                        <img className={`col-12 d-block d-md-none`} src={abUsLogo} alt="About us logo"/>
                        <img className={`col-12 d-none d-md-block`} src={abUsLogoMD} alt="About us logo"/>
                    </div>
                </div>
                <div className={styles.ourFeatures}>
                    <div className={styles.title}>
                        <div className={`d-none d-lg-block col-lg-1 ${styles.rectangles}`}>
                            <div className={styles.rect1}></div>
                            <div className={styles.rect2}></div>
                            <div className={styles.rect3}></div>
                        </div>
                        <h1>Our <span>features</span></h1>
                    </div>
                    <div className={styles.cards}>
                    <div className={`col-12 col-md-4 ${styles.card1}`}>
                        <img src={abCard1} alt="Card Image"/>
                        <p>Interactive</p>
                    </div>
                    <div className={`col-12 col-md-4 ${styles.card2}`}>
                        <img src={abCard2} alt="Card Image"/>
                        <p>A vast field  of opportunities for pupils and teachers</p>
                    </div>
                    <div className={`col-12 col-md-4 ${styles.card3}`}>
                        <img src={abCard3} alt="Card Image"/>
                        <p>It is simple for the teachers to control the learning progress</p>
                    </div>
                </div>
                </div>
                <div className={styles.howItWorks}>
                    <div className={styles.title}>
                        <div className={`d-none d-lg-block col-lg-1 ${styles.rectangles}`}>
                            <div className={styles.rect1}></div>
                            <div className={styles.rect2}></div>
                            <div className={styles.rect3}></div>
                        </div>
                        <h1>How <span>it works</span></h1>
                    </div>
                    <div className={styles.cards}>
                        <div className={styles.card1}>
                            <p>
                                The teacher uploads the material for the future lesson (text, audio, video)
                            </p>
                            <img className={`d-block d-md-none`} src={iW1CardImg} alt="First example image"/>
                            <img className={`d-none d-md-block`} src={iW1CardImgMd} alt="First example image"/>
                        </div>
                        <div className={styles.card2}>
                            <p>The pupil opens the home task, gets acquanted with it and performs the following activities:</p>
                            <ul>
                                <li><span>Makes up 1 deep question that requre full answers</span></li>
                                <li><span>Answers for 3 questions that require full answer</span></li>
                                <li><span>Estimates the quality of the questions that require full answers of other pupils</span></li>
                            </ul>
                            <img src={iW2CardImg} alt="Second example image"/>

                        </div>
                        <div className={styles.card3}>
                            <p>Each pupil has their own rating based on quality of his questions and answers. They can improve their level and it is visible to the teacher.</p>
                            <img className={`d-block d-md-none`} src={iW3CardImg} alt="Third example image"/>
                            <img className={`d-none d-md-block`} src={iW3CardImgMd} alt="Third example image"/>
                        </div>
                        <div className={styles.card4}>
                            <p>While preparing the main part of the lesson in the class, the teacher may use the most original questions and answers, that were written by the pupils in their home task.</p>
                            <img src={iW4CardImg} alt="Fourth example image"/>
                        </div>
                    </div>
                </div>
                <div className={styles.readyToStart}>
                    <div className={styles.title}>
                        <div className={`d-none d-lg-block col-lg-1 ${styles.rectangles}`}>
                            <div className={styles.rect1}></div>
                            <div className={styles.rect2}></div>
                            <div className={styles.rect3}></div>
                        </div>
                        <h1>Ready to <span>start?</span></h1>
                    </div>
                    <p>Sign in and take a unique opportunity to make the learning process more interactive with LOMDA.</p>
                    <div className={styles.signIn}>
                        <div className={styles.signBtn}>Sign in as a teacher</div>
                        <div className={styles.signBtn}>Sign in as a student</div>
                        <img src={signImg} alt="Sign-in Img"/>
                    </div>
                </div>
            </div>
            <Footer/>
            </>
    );

};

export default AboutUs;
