import {SET_CLASSES} from '../types'


const defaultState = {

    classes: [
        {
            id: '10A',
            title: 'A1',
            students: [
                { id: '1s', firstName: 'Samuel', surName: 'Harryson', rating: 17, chosen: false},
                { id: '3s', firstName: 'Ivy', surName: 'Redski', rating: 21, chosen: false},
                { id: '4s', firstName: 'Alice', surName: 'Alice', rating: 16, chosen: false},
                { id: '7s', firstName: 'Isabelle', surName: 'Belle', rating: 17, chosen: false},
                { id: '8s', firstName: 'Leo', surName: 'Belle', rating: 25, chosen: false}
            ],
            subjects: [
                { id: '100L', title: 'literature', idTeacher: '1t', nameTeacher: 'Ned Stark', idCurrentLesson: '1000L' },
                { id: '101B', title: 'biology', idTeacher: '2t', nameTeacher: 'Jon Snow', idCurrentLesson: '1000B' },
                { id: '102H', title: 'history', idTeacher: '3t', nameTeacher: 'Oscar Stark', idCurrentLesson: '1000H' }
            ],
        },
        {
            id: '10B',
            title: 'B1',
            students: [
                { id: '5s', firstName: 'Alfie', surName: 'Alfie', rating: 20, chosen: false},
                { id: '9s', firstName: 'Oliver', surName: 'Oliver', rating: 15, chosen: false},
                { id: '10s', firstName: 'Archie', surName: 'Archie', rating: 17, chosen: false},
                { id: '11s', firstName: 'Noah', surName: 'Noah', rating: 17, chosen: false}
            ],
            subjects: [
                { id: '100L', title: 'literature', idTeacher: '1t', nameTeacher: 'Ned Stark', idCurrentLesson: '1000L' },
                { id: '101B', title: 'biology', idTeacher: '2t', nameTeacher: 'Jon Snow', idCurrentLesson: '1000B' }
            ],
        },
        {
            id: '20A',
            title: 'A2',
            students: [
                { id: '12s', firstName: 'Ryan', surName: 'Ryan', rating: 14, chosen: false},
                { id: '13s', firstName: 'Harry', surName: 'Ryan', rating: 18, chosen: false},
                { id: '14s', firstName: 'Zoe', surName: 'Zoe', rating: 20, chosen: false},
                { id: '15s', firstName: 'Heidi', surName: 'Heidi', rating: 23, chosen: false},
                { id: '16s', firstName: 'Scarlett', surName: 'Scarlett', rating: 15 , chosen: false}
            ],
            subjects: [
                { id: '101B', title: 'biology', idTeacher: '2t', nameTeacher: 'Jon Snow', idCurrentLesson: '1000B' },
                { id: '102H', title: 'history', idTeacher: '3t', nameTeacher: 'Oscar Stark', idCurrentLesson: '1000H' }
            ],
        }
    ]
};


export const setClasses = (classes) => ({
    type: SET_CLASSES,
    payload: classes
});


export default function classReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_CLASSES:
            return {
                ...state,
                classes: action.payload
            }
        default:
            return state
    }
}


