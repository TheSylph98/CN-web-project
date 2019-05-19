"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const backend = require("../backend-api");
exports.notificationActions = {
    load,
};
function load() {
    return dispatch => {
        dispatch(request());
        backend.getNotification()
            .then(notifications => {
            dispatch(success(notifications));
        }, error => {
            dispatch(failure(error));
        });
    };
    function request() { return { type: constants_1.notificationConstants.NOTIFICATION_REQUEST }; }
    ;
    function success(notifications) { return { type: constants_1.notificationConstants.NOTIFICATION_SUCCESS, notifications }; }
    ;
    function failure(error) { return { type: constants_1.notificationConstants.NOTIFICATION_FAILURE, error }; }
    ;
}
