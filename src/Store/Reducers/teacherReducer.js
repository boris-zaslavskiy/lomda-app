import {SET_TEACHERS, GET_TEACHER_BY_ID, GET_ALL_TEACHERS} from '../types'


const defaultState = {
   currentTeacher: {},
   teachers: [
       {
           id: '1t',
           firstName: 'Ned',
           surName: 'Stark',
           email: 'nedstark@mail.com',
           password: 'ned123456',
           position: 'teacher',
           subjectId: '100L',
           subjectTitle: 'Literature',
           lessons: [
               { id: '1000L', status: 'active' },
               { id: '1001L', status: 'saved' },
               { id: '1002L', status: 'saved' },
               { id: '1003L', status: 'closed' },
               { id: '1004L', status: 'closed' },
               { id: '1005L', status: 'saved' },
               { id: '1006L', status: 'closed' }
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
           subjectTitle: 'Biology',
           lessons: [
               { id: '1000B', status: 'active' },
               { id: '1001B', status: 'saved' },
               { id: '1002B', status: 'active' },
               { id: '1003B', status: 'closed' },
               { id: '1004B', status: 'closed'}
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
           subjectTitle: 'History',
           lessons: [
               { id: '1000H', status: 'active' },
               { id: '1001H', status: 'saved' },
               { id: '1002H', status: 'active' },
               { id: '1003H', status: 'closed' }
           ],
           classes: [
               { id: '10A', title: 'A1' },
               { id: '20A', title: 'A2'}
           ]
       }
   ]
};


//Test ---------------------------------------
export const setTeacher = (teachers) => ({
    type: SET_TEACHERS,
    payload: teachers
});
//--------------------------------------------


export const getTeacherById = (teacher) => ({
    type: GET_TEACHER_BY_ID,
    payload: teacher
});


export const getAllTeachers = (teachers) => ({
    type: GET_ALL_TEACHERS,
    payload: teachers
});


export default function teacherReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_TEACHERS:
            return {
                ...state,
                teachers: action.payload
            }
        case GET_TEACHER_BY_ID:
            return {
                ...state,
                currentTeacher: action.payload
            }
        case GET_ALL_TEACHERS:
            return {
                ...state,
                teachers: [...state.teachers, ...action.payload]
            }
        default:
            return state
    }
}


