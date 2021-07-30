import {SET_CLASSES} from '../types'

const localStorage = window.localStorage;

const defaultState = {
    classes: [
        {
            className: '4A',
            studentsMaxCount: 23,
            studentsCount: 5,
            students: [
                {
                    name: 'Student1',
                    rate: '21',
                    class: '7B',
                    questions: '33',
                    evaluations: '15',
                }
                , {
                    name: 'Student2',
                    rate: '11',
                    class: '3A',
                    questions: '13',
                    evaluations: '35',
                }
                , {
                    name: 'Student3',
                    rate: '10',
                    class: '2A',
                    questions: '14',
                    evaluations: '28',
                }
            ]
        },
        {
            className: '3C',
            studentsMaxCount: 28,
            studentsCount: 19,
            students: [
                {
                    name: 'Student1',
                    rate: '21',
                    class: '7B',
                    questions: '33',
                    evaluations: '15',
                }
                , {
                    name: 'Student2',
                    rate: '11',
                    class: '3A',
                    questions: '13',
                    evaluations: '35',
                }
                , {
                    name: 'Student3',
                    rate: '10',
                    class: '2A',
                    questions: '14',
                    evaluations: '28',
                }
                , {
                    name: 'Student4',
                    rate: '2',
                    class: '5C',
                    questions: '20',
                    evaluations: '31',
                },
                {
                    name: 'Student5',
                    rate: '21',
                    class: '7B',
                    questions: '33',
                    evaluations: '15',
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


