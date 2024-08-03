import {  combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import { AddCommentReducer } from "./Reducers/CommentReducer";

const reducer = combineReducers({comments: AddCommentReducer});

const initialState = {};  

const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    preloadedState: initialState, // Optional initial state
});

export default store;

