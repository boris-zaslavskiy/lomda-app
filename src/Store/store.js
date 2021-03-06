import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

import classReducer from "./Reducers/classReducer";
import teacherReducer from "./Reducers/teacherReducer";
import studentReducer from "./Reducers/studentReducer";
import subjectReducer from "./Reducers/subjectReducer";
import lessonReducer from "./Reducers/lessonReducer";


const rootReducer = combineReducers({
    classStates: classReducer,
    teacherStates: teacherReducer,
    studentStates: studentReducer,
    subjectStates: subjectReducer,
    lessonStates:  lessonReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;