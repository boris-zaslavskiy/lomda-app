import {SET_CLASSES} from '../types'


const defaultState = {
    /*classes: [
        {
            id:11,
            className: '4A',
            teacher: 'John Smith',
            currentLesson:
                {
                    id: '100',
                    title: 'Iliada Homer',
                    startLesson: '10.00.00',
                    endLesson: '23.00.00',
                    subject: 'World Literature',
                    status: 'active'
                },
            studentsMaxCount: 23,
            studentsCount: 5,
            students: [
                {
                    id:1,
                    name: 'Student1',
                    rate: '21',
                    class: '4A',
                    questions: '33',
                    evaluations: '15',
                    chosen: false,
                    firstTask: true,
                    secondTask: false
                }
                , {
                id:2,
                    name: 'Student2',
                    rate: '11',
                    class: '4A',
                    questions: '13',
                    evaluations: '35',
                    chosen: false,
                    firstTask: false,
                    secondTask: false
                }
                , {
                id:3,
                    name: 'Student3',
                    rate: '10',
                    class: '4A',
                    questions: '14',
                    evaluations: '28',
                    chosen: false,
                    firstTask: false,
                    secondTask: false
                }
            ]
        },
        {
            id:22,
            className: '3C',
            teacher: 'John Smith',
            currentLesson:
                {
                    id: '200',
                    title: 'Odyssey',
                    startLesson: '13.30.00',
                    endLesson: '20.30.00',
                    subject: 'World Literature',
                    status: 'active'
                },
            studentsMaxCount: 28,
            studentsCount: 19,
            students: [
                {
                    id:4,
                    name: 'Student4',
                    rate: '21',
                    class: '3C',
                    questions: '33',
                    evaluations: '15',
                    chosen: false,
                    firstTask: true,
                    secondTask: true
                }
                , {
                id:5,
                    name: 'Student5',
                    rate: '11',
                    class: '3C',
                    questions: '13',
                    evaluations: '35',
                    chosen: false,
                    firstTask: true,
                    secondTask: false
                }
                , {
                id:6,
                    name: 'Student6',
                    rate: '10',
                    class: '3C',
                    questions: '14',
                    evaluations: '28',
                    chosen: false,
                    firstTask: true,
                    secondTask: false
                }
                , {
                id:7,
                    name: 'Student7',
                    rate: '2',
                    class: '3C',
                    questions: '20',
                    evaluations: '31',
                    chosen: false,
                    firstTask: false,
                    secondTask: false
                },
                {
                    id:8,
                    name: 'Student8',
                    rate: '21',
                    class: '3C',
                    questions: '33',
                    evaluations: '15',
                    chosen: false,
                    firstTask: true,
                    secondTask: true
                }
            ]
        }
    ]*/

    classes: [
        {
            id: '10A',
            title: 'A1',
            students: [
                { id: '1s', firstName: 'Samuel', surname: 'Harryson'},
                { id: '3s', firstName: 'Ivy', surname: 'Redski'},
                { id: '4s', firstName: 'Alice', surname: 'Alice'},
                { id: '7s', firstName: 'Isabelle', surname: 'Belle'},
                { id: '8s', firstName: 'Leo', surname: 'Belle'}
            ],
            subjects: [
                { id: '100L', title: 'literature', idTeacher: '1t', idCurrentLesson: '1000L'},
                { id: '101B', title: 'biology', idTeacher: '2t', idCurrentLesson: '1001B' },
                { id: '102H', title: 'history', idTeacher: '3t', idCurrentLesson: '1002H' }
            ],
        },
        {
            id: '10B',
            title: 'B1',
            students: [
                { id: '5s', firstName: 'Alfie', surname: 'Alfie'},
                { id: '9s', firstName: 'Oliver', surname: 'Oliver'},
                { id: '10s', firstName: 'Archie', surname: 'Archie'},
                { id: '11s', firstName: 'Noah', surname: 'Noah'}
            ],
            subjects: [
                { id: '100L', title: 'literature', idTeacher: '1t', idCurrentLesson: '1000L'},
                { id: '101B', title: 'biology', idTeacher: '2t', idCurrentLesson: '1001B' }
            ],
        },
        {
            id: '20A',
            title: 'A2',
            students: [
                { id: '12s', firstName: 'Ryan', surname: 'Ryan'},
                { id: '13s', firstName: 'Harry', surname: 'Ryan'},
                { id: '14s', firstName: 'Zoe', surname: 'Zoe'},
                { id: '15s', firstName: 'Heidi', surname: 'Heidi'},
                { id: '16s', firstName: 'Scarlett', surname: 'Scarlett'}
            ],
            subjects: [
                { id: '101B', title: 'biology', idTeacher: '2t', idCurrentLesson: '2001B' },
                { id: '102H', title: 'history', idTeacher: '3t', idCurrentLesson: '2002H' }
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


