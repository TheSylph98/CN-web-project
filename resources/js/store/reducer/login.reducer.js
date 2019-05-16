"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};
function login(state = initialState, action) {
    switch (action.type) {
        case constants_1.userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case constants_1.userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case constants_1.userConstants.LOGIN_FAILURE:
            return {
                loggedIn: false,
                error: action.error,
            };
        case constants_1.userConstants.LOGOUT:
            return {};
        default:
            return state;
    }
}
exports.login = login;
