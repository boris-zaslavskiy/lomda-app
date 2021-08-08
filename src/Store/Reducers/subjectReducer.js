import {SET_STUDENT} from '../types'


const defaultState = {
    subjects: [
        { id: '100L', title: 'literature', idTeacher: '1t', name: 'Ned Stark',
            currentLesson: {
                id: '1000L',
                title: 'Odyssey',
                data: [
                    {subtitle: 'subtitle 1'},
                    {description: 'description 1'},
                    {subtitle: 'subtitle 2'},
                    {description: 'description 2'},
                    {description: 'description 3'}
                ],
                start: '10.08.2021',
                end: '30.08.2021',
                status: 'active',
                questions:[
                    {id: '10000Q',
                    question: 'Where does the Odyssey take place?',
                    rate: '4',
                    idStudent: '1s',
                    nameStudent: 'Samuel Harryson',
                    answers: [{
                        id: '100000Ans',
                        idStudent: '2s',
                        nameStudent: 'Ellie Snoyden',
                        answer: 'The majority of the Odyssey takes place on and around the Aegean Sea before concluding in Odysseus`s kingdom of Ithaca',
                        rate: '3'
                    },{
                        id: '100001Ans',
                        idStudent: '5s',
                        nameStudent: 'Alfie Alfie',
                        answer: 'The Aegean Sea',
                        rate: '2'
                    },{
                        id: '100002Ans',
                        idStudent: '7s',
                        nameStudent: 'Isabelle Belle',
                        answer: 'It takes place during the ten years following the Trojan war. The exact date of this is unknown if it ever took place at all. It is believed that, if there was a war, it occurred sometime between 1300 and 1200 BC. The late Bronze Age.',
                        rate: '5'
                    }]},
                    {id: '10001Q',
                        question: 'Did the poet Homer actually exist?',
                        rate: '5',
                        idStudent: '2s',
                        nameStudent: 'Ellie Snoyden',
                        answers: [{
                            id: '100003Ans',
                            idStudent: '3s',
                            nameStudent: 'Ivy Redski',
                            answer: 'The narrative focus and structural integrity of the Iliad and the Odyssey convince me that each was composed by a single person. Additionally, I’m inclined to believe that one and the same poet composed both poems.',
                            rate: '5'
                        },{
                            id: '100004Ans',
                            idStudent: '5s',
                            nameStudent: 'Alfie Alfie',
                            answer: 'Homer, supreme also in all other respects, was apparently well aware of this truth either by instinct or from knowledge of his art. For in writing an Odyssey he did not put in all that ever happened to Odysseus, his being wounded on Parnassus, for instance, or his feigned madness when the host was gathered（these being events neither of which necessarily or probably led to the other）, but he constructed his Odyssey round a single action in our sense of the phrase. And the Iliad the same.',
                            rate: '5'
                        },{
                            id: '100005Ans',
                            idStudent: '7s',
                            nameStudent: 'Isabelle Belle',
                            answer: 'There is no evidence whatsoever that Homer existed, beyond the texts of the Homeric epics. Personally, I find the internal evidence compelling.',
                            rate: '4'
                        }]},
                    {id: '10002Q',
                        question: 'What can an adult do to understand Homer`s Odyssey better?',
                        rate: '3',
                        idStudent: '2s',
                        nameStudent: 'Alfie Alfie',
                        answers: [{
                            id: '100006Ans',
                            idStudent: '3s',
                            nameStudent: 'Ivy Redski',
                            answer: 'Of course, the whole of the Epic cycle is the true context but we do not have all of that to refer to. But it is enough for us that we have the Iliad and the Odyssey which because of their antiquity in comparison with the Mahabharata really gives us some fundamental insights into what the proto-epic cycle must have been like.',
                            rate: '4'
                        },{
                            id: '100007Ans',
                            idStudent: '2s',
                            nameStudent: 'Ellie Snoyden',
                            answer: 'Thus we see how the humans are cast in the role of the nihilistic opposites that tear them apart many times with cruel fates, but the gods are the contradictions',
                            rate: '3'
                        },{
                            id: '100008Ans',
                            idStudent: '1s',
                            nameStudent: 'Samuel Harryson',
                            answer: 'There is no evidence whatsoever that Homer existed, beyond the texts of the Homeric epics. Personally, I find the internal evidence compelling.',
                            rate: '4'
                        }]}
                ],
            },
             lessons: [
                 {   id: '1001L',
                     title: 'Homer',
                     data: [
                         {subtitle: 'subtitle 1'},
                         {description: 'description 1'},
                         {description: 'description 2'},
                         {subtitle: 'subtitle 2'},
                         {description: 'description 3'}
                     ],
                     start: '10.08.2021',
                     end: '30.08.2021',
                     statusLesson: 'saved'
                 },
                 {   id: '1002L',
                     title: 'Homer & illiada',
                     data: [
                         {subtitle: 'subtitle 1'},
                         {description: 'description 1'},
                         {subtitle: 'subtitle 2'},
                         {description: 'description 2'}
                     ],
                     start: '10.08.2021',
                     end: '30.08.2021',
                     statusLesson: 'saved'
                 }
             ]
        }/*,
        { id: '101B', title: 'biology', idTeacher: '2t', name: 'Jon Snow',
            idCurrentLesson: '1001B', lessons: [] },
        { id: '102H', title: 'history', idTeacher: '3t', name: 'Oscar Stark',
            idCurrentLesson: '1002H', lessons: [] }*/
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


