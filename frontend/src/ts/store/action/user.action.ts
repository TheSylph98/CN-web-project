import { userConstants } from '../constants';
import { alertActions } from './';
import backend = require("../backend-api");

export const userActions = {
    login,
    logout,
    register,
    modify,
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        backend.loginAuth(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    localStorage.setItem("user", JSON.stringify(user));
                    alert("Login successfully!");
                    window["routerHistory"].push("/");
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    return dispatch => {
        backend.logout()
            .then(
                () => {
                    dispatch(success());
                    localStorage.removeItem("user");
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    }
    
    function success() {return { type: userConstants.LOGOUT_SUCCESS }}
    function failure(error) { return { type: userConstants.LOGOUT_FAILURE, error}}
}

function register(data: {username, password, phone, email, verifyPassword}) {
    return dispatch => {
        dispatch(request({ username: data.username }));

        backend.register(data)
            .then(
                user => { 
                    dispatch(success(user));
                    localStorage.setItem("user", JSON.stringify(user)); 
                    alert("Registration successfully! Please login to continue");
                    window["routerHistory"].push("/login");
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}


function modify(data: {username, phone, address}) {
    return dispatch => {
        dispatch(request());
        backend.modify(data)
            .then(
                user => {
                    dispatch(success(user));
                    localStorage.setItem("user", JSON.stringify(user)); 
                },
                error => {
                    dispatch(failure(error.toString()));
                }

            )
    }

    function request() { return { type: userConstants.MODIFY_REQUEST } }
    function success(user) { return { type: userConstants.MODIFY_SUCCESS, user } }
    function failure(error) { return { type: userConstants.MODIFY_FAILURE, error } }
}