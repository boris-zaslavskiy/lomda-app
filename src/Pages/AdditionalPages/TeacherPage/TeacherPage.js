import React, {useEffect, useState} from 'react';
import axios from "axios";
import global from '../../../Global/Modules/Global.module.css';
import {Container} from "react-bootstrap";

import {WelcomeSection} from "../../../Global/Components/Sections/WelcomeSection/WelcomeSection";
import TeachPageBlock from "./TeachPageBlock/TeachPageBlock";
import {useSelector} from "react-redux";



const TeacherPage = () => {

    const teachers = useSelector(state => state.teacherStates.teachers);
    const [currentTeacher, setCurrentTeacher] = useState({});


    useEffect(() => {
        let currentUrlArr = window.location.pathname.split("/");
        const teacherId = currentUrlArr[currentUrlArr.length - 1];

        teachers.map((item) => {
            if(item.id === teacherId){
                setCurrentTeacher(item)
            }
        });
    }, []);



//test ------------------------------------------------------------
    /*"proxy": "http://18.133.237.151:8000",*/

    useEffect(() => {
        axios.get('http://18.133.237.151:8000/api/courses/current',{crossdomain: true}

        /*{headers: {
                'Authorization': 'Token c54a830fbac13d286949ac69f554951382e8ce1d'
            }}*/
        )
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            });
    },[]);

//--------------------------------------------------------------------

//console.log(currentTeacher)

    return (
        <Container fluid className={global.ContainerFluid}>
            <div className={global.Wrapper}>
                <WelcomeSection pageName='teacher' data={currentTeacher} addBlock='progressBar'/>
            </div>

            <div className={global.GreyWrapper}>
                <TeachPageBlock data={currentTeacher}/>
            </div>
        </Container>
    );
};

export default TeacherPage;
