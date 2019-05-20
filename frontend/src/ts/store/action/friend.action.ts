import { friendConstants } from "../constants";
import backend = require("../backend-api");

export const friendActions = {
	getFriendList,
	addFriend,
}

function getFriendList() {
	return dispatch => {
		dispatch(request());

		backend.getFriendList()
			.then(
				friends => {
					dispatch(success(friends));
				},
				error => {
					dispatch(failure(error));
				}
			);
	};

	function request() { return {type: friendConstants.FRIEND_REQUEST}};
	function success(friends) { return {type: friendConstants.FRIEND_SUCCESS, friends}};
	function failure(error) { return {type: friendConstants.FRIEND_FAILURE, error}};
}

function addFriend(email) {
	return dispatch => {
		dispatch(request());

		backend.addFriend(email)
			.then(
				() => {
					dispatch(success());
					dispatch(getFriendList());
				},
				error => {
					dispatch(failure(error));
				}
			);
	};

	function request() { return {type: friendConstants.ADD_FRIEND_REQUEST}};
	function success() { return {type: friendConstants.ADD_FRIEND_SUCCESS}};
	function failure(error) { return {type: friendConstants.ADD_FRIEND_FAILURE, error}};
}