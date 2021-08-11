import React, {useState, useEffect} from 'react';
import global from '../../../../Global/Modules/Global.module.css';
import styles from './LessonOptions.module.css';
import {Container} from "react-bootstrap";
import {TitleH6} from "../../../../Global/Components/Texts/Headers/TitleH6/TitleH6";
import SearchInput from "../../../../Global/Components/SearchInput/SearchInput";
// import TimePicker from 'react-bootstrap-time-picker';
import {BorderBtn} from "../../../../Global/Components/Button/BorderBtn/BorderBtn";
import {IconBtn} from "../../../../Global/Components/Button/IconBtn/IconBtn";


const LessonOptions = () => {

    const [coverIsHover, setCoverIsHover] = useState();


    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={styles.wrapper}>

                <div className={styles.container}>
                    <div className={styles.col}>
                        <TitleH6 color='black' weight='900' title='3. *Choose the subject:'/>
                        <div className={styles.block}>
                            <SearchInput type='options'/>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <TitleH6 color='black' weight='900' title='4. *Choose the class:'/>
                        <div className={styles.block}>
                            <SearchInput type='options'/>
                        </div>
                    </div>
                </div>

                <div>
                    <TitleH6 color='black' weight='900' title='*Ask the first question:'/>
                    <div className={styles.block}>
                        <SearchInput type='search'/>
                    </div>
                </div>

                <div>
                    <TitleH6 color='black' weight='900' title='*Ask the second question:'/>
                    <div className={styles.block}>
                        <SearchInput type='search'/>
                    </div>
                </div>

                <div>
                    <TitleH6 color='black' weight='900' title='*Ask the third question:'/>
                    <div className={styles.block}>
                        <SearchInput type='search'/>
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
                            <BorderBtn color='#009DB3' title='Add'/>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <TitleH6 color='black' weight='900' title='Add image:'/>
                        <div className={styles.block}>
                            <p>image ( .jpg, .png )</p>
                            <BorderBtn color='#009DB3' title='Add'/>
                        </div>
                    </div>
                </div>

                <div>
                    <TitleH6 color='black' weight='900' title='Add description:'/>
                    <div className={styles.block}>
                        <p>description</p>
                        <div className={styles.blockBtn}>
                            <IconBtn color='white' border='transparent' backgroundColor='#F77D48' txt='Aa'/>
                            <IconBtn color='#818A8D' border='#818A8D' backgroundColor='transparent' txt='Aa'/>
                            <IconBtn color='#818A8D' border='#818A8D' backgroundColor='transparent' txt='Aa'/>
                        </div>
                        <BorderBtn color='#009DB3' title='Add'/>
                    </div>
                </div>


            </div>
        </Container>
    );
};

export default LessonOptions;
