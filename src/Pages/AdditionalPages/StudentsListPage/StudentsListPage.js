import React, {useEffect, useState} from 'react';
import global from '../../../Global/Modules/Global.module.css';
import styles from './StudentsListPage.module.css';
import {Container} from "react-bootstrap";

import {DescriptionCard} from "../../../Global/Components/DescriptionCard/DescriptionCard";
import {TitleH2} from "../../../Global/Components/Texts/Headers/TitleH2/TitleH2";
import {Table5Column} from "../../../Global/Components/Tables/Table5Column/Table5Column";
import {useDispatch, useSelector} from "react-redux";
import {Th_table} from "../../../Global/Components/Tables/Table5Column/Th_table/Th_table";


const StudentsListPage = () => {

    const dispatch = useDispatch();
    const currentClasses = useSelector(state => state.classStates.classes);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    }, []);


    const listClasses = currentClasses.map((item, index) => {
        return(
            <Table5Column
                key={index}
                className={item.className}
                studentsMaxCount={item.studentsMaxCount}
                studentsCount={item.studentsCount}
                students={currentClasses[index].students}/>
        )
    });

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
                    {
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
                    }
                </div>
            </div>
        </Container>
    );
};

export default StudentsListPage;
