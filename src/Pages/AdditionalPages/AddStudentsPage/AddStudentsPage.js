import React, {useState} from 'react';
import styles from './AddStudentsPage.module.css';
import global from '../../../Global/Modules/Global.module.css';
import {Container} from "react-bootstrap";

import {DescriptionCard} from "../../../Global/Components/DescriptionCard/DescriptionCard";
import SearchInput from "../../../Global/Components/SearchInput/SearchInput";
import {Header} from "../../../Global/Components/Tables/Header/Header";
import {faPlus} from "@fortawesome/free-solid-svg-icons"
import AddForm from "./AddForm/AddForm";
import {ModalWindow} from "../../../Global/Components/ModalWindow/ModalWindow";
import {GreenBtn} from "../../../Global/Components/Button/GreenBtn/GreenBtn";


const AddStudentsPage = () => {

    const [arrStudent, setArrStudent] = useState([]);
    const [studentsCount, setStudentsCount] = useState(0);
    const [currentClass, setCurrentClass] = useState('');

    const [statusPopUp, setStatusPopUp] = useState(false);
    const [modalWindowData, setModalWindowData] = useState({
        title: '',
        text: '',
        type: ''
    });


    const addNewStudent = (value) => {
        setArrStudent([...arrStudent, arrStudent.push(value+1)]);
        setStudentsCount(arrStudent.length)
    }


    const deleteStudent = (data) => {
        arrStudent.map((item, index) => {
            if (item === data) {
                arrStudent.splice(index,1);
            }
        });
        setStudentsCount(arrStudent.length)
    }


    const changeStatusPopUp = (value, title, text, type) => {
        setStatusPopUp(value);
        setModalWindowData({
            title: title,
            text: text,
            type: type
        })
    }

    const confirmData = () => {
        console.log('confirmData')
        setStatusPopUp(false);
        setArrStudent([]);
    }

    const newStudents = arrStudent.map((item,index) => {
        if(arrStudent.length > 0){
            return(
                <AddForm
                    key={index}
                    item={item}
                    deleteStudent={deleteStudent}/>
            )
        }
    });

    return (
        <Container fluid className={global.ContainerFluid}>

            {(statusPopUp)?(<ModalWindow show={statusPopUp} hide={() => {changeStatusPopUp(false)}} confirmData={confirmData} data={modalWindowData}/>):null}

            <div className={global.Wrapper}>
                <div className={global.RowBlock}>

                    <div className={styles.col}>
                        <DescriptionCard type='user' title='John Smith' txt='Literature' url=''/>
                    </div>
                </div>
            </div>

            <div className={global.GreyWrapper}>
                <div className={global.Wrapper}>
                    <div className={global.RowBlock}>

                        <div className={styles.col}>
                            <div className={global.WhiteShadowBlock}>
                                <div className={styles.block}>
                                    <SearchInput data={[1,2,3]} title='Choose'/>
                                </div>
                            </div>
                        </div>

                        <div className={styles.col}>
                            <div style={{width: '48%'}}>
                                <Header title='3 - New Students' color='#009DB3' weight='700' radius='0.25rem'/>
                            </div>
                            <div  style={{width: '48%'}}>
                                <Header type='btn' title='Add student' icon={faPlus} color='#009DB3' radius='0.25rem' clicked={() => {addNewStudent(arrStudent.length)}}/>
                            </div>
                        </div>
                    </div>

                    {newStudents}

                    <div style={{margin: '20px 0 0'}}>
                        <GreenBtn type='button' title='Save' clicked={() => {changeStatusPopUp(true,'Added a new student:',`You have added ${studentsCount} new students to class ${currentClass}`,'user')}}/>
                    </div>

                </div>

            </div>
        </Container>
    );
};

export default AddStudentsPage;
