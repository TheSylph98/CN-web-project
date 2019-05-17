"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const _1 = require("./");
const backend = require("../backend-api");
exports.userActions = {
    login,
    logout,
    register,
    modify,
};
function login(username, password, token) {
    return dispatch => {
        dispatch(request({ username }));
        backend.loginAuth(username, password, token)
            .then(user => {
            dispatch(success(user));
            localStorage.setItem("user", JSON.stringify(user));
            alert("Login successfully!");
            window["routerHistory"].push("/");
        }, error => {
            dispatch(failure(error.toString()));
            dispatch(_1.alertActions.error(error.toString()));
        });
    };
    function request(user) { return { type: constants_1.userConstants.LOGIN_REQUEST, user }; }
    function success(user) { return { type: constants_1.userConstants.LOGIN_SUCCESS, user }; }
    function failure(error) { return { type: constants_1.userConstants.LOGIN_FAILURE, error }; }
}
function logout() {
    return dispatch => {
        backend.logout()
            .then(() => {
            dispatch(success());
            localStorage.removeItem("user");
        }, error => {
            dispatch(failure(error.toString()));
        });
    };
    function success() { return { type: constants_1.userConstants.LOGOUT_SUCCESS }; }
    function failure(error) { return { type: constants_1.userConstants.LOGOUT_FAILURE, error }; }
}
function register(data, token) {
    return dispatch => {
        dispatch(request({ username: data.username }));
        backend.register(data, token)
            .then(user => {
            dispatch(success(user));
            localStorage.setItem("user", JSON.stringify(user));
            alert("Registration successfully! Please login to continue");
            window["routerHistory"].push("/login");
            dispatch(_1.alertActions.success('Registration successful'));
        }, error => {
            dispatch(failure(error.toString()));
            dispatch(_1.alertActions.error(error.toString()));
        });
    };
    function request(user) { return { type: constants_1.userConstants.REGISTER_REQUEST, user }; }
    function success(user) { return { type: constants_1.userConstants.REGISTER_SUCCESS, user }; }
    function failure(error) { return { type: constants_1.userConstants.REGISTER_FAILURE, error }; }
}
function modify(data) {
    return dispatch => {
        dispatch(request());
        backend.modify(data)
            .then(user => {
            dispatch(success(user));
            localStorage.setItem("user", JSON.stringify(user));
        }, error => {
            dispatch(failure(error.toString()));
        });
    };
    function request() { return { type: constants_1.userConstants.MODIFY_REQUEST }; }
    function success(user) { return { type: constants_1.userConstants.MODIFY_SUCCESS, user }; }
    function failure(error) { return { type: constants_1.userConstants.MODIFY_FAILURE, error }; }
}
