import React, {useEffect, useState} from 'react';
import global from '../../../Global/Modules/Global.module.css';
import styles from './StudentsListPage.module.css';
import {Container} from "react-bootstrap";

import {DescriptionCard} from "../../../Global/Components/DescriptionCard/DescriptionCard";
import {TitleH2} from "../../../Global/Components/Texts/Headers/TitleH2/TitleH2";
import {Table5Column} from "../../../Global/Components/Tables/Table5Column/Table5Column";
import {useDispatch, useSelector} from "react-redux";
import {Th_table} from "../../../Global/Components/Tables/Table5Column/Th_table/Th_table";
import {TitleH6} from "../../../Global/Components/Texts/Headers/TitleH6/TitleH6";

const StudentsListPage = () => {

    const dispatch = useDispatch(); //not remember remove
    const arrayClasses = useSelector(state => state.classStates.classes);
    const [currentClasses, setCurrentClasses] = useState(arrayClasses);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    }, []);


    const deleteClass = (id) => {
        let currentClassId = id;
        let arrClass = [];
        currentClasses.map((item,index) => {
            if(item.id === currentClassId){
                setCurrentClasses(arrClass);
                //dispatch(setClasses(currentClasses));
            }else{
                arrClass.push(item);
                setCurrentClasses(arrClass);
            }
        });
    };


    let listClasses;
    if(currentClasses.length > 0){
        listClasses = currentClasses.map((item, index) => {
            return(
                <Table5Column
                    key={item.id}
                    id={item.id}
                    currentLesson={item.currentLesson.id}
                    className={item.className}
                    studentsMaxCount={item.studentsMaxCount}
                    studentsCount={item.studentsCount}
                    students={arrayClasses[index].students}
                    deleteClass={() => {deleteClass(item.id)}}
                />
            )
        });
    }


    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
               <TitleH2 titleType='h2' title='Students list'/>
                <div className={global.RowBlock}>
                    <div className={styles.col}>
                        <DescriptionCard type='user' title='Teacher' txt='Subject: World Literature' url='teacher'/>
                    </div>

                    <div className={styles.col}>
                        {/* btn add new class */}
                    </div>

                </div>
            </div>

            <div className={global.GreyWrapper}>
                <div className={global.Wrapper}>
                    {(currentClasses.length === 0)?(
                        <div style={{ textAlign: 'center'}}>
                            <TitleH6 title='The class list is empty. Please add your first class.'/>
                        </div>
                    ):(
                        (windowWidth > 650)?(
                            <div>
                                <Th_table/>
                                {listClasses}
                            </div>
                        ):(
                            <div style={{width: '100%'}}>
                                {listClasses}
                            </div>
                        )
                    )}
                </div>
            </div>
        </Container>
    );
};

export default StudentsListPage;
