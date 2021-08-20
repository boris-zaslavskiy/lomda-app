import React, {useEffect, useState} from 'react';
import global from '../../../../Global/Modules/Global.module.css';
import styles from './LessonTemplate.module.css';
import {Container} from "react-bootstrap";

import {TitleH6} from "../../../../Global/Components/Texts/Headers/TitleH6/TitleH6";
import InputTxt from "../InputTxt/InputTxt";
import ImageBlock from "../ImageBlock/ImageBlock";
import TextareaBlock from "../TextareaBlock/TextareaBlock";

import useHover from "../../../../Hooks/useHover";
import {useSelector} from "react-redux";

import im from '../../../../Assets/background/illiada.jpg'

const LessonTemplate = () => {

    const activeLesson = useSelector(state => state.lessonStates.lesson);
    const [coverIsHover, setCoverIsHover] = useHover();
    const [currentLesson, setCurrentLesson] = useState(/*{
        id: '',
        theme: '',
        coverImage: '',
        article: [],
        classes: [],
        questions: [],
        start: '',
        end: '',
        status: 'save'
    }*/

        {
            id: '',
            required: [
                {theme: ''},
                {coverImage: ''},
                {classes: []},
                {questions1: {id: '1Q',text: ''}},
                {questions2: {id: '2Q',text: ''}},
                {questions3: {id: '3Q',text: ''}},
                {start: ''},
                {end: ''}
            ],
            article: [],
            status: 'save'
        });


    useEffect(() => {
        setCurrentLesson(activeLesson);
    },[activeLesson]);


    const handleChange = (e) => {
       // const value = e.target.value;
       /* const value =  '/static/media/illiada.1ccb6289.jpg';
        console.log(value)
        setCurrentLesson({...currentLesson, [currentLesson.coverImage]: value});*/
        console.log('click')
    }


    const article = currentLesson.article.map((item,index) => {
        if (item.type === 'subTitle'){
            return(
                <div className={styles.txt} key={item.id}>
                    <InputTxt placeholder='New subtitle' value={item.text} id={item.id} data={currentLesson}/>
                </div>
            )
        }else if(item.type === 'description'){
            return(
                <div className={styles.txt} key={item.id}>
                    <TextareaBlock placeholder='New description' value={item.text} styleText={item.style} id={item.id} data={currentLesson}/>
                </div>
            )
        }else{
            return (
                <ImageBlock image={item.path} index={index} key={item.id} id={item.id} data={currentLesson}/>
            )
        }
    });

    console.log(currentLesson.required)

    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.WhiteShadowBlock}>
                <div className={styles.wrapper}>

                    <div className={styles.coverBlock} ref={coverIsHover}
                         style={{background: `${(currentLesson.required[1].coverImage === '') ? '#E0E3EF': (`url("${currentLesson.required[1].coverImage}") no-repeat`)}`,
                             backgroundSize: `${(currentLesson.required[1].coverImage === '') ? '': ('100%')}`
                         }}>
                        <div className={styles.cover}>
                            <div style={{opacity: `${(setCoverIsHover) ? '0': '1'}`}}>
                                <TitleH6 color='black' weight='900' title='1. *Cover image:'/>
                            </div>

                            <div style={{position: 'absolute', opacity: `${(setCoverIsHover) ? '1': '0'}`}}>
                                <div className={styles.fileInput}>
                                    <input type="file" id="file" className={styles.file} onChange={handleChange}/>
                                    <label htmlFor="file">Add image</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.block}>
                        <TitleH6 color='black' weight='900' title='2. *Add lesson Theme:'/>
                        <div className={styles.txt}>
                            <InputTxt placeholder='New Theme' type='header' value={currentLesson.required[0].theme} data={currentLesson}/>
                        </div>

                        {article}
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default LessonTemplate;
