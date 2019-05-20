"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const backend = require("../backend-api");
const _1 = require("./");
exports.notificationActions = {
    load,
    read,
};
function load() {
    return (dispatch, getState) => {
        dispatch(request());
        backend.getNotification()
            .then(notifications => {
            let oldNotis = getState().notification.notifications;
            let newNotis = notifications;
            let oldUnread = oldNotis.filter(noti => !noti.read).length;
            let newUnread = newNotis.filter(noti => !noti.read).length;
            if (oldUnread != newUnread || oldNotis.length != newNotis.length) {
                dispatch(success(notifications));
                dispatch(_1.transactionActions.load());
            }
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
function read(id) {
    return dispatch => {
        backend.readNotification(id)
            .then(() => {
            dispatch(load());
        });
    };
}
