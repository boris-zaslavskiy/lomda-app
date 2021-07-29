import React, {useEffect, useState} from 'react';
import global from '../../../Global/Modules/Global.module.css';
import styles from './StudentsListPage.module.css';
import {Container} from "react-bootstrap";

import {DescriptionCard} from "../../../Global/Components/DescriptionCard/DescriptionCard";
import {TitleH2} from "../../../Global/Components/Texts/Headers/TitleH2/TitleH2";
import {Th_table} from "../../../Global/Components/Tables/Table5Column/Th_table/Th_table";
import {Tr_table_class_desktop} from "../../../Global/Components/Tables/Table5Column/Tr_table_class/desktop/Tr_table_class_desktop";
import {Tr_table_student_desktop} from "../../../Global/Components/Tables/Table5Column/Tr_table_student/desktop/Tr_table_student_desktop";
import {Tr_table_class_mobile} from "../../../Global/Components/Tables/Table5Column/Tr_table_class/mobile/Tr_table_class_mobile";
import {Tr_table_student_mobile} from "../../../Global/Components/Tables/Table5Column/Tr_table_student/mobile/Tr_table_student_mobile";


const StudentsListPage = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);//current size of the browser window

    //set the current window width
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        //add an event to the global Window object to track window size changes --Lera
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, []);


    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
               <TitleH2 titleType='h2' title='Students list'/>
                <div className={global.RowBlock}>
                    <div className={styles.col}>
                        <DescriptionCard type='user' title='Teacher' txt='Subject: World Literature'/>
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
                                <Th_table first='aaa' second='bbb'/>
                                <Tr_table_class_desktop/>
                                <div className={styles.panel}>
                                    <Tr_table_student_desktop/>
                                    <Tr_table_student_desktop/>
                                    <Tr_table_student_desktop/>
                                </div>
                            </div>
                        ):(
                            <div className={styles.panel}>
                                <Tr_table_class_mobile/>
                                <div style={{width: '100%'}}>
                                    <Tr_table_student_mobile/>
                                    <Tr_table_student_mobile/>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </Container>
    );
};

export default StudentsListPage;
