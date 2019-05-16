import { userConstants } from '../constants';
import { alertActions } from './';
import backend = require("../backend-api");

export const userActions = {
    login,
    logout,
    register,
};

function login(username, password, token) {
    return dispatch => {
        dispatch(request({ username }));

        backend.loginAuth(username, password, token)
            .then(
                user => { 
                    dispatch(success(user));
                    localStorage.setItem("user", JSON.stringify(user));
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
    localStorage.removeItem("user");
    return { type: userConstants.LOGOUT };
}

function register(data: {username, password, phone, email, verifyPassword}, token) {
    return dispatch => {
        dispatch(request({ username: data.username }));

        backend.register(data, token)
            .then(
                user => { 
                    dispatch(success(user));
                    localStorage.setItem("user", JSON.stringify(user)); 
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
