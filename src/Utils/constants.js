import images from '../Assets/background/main.png';
import avatar from '../Assets/users/student.svg';
import store from "../Store/store";
export const subjects = ['The Catcher in the Rye',
    'Hamlet',
    'One hundred years of solitude',
    'Romeo and Juliet', 'Odyssey of Homer'];
export const arrayLessons = [
    {
        image: images,
        title: 'Odyssey of Homer'
    },
    {
        image: images,
        title: 'Hamlet'
    },
    {
        image: images,
        title: 'The Catcher in the Rye'
    },
    {
        image: images,
        title: 'One hundred years of solitude'
    },
    {
        image: images,
        title: 'One hundred years of solitude'
    },
    {
        image: images,
        title: 'Romeo and Juliet'
    },
    {
        image: images,
        title: 'One hundred years of solitude'
    },
    {
        image: images,
        title: 'Romeo and Juliet'
    },
];

export const user = [
    {
        id: '1s',
        name: 'Sofia',
        last_name: 'Goland',
        avatar: avatar,
        answers:['first answer', 'second answer', 'third answer']
    }];
export const questions = [
    {
        id:'2s',
        avatar:avatar,
        class: '5B',
        name: 'Student  Name',
        question: 'Where does the Odyssey take place?',
        markQ:[],
        answers: []
    },
    {
        id:'3s',
        avatar:avatar,
        class: '5B',
        name: 'Student Name',
        question: 'Where does the Odyssey take place?',
        markQ:[],
        answers: []
    },
    {
        id: '4s',
        avatar:avatar,
        class: '5B',
        name: 'Student  Name',
        question: 'Where does the Odyssey take place?',
        markQ:[],
        answers: []
    }
];
export const teacherQuestions = [
    {
        id: '1q',
        avatar: avatar,
        name: 'John',
        surname: 'Smith',
        question:'Teacher'+'\'s'+' question',
        answers: {
            firstAnswer:'',
            secondAnswer:'',
            thirdAnswer:''
        }
    },
    {
        id:'2q',
        avatar: avatar,
        name: 'John',
        surname: 'Smith',
        question:'Teacher'+'\'s'+' question',
        answers: {
            firstAnswer:'',
            secondAnswer:'',
            thirdAnswer:''
        }
    },
    {
        id: '3q',
        avatar: avatar,
        name: 'John',
        surname: 'Smith',
        question:'Teacher'+'\'s'+' question',
        answers: {
            firstAnswer:'',
            secondAnswer:'',
            thirdAnswer:''
        }
    },
]
