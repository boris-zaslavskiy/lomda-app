
/*  -- 1 -- Teachers:

1. GET_ALL_TEACHERS_BY_CLASS{
     method: GET,
     url: '/teachers/idClass',
     body: {},
     response: [
         {
            id: String,
            firstName: String,
            surName: String,
            email: String,
            password: String,
            position: String,
            subjectId: String,
            subjectTitle: String,
            lessons: [{ id: String, status: String },...],
            classes: [{ id: String, title: String },...]
         }
     ,...]
}

2. GET_TEACHER_BY_ID{
     method: GET,
     url: '/teachers/idTeacher',
     body: {},
     response:
        {
            id: String,
            firstName: String,
            surName: String,
            email: String,
            password: String,
            position: String,
            subjectId: String,
            subjectTitle: String,
            lessons: [{ id: String, status: String },...],
            classes: [{ id: String, title: String },...]
        }
}

3. DELETE_TEACHER_BY_ID{
     method: DELETE,
     url: '/teachers/idTeacher'
     body: {},
     response: {}
}

4. CHANGE_TEACHER_BY_ID{
     method: PUT,
     url: '/teachers/idTeacher',
     body: { id: String,...},
     response: {}
}
*/


/*  -- 2 -- Students:

1. GET_ALL_STUDENTS_BY_CLASS{
     method: GET,
     url: '/students/idClass',
     body: {},
     response: [
        {
            id: String,
            firstName: String,
            surName: String,
            email: String,
            password: String,
            position: String,
            rating: Number,
            class: { id: String, title: String }
        }
    ,... ]
}

2. GET_STUDENT_BY_ID{
     method: GET,
     url: '/students/idStudent',
     body: {},
     response: {
        id: String,
        firstName: String,
        surName: String,
        email: String,
        password: String,
        position: String,
        rating: Number,
        class: { id: String, title: String }
     }
}

3. DELETE_STUDENT_BY_ID{
     method: DELETE,
     url: '/students/idStudent',
     body: {},
     response: {}
}

4. DELETE_STUDENTS_BY_CLASS{
     method: DELETE,
     url: '/students/idClass',
     body: {},
     response: {}
}

5. CHANGE_STUDENT_BY_ID{
     method: PUT,
     url: '/students/idStudent',
     body: {id: String,...},
     response: {}
}

6. ADD_STUDENT{
     method: POST,
     url: '/students/StudentS',
     body: {id: String,...},
     response: {}
}

7. SEARCH_STUDENT_BY_ID{
     method: GET,
     url: '/students/idStudent',
     body: {},
     response: {id: String,...}
}
*/


/*  -- 3 -- Classes:

1. GET_ALL_CLASSES_BY_TEACHER_ID{
     method: GET,
     url: '/classes/idTeacher',
     body: {},
     response: [
        {
            id: String,
            title: String,
            students: [{ id: String, firstName: String, surName: String, rating: Number, chosen: Boolean}, ...],
            subjects: [{ id: String, title: String, idTeacher: String, nameTeacher: String, idCurrentLesson: String }, ...]
        }
    ,...]
}

2. GET_CLASS_BY_ID{
     method: GET,
     url: '/classes/idClass',
     body: {},
     response: {
        id: String,
        title: String,
        students: [{ id: String, firstName: String, surName: String, rating: Number, chosen: Boolean}, ...],
        subjects: [{ id: String, title: String, idTeacher: String, nameTeacher: String, idCurrentLesson: String }, ...]
     }
}

3. DELETE_CLASS_BY_ID{
     method: DELETE,
     url: '/classes/idClass',
     body: {},
     response: {}
}

4. ADD_CLASS{
     method: POST,
     url: '/classes/classes',
     body: {id: String,...},
     response: {}
}

5. SEARCH_CLASS_BY_ID{
     method: GET,
     url: '/classes/idClass',
     body: {},
     response: {id: String,...}
}
*/




//subjects:


//lessons:
