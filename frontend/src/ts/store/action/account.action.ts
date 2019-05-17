import { accountConstants } from "../constants";
import backend = require("../backend-api");

export const accountActions = {
	connectAccount,
}

function connectAccount(accountNumber: string, bankId: string) {
	return dispatch => {
		dispatch(request());

		backend.connectAccount(accountNumber, bankId)
			.then(
				() => {
					dispatch(success());
				},
				error => {
					dispatch(failure(error));
				}
			);
	};

	function request() { return {type: accountConstants.CONNECT_REQUEST}};
	function success() { return {type: accountConstants.CONNECT_SUCCESS}};
	function failure(error) { return {type: accountConstants.CONNECT_FAILURE, error}};
}