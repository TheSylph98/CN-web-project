"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function notification(state = { notLoad: true, notifications: [] }, action) {
    switch (action.type) {
        case constants_1.notificationConstants.NOTIFICATION_REQUEST:
            return {
                notLoad: false,
                loading: true,
                notifications: [],
            };
        case constants_1.notificationConstants.NOTIFICATION_SUCCESS:
            return {
                notLoad: false,
                loaded: true,
                notifications: action.notifications,
            };
        case constants_1.notificationConstants.NOTIFICATION_FAILURE:
            return {
                notLoad: true,
                error: action.error,
                notifications: []
            };
        default:
            return state;
    }
}
exports.notification = notification;
