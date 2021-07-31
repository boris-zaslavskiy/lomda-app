import {SET_CLASSES} from '../types'


const defaultState = {
    classes: [
        {
            id:11,
            className: '4A',
            studentsMaxCount: 23,
            studentsCount: 5,
            students: [
                {
                    id:1,
                    name: 'Student1',
                    rate: '21',
                    class: '7B',
                    questions: '33',
                    evaluations: '15',
                    chosen: false
                }
                , {
                id:2,
                    name: 'Student2',
                    rate: '11',
                    class: '3A',
                    questions: '13',
                    evaluations: '35',
                    chosen: false
                }
                , {
                id:3,
                    name: 'Student3',
                    rate: '10',
                    class: '2A',
                    questions: '14',
                    evaluations: '28',
                    chosen: false
                }
            ]
        },
        {
            id:22,
            className: '3C',
            studentsMaxCount: 28,
            studentsCount: 19,
            students: [
                {
                    id:4,
                    name: 'Student4',
                    rate: '21',
                    class: '7B',
                    questions: '33',
                    evaluations: '15',
                    chosen: false
                }
                , {
                id:5,
                    name: 'Student5',
                    rate: '11',
                    class: '3A',
                    questions: '13',
                    evaluations: '35',
                    chosen: false
                }
                , {
                id:6,
                    name: 'Student6',
                    rate: '10',
                    class: '2A',
                    questions: '14',
                    evaluations: '28',
                    chosen: false
                }
                , {
                id:7,
                    name: 'Student7',
                    rate: '2',
                    class: '5C',
                    questions: '20',
                    evaluations: '31',
                    chosen: false
                },
                {
                    id:8,
                    name: 'Student8',
                    rate: '21',
                    class: '7B',
                    questions: '33',
                    evaluations: '15',
                    chosen: false
                }
            ]
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


