import { transactionConstants } from "../constants";
import backend = require("../backend-api");

export const transactionActions = {
	load,
}

function load() {
	return (dispatch) => {
		dispatch(request());

		backend.getTransaction()
			.then(
				transactions => {
					dispatch(success(transactions));
				},
				error => {
					dispatch(failure(error));
				}
			);
	};

	function request() { return {type: transactionConstants.TRANSACTION_REQUEST}};
	function success(transactions) { return {type: transactionConstants.TRANSACTION_SUCCESS, transactions}};
	function failure(error) { return {type: transactionConstants.TRANSACTION_FAILURE, error}};
}