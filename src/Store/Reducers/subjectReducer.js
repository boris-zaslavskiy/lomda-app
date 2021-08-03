import {SET_STUDENT} from '../types'


const defaultState = {
    subjects: [
        { id: '100L', title: 'literature', idTeacher: '1t', idCurrentLesson: '1000L', lessons: [] },
        { id: '101B', title: 'biology', idTeacher: '2t', idCurrentLesson: '1001B', lessons: [] },
        { id: '102H', title: 'history', idTeacher: '3t', idCurrentLesson: '1002H', lessons: [] }
    ]
};


export const setTeacher = (students) => ({
    type: SET_STUDENT,
    payload: students
});


export default function teacherReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_STUDENT:
            return {
                ...state,
                students: action.payload
            }
        default:
            return state
    }
}


