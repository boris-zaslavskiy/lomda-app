import React, {useState} from 'react';
import global from '../../../../Global/Modules/Global.module.css';
import styles from './LessonOptions.module.css';
import {Container} from "react-bootstrap";

import {TitleH6} from "../../../../Global/Components/Texts/Headers/TitleH6/TitleH6";
import SearchInput from "../../../../Global/Components/SearchInput/SearchInput";
import {BorderBtn} from "../../../../Global/Components/Button/BorderBtn/BorderBtn";
import {IconBtn} from "../../../../Global/Components/Button/IconBtn/IconBtn";

import {useDispatch, useSelector} from "react-redux";
import {setLesson} from "../../../../Store/Reducers/lessonReducer";


const LessonOptions = () => {

    const [textStyle, setTextStyle] = useState('');
    const [fontStyle, setFontStyle] = useState({
        regular: true,
        underline: false,
        bold: false
    });
    const dispatch = useDispatch();
    const currentLesson = useSelector(state => state.lessonStates.lesson);


    const changeStyleDescription = (value) => {
        if(value === 'regularText'){
            setTextStyle('regular');
            setFontStyle({
                regular: true,
                underline: false,
                bold: false
            });
        }else if(value === 'boldText'){
            setTextStyle('bold');
            setFontStyle({
                regular: false,
                underline: false,
                bold: true
            });
        }else{
            setTextStyle('underline');
            setFontStyle({
                regular: false,
                underline: true,
                bold: false
            });
        }
    };


    const addData = (type) => {
        let newItem = {};
        let index;
        if (currentLesson !== {}){
            index = currentLesson.article.length + 1 + '';
        }
        if(type === 'subTitle'){
            newItem = {id: index, type: 'subTitle', text: ''};
        }else if(type === 'description'){
            newItem = {id: index, type: 'description', text: '', style: textStyle};
        }else{
            newItem =  {id: index, type: 'image', path: '/static/media/illiada.1ccb6289.jpg', alt: 'illiada'};
        }

        currentLesson.article.push(newItem);
        dispatch(setLesson({currentLesson, article: currentLesson.article}));
    }


    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={styles.wrapper}>

                <div className={styles.container}>
                    <div className={styles.col}>
                        <TitleH6 color='black' weight='900' title='3. *Choose the subject:'/>
                        <div className={styles.block}>
                            <SearchInput data={[1,2,3]} title='Choose'/>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <TitleH6 color='black' weight='900' title='4. *Choose the class:'/>
                        <div className={styles.block}>
                            <SearchInput data={[1,2,3]} title='Choose'/>
                        </div>
                    </div>
                </div>

                <div>
                    <TitleH6 color='black' weight='900' title='*Ask the first question:'/>
                    <div className={styles.block}>
                        <SearchInput title='save'/>
                    </div>
                </div>

                <div>
                    <TitleH6 color='black' weight='900' title='*Ask the second question:'/>
                    <div className={styles.block}>
                        <SearchInput title='save'/>
                    </div>
                </div>

                <div>
                    <TitleH6 color='black' weight='900' title='*Ask the third question:'/>
                    <div className={styles.block}>
                        <SearchInput title='save'/>
                    </div>
                </div>

                <div className={styles.container}>
                    <div className={styles.col}>
                        <TitleH6 color='black' weight='900' title='5. *Start:'/>
                        <div className={styles.block}>
                            <input className={styles.calendar} style={{color: '#009DB3', border: '2px solid #009DB3'}} type='date' required/>
                            <input className={styles.calendar} style={{color: '#009DB3', border: '2px solid #009DB3'}} type='time' required/>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <TitleH6 color='black' weight='900' title='6. *End:'/>
                        <div className={styles.block}>
                            <input className={styles.calendar} style={{color: '#F77D48', border: '2px solid #F77D48'}} type='date' required/>
                            <input className={styles.calendar} style={{color: '#F77D48', border: '2px solid #F77D48'}} type='time' required/>
                        </div>
                    </div>
                </div>

                <div className={styles.container}>
                    <div className={styles.col}>
                        <TitleH6 color='black' weight='900' title='Add subtitle:'/>
                        <div className={styles.block}>
                            <TitleH6 color='black' weight='900' title='Subtitle'/>
                            <BorderBtn color='#009DB3' title='Add' clicked={() => {addData('subTitle')}}/>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <TitleH6 color='black' weight='900' title='Add image:'/>
                        <div className={styles.block}>
                            <p>image ( .jpg, .png )</p>
                            <BorderBtn color='#009DB3' title='Add' clicked={() => {addData('image')}}/>
                        </div>
                    </div>
                </div>

                <div>
                    <TitleH6 color='black' weight='900' title='Add description:'/>
                    <div className={styles.block}>
                        <p>description</p>
                        <div className={styles.blockBtn}>
                            <IconBtn color={(fontStyle.regular)?('white'):('#818A8D')} border={(fontStyle.regular)?('transparent'):('#818A8D')} backgroundColor={(fontStyle.regular)?('#F77D48'):('transparent')}
                                     txt='Aa' clicked={() => {changeStyleDescription('regularText')}}/>
                            <IconBtn color={(fontStyle.underline)?('white'):('#818A8D')} border={(fontStyle.underline)?('transparent'):('#818A8D')} backgroundColor={(fontStyle.underline)?('#F77D48'):('transparent')}
                                     txt='Aa' clicked={() => {changeStyleDescription('underlinedText')}}/>
                            <IconBtn color={(fontStyle.bold)?('white'):('#818A8D')} border={(fontStyle.bold)?('transparent'):('#818A8D')} backgroundColor={(fontStyle.bold)?('#F77D48'):('transparent')}
                                     txt='Aa' clicked={() => {changeStyleDescription('boldText')}}/>
                        </div>
                        <BorderBtn color='#009DB3' title='Add' clicked={() => {addData('description')}}/>
                    </div>
                </div>


            </div>
        </Container>
    );
};

export default LessonOptions;
