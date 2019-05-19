import { notificationConstants } from "../constants";
import backend = require("../backend-api");
import { transactionActions } from "./";

export const notificationActions = {
	load,
	read,
}

function load() {
	return (dispatch, getState) => {
		dispatch(request());

		backend.getNotification()
			.then(
				notifications => {
					let oldNotis = getState().notification.notifications;
					let newNotis = notifications as Array<any>;
					let oldUnread = oldNotis.filter(noti => !noti.read).length;
					let newUnread = newNotis.filter(noti => !noti.read).length;
					if (oldUnread != newUnread || oldNotis.length != newNotis.length) {
						dispatch(success(notifications));
						dispatch(transactionActions.load());
					}
				},
				error => {
					dispatch(failure(error));
				}
			);
	};

	function request() { return {type: notificationConstants.NOTIFICATION_REQUEST}};
	function success(notifications) { return {type: notificationConstants.NOTIFICATION_SUCCESS, notifications}};
	function failure(error) { return {type: notificationConstants.NOTIFICATION_FAILURE, error}};
}

function read(id) {
	return dispatch => {
		backend.readNotification(id)
			.then(
				() => {
					dispatch(load());
				}
			);
	}
}