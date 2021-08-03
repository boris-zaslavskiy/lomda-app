import {SET_TEACHERS} from '../types'


const defaultState = {
   teachers: [
       {
           id: '1t',
           firstName: 'Ned',
           surName: 'Stark',
           email: 'nedstark@mail.com',
           password: 'ned123456',
           position: 'teacher',
           subjectId: '100L',
           subjectTitle: 'literature',
           lessons: [
               { id: '100', status: 'active' },
               { id: '101', status: 'saved' },
               { id: '102', status: 'active' },
               { id: '103', status: 'closed' },
               { id: '104', status: 'closed' },
               { id: '105', status: 'saved' },
               { id: '106', status: 'closed' }
           ],
           classes: [
               { id: '10A', title: 'A1' },
               { id: '10B', title: 'B1' }
           ]
       },
       {
           id: '2t',
           firstName: 'Jon',
           surName: 'Snow',
           email: 'snow@mail.com',
           password: 'snow123456',
           position: 'teacher',
           subjectId: '101B',
           subjectTitle: 'biology',
           lessons: [
               { id: '107', status: 'active' },
               { id: '108', status: 'saved' },
               { id: '109', status: 'active' },
               { id: '110', status: 'closed' },
               { id: '111', status: 'closed'}
           ],
           classes: [
               { id: '10A', title: 'A1' },
               { id: '10B', title: 'B1' },
               { id: '20A', title: 'A2'}
           ]
       },{
           id: '3t',
           firstName: 'Oscar',
           surName: 'Stark',
           email: 'oscar@mail.com',
           password: 'oscar123456',
           position: 'teacher',
           subjectId: '102H',
           subjectTitle: 'history',
           lessons: [
               { id: '112', status: 'active' },
               { id: '113', status: 'saved' },
               { id: '114', status: 'active' },
               { id: '115', status: 'closed' }
           ],
           classes: [
               { id: '10A', title: 'A1' },
               { id: '20A', title: 'A2'}
           ]
       }
   ]
};


export const setTeacher = (teachers) => ({
    type: SET_TEACHERS,
    payload: teachers
});


export default function teacherReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_TEACHERS:
            return {
                ...state,
                teachers: action.payload
            }
        default:
            return state
    }
}


