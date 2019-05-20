import { servicesConstants } from "../constants";
import { userActions } from "./";
import backend = require("../backend-api");

export const servicesActions = {
	transfer,
}

function transfer({amount, email, message}) {
	return dispatch => {
		dispatch(request());

		backend.transfer({amount, email, message})
			.then(
				() => {
					dispatch(userActions.update());
					dispatch(success());
				},
				error => {
					dispatch(failure(error));
				}
			);
	};

	function request() { return {type: servicesConstants.TRANSFER_REQUEST}};
	function success() { return {type: servicesConstants.TRANSFER_SUCCESS}};
	function failure(error) { return {type: servicesConstants.TRANSFER_FAILURE, error}};
}