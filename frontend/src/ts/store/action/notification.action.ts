import { notificationConstants } from "../constants";
import backend = require("../backend-api");

export const notificationActions = {
	load,
}

function load() {
	return dispatch => {
		dispatch(request());

		backend.getNotification()
			.then(
				notifications => {
					dispatch(success(notifications));
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