import axios from "axios";
import {getAllTeachers, getTeacherById} from "../Reducers/teacherReducer";


const saveDataByType = (type, anchor, dispatch,data) => {
    switch (type) {
        case 'teacher':
            if(anchor === 'GET_DATA_BY_ID'){
                dispatch(getTeacherById(data));
            }else{
                dispatch(getAllTeachers(data));
            }
        break;

        case 'student':
            if(anchor === 'GET_DATA_BY_ID'){
               // dispatch(getTeacherById(data));
            }else{
               // dispatch(getAllTeachers(data));
            }
        break;

        case 'class':
            if(anchor === 'GET_DATA_BY_ID'){
                // dispatch(getTeacherById(data));
            }else{
                // dispatch(getAllTeachers(data));
            }
        break;

        case 'lesson':
            if(anchor === 'GET_DATA_BY_ID'){
                // dispatch(getTeacherById(data));
            }else{
                // dispatch(getAllTeachers(data));
            }
        break;
    }
}


export const getData = (type, url) => {
    return (dispatch) => {
        axios.get(url)
            .then(res => {
                console.log(res.data)
                saveDataByType(type, 'GET_ALL_DATA', dispatch, res.data)
            })
            .catch(err => {
                console.log(err)
            });
    }
};


export const getDataById = (type, url, id) => {
    return (dispatch) => {
        axios.get(`${url}/${id}`)
            .then(res => {
                console.log(res.data)
                saveDataByType(type,'GET_DATA_BY_ID', dispatch, res.data)
            })
            .catch(err => {
                console.log(err)
            });
    }
};


export const addData = (type, url, body) => {

};


export const deleteDataById = (type, url, id) => {

};