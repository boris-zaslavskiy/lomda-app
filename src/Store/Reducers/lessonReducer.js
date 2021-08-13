import {SET_LESSON} from '../types'


const defaultState = {

    lesson:
        {
            id: '',
            theme: '',
            coverImage: '',
            article: [
                {type: 'subTitle', text: ''},
                {type: 'description', text: '', style: 'bold'},
                {type: 'subTitle', text: ''},
                {type: 'image', path: '', alt: ''},
                {type: 'description', text: '', style: 'regular'},
                {type: 'description', text: '', style: 'underline'}
            ],
            classes: [ {id: '10A',title: 'A1'},{id: '10B',title: 'B1'}],
            start: '02.03.2021',
            end: '01.05.2021'
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


