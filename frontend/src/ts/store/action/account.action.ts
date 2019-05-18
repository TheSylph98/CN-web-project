import { accountConstants } from "../constants";
import backend = require("../backend-api");

export const accountActions = {
	connectAccount,
	getConnectedAccount,
}

function connectAccount(accountNumber: string, bankId: string) {
	return dispatch => {
		dispatch(request());

		backend.connectAccount(accountNumber, bankId)
			.then(
				() => {
					dispatch(success());
					dispatch(getConnectedAccount());
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

function getConnectedAccount() {
	return dispatch => {
		dispatch(request());

		backend.getConnectedAccount()
			.then(
				accounts => {
					dispatch(success(accounts));
				},
				error => {
					dispatch(failure(error));
				}
			);
	};

	function request() { return {type: accountConstants.ACCOUNT_REQUEST}};
	function success(accounts) { return {type: accountConstants.ACCOUNT_SUCCESS, accounts}};
	function failure(error) { return {type: accountConstants.ACCOUNT_FAILURE, error}};
}