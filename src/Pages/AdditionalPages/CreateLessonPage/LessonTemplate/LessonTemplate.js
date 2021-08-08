import React, {useRef, useState, useEffect} from 'react';
import global from '../../../../Global/Modules/Global.module.css';
import styles from './LessonTemplate.module.css';
import {Container} from "react-bootstrap";
import {TitleH6} from "../../../../Global/Components/Texts/Headers/TitleH6/TitleH6";
import InputTxt from "../InputTxt/InputTxt";
import {GreenBtn} from "../../../../Global/Components/Button/GreenBtn/GreenBtn";
import ImageBlock from "../ImageBlock/ImageBlock";

import image from '../../../../Assets/background/illiada.jpg';
import TextareaBlock from "../TextareaBlock/TextareaBlock";


const LessonTemplate = () => {

    const [coverIsHover, setCoverIsHover] = useHover();

    function useHover() {
        const [value, setValue] = useState(false);
        const ref = useRef(null);

        const handleMouseOver = () => setValue(true);
        const handleMouseOut = () => setValue(false);
        useEffect(
            () => {
                const node = ref.current;
                if (node) {
                    node.addEventListener("mouseover", handleMouseOver);
                    node.addEventListener("mouseout", handleMouseOut);
                    return () => {
                        node.removeEventListener("mouseover", handleMouseOver);
                        node.removeEventListener("mouseout", handleMouseOut);
                    };
                }
            },
            [ref.current]
        );
        return [ref, value];
    }



    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.WhiteShadowBlock}>
                <div className={styles.wrapper}>
                    <div className={styles.coverBlock} ref={coverIsHover}>
                        <div className={styles.cover}>
                            <div style={{opacity: `${(setCoverIsHover) ? '0': '1'}`}}>
                                <TitleH6 color='black' weight='900' title='1. Cover image:'/>
                            </div>
                            <div style={{position: 'absolute', opacity: `${(setCoverIsHover) ? '1': '0'}`}}>
                                <GreenBtn type='button' style={{color: '#F77D48'}} title='Add image'/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <TitleH6 color='black' weight='900' title='2. Add lesson Theme:'/>
                        <div className={styles.txt}>
                            <InputTxt placeholder='New Theme' type='header'/>
                        </div>

                        <div className={styles.txt}>
                            <InputTxt placeholder='New subtitle'/>
                        </div>

                        <ImageBlock image={image}/>

                        <div className={styles.txt}>
                            <TextareaBlock placeholder='New description'/>
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default LessonTemplate;
