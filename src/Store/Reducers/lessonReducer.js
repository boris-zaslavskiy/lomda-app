import {SET_LESSON} from '../types'


const defaultState = {

   /* lesson:
        {
            id: '1000L',
            theme: 'The illiada',
            coverImage: '/static/media/illiada.1ccb6289.jpg',
            article: [
                {id: '1', type: 'subTitle', text: 'Trojan War'},
                {id: '2', type: 'description', text: 'As with the Iliad, the poem is divided into 24 books. It follows the Greek hero Odysseus, king of Ithaca, and his journey home after the Trojan War', style: 'bold'},
                {id: '3', type: 'subTitle', text: 'Attic Greek'},
                {id: '4', type: 'image', path: '/static/media/illiada.1ccb6289.jpg', alt: 'illiada'},
                {id: '5', type: 'description', text: 'After the war itself, which lasted ten years, his journey lasted for ten additional years, during which time he encountered many perils and all his crew mates were killed.', style: 'regular'},
                {id: '6', type: 'description', text: ' In his absence, Odysseus ories themselves formed as part of a long oral tradition.', style: 'underline'}
            ],
            classes: [{id: '10A',title: 'A1'},{id: '10B',title: 'B1'}],
            questions: [{id: '1Q',text: ''},{id: '2Q',text: ''}, {id: '3Q',text: ''}],
            start: '02.03.2021',
            end: '01.05.2021',
            status: 'save'
        }*/

    lesson:
        {
            id: '1000L',
            required: [
                {theme: 'The illiada'},
                {coverImage: '/static/media/illiada.1ccb6289.jpg'},
                {classes: [{id: '10A',title: 'A1'},{id: '10B',title: 'B1'}],},
                {questions1: {id: '1Q',text: ''}},
                {questions2: {id: '2Q',text: ''}},
                {questions3: {id: '3Q',text: ''}},
                {start: '02.03.2021'},
                {end: '01.05.2021'}
                ],
            article: [
                {id: '1', type: 'subTitle', text: 'Trojan War'},
                {id: '2', type: 'description', text: 'As with the Iliad, the poem is divided into 24 books. It follows the Greek hero Odysseus, king of Ithaca, and his journey home after the Trojan War', style: 'bold'},
                {id: '3', type: 'subTitle', text: 'Attic Greek'},
                {id: '4', type: 'image', path: '/static/media/illiada.1ccb6289.jpg', alt: 'illiada'},
                {id: '5', type: 'description', text: 'After the war itself, which lasted ten years, his journey lasted for ten additional years, during which time he encountered many perils and all his crew mates were killed.', style: 'regular'},
                {id: '6', type: 'description', text: ' In his absence, Odysseus ories themselves formed as part of a long oral tradition.', style: 'underline'}
            ],
            status: 'save'
        }
};


export const setLesson = (lesson) => ({
    type: SET_LESSON,
    payload: lesson
});


export default function classReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_LESSON:
            return {
                ...state,
                lesson: action.payload
            }
        default:
            return state
    }
}


