import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducer';
// import { routerMiddleware } from "react-router-redux";

export const store = createStore(
    rootReducer,
    applyMiddleware (
        thunkMiddleware
    )
);
