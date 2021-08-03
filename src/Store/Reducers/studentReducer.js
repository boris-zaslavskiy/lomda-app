import {SET_STUDENT} from '../types'


const defaultState = {
   students: [
       {
           id: '1s',
           firstName: 'Samuel',
           surName: 'Harryson',
           email: 'harryson@mail.com',
           password: 'harryson123456',
           position: 'student',
           rating: '17',
           class: { id: '10A', title: 'A1' }
       },{
           id: '2s',
           firstName: 'Ellie',
           surName: 'Snoyden',
           email: 'snoyden@mail.com',
           password: 'snoyden123456',
           position: 'student',
           rating: '23',
           class: { id: '10B', title: 'B1' }
       },{
           id: '3s',
           firstName: 'Ivy',
           surName: 'Redski',
           email: 'redski@mail.com',
           password: 'redski123456',
           position: 'student',
           rating: '23',
           class: { id: '10A', title: 'A1' }
       },{
           id: '4s',
           firstName: 'Alice',
           surName: 'Alice',
           email: 'alice@mail.com',
           password: 'alice123456',
           position: 'student',
           rating: '15',
           class: { id: '10A', title: 'A1' }
       },{
           id: '5s',
           firstName: 'Alfie',
           surName: 'Alfie',
           email: 'al@mail.com',
           password: 'al123456',
           position: 'student',
           rating: '20',
           class: { id: '10B', title: 'B1' }
       },{
           id: '6s',
           firstName: 'Harry',
           surName: 'Harry',
           email: 'harry@mail.com',
           password: 'harryi123456',
           position: 'student',
           rating: '17',
           class: { id: '20A', title: 'A2' }
       },{
           id: '7s',
           firstName: 'Isabelle',
           surName: 'Belle',
           email: 'bell@mail.com',
           password: 'bell123456',
           position: 'student',
           rating: '25',
           class: { id: '10A', title: 'A1' }
       },{
           id: '8s',
           firstName: 'Leo',
           surName: 'Belle',
           email: 'leo@mail.com',
           password: 'leo123456',
           position: 'student',
           rating: '21',
           class: { id: '10A', title: 'A1' }
       },{
           id: '9s',
           firstName: 'Oliver',
           surName: 'Oliver',
           email: 'oliv@mail.com',
           password: 'oliv123456',
           position: 'student',
           rating: '20',
           class: { id: '10B', title: 'B1' }
       }
       ,{
           id: '10s',
           firstName: 'Archie',
           surName: 'Archie',
           email: 'archi@mail.com',
           password: 'archi123456',
           position: 'student',
           rating: '16',
           class: { id: '10B', title: 'B1' }
       }
       ,{
           id: '11s',
           firstName: 'Noah',
           surName: 'Noah',
           email: 'noah@mail.com',
           password: 'noah123456',
           position: 'student',
           rating: '17',
           class: { id: '10B', title: 'B1' }
       },{
           id: '12s',
           firstName: 'Ryan',
           surName: 'Ryan',
           email: 'ryan@mail.com',
           password: 'ryani123456',
           position: 'student',
           rating: '19',
           class: { id: '20A', title: 'A2' }
       }
       ,{
           id: '13s',
           firstName: 'Harry',
           surName: 'Ryan',
           email: 'hr@mail.com',
           password: 'hri123456',
           position: 'student',
           rating: '14',
           class: { id: '20A', title: 'A2' }
       }
       ,{
           id: '14s',
           firstName: 'Zoe',
           surName: 'Zoe',
           email: 'zoe@mail.com',
           password: 'zoei123456',
           position: 'student',
           rating: '19',
           class: { id: '20A', title: 'A2' }
       }
       ,{
           id: '15s',
           firstName: 'Heidi',
           surName: 'Heidi',
           email: 'heidi@mail.com',
           password: 'heidii123456',
           position: 'student',
           rating: '20',
           class: { id: '20A', title: 'A2' }
       }
       ,{
           id: '16s',
           firstName: 'Scarlett',
           surName: 'Scarlett',
           email: 'scarlett@mail.com',
           password: 'scarletti123456',
           position: 'student',
           rating: '23',
           class: { id: '20A', title: 'A2' }
       }
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


