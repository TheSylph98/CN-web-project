import { bankConstants } from "../constants";
import backend = require("../backend-api");

export const bankActions = {
	getBank,
}

function getBank() {
	return dispatch => {
		dispatch(request());

		backend.getBank()
			.then(
				banks => {
					dispatch(success(banks));
				},
				error => {
					dispatch(failure(error));
				}
			);
	};

	function request() { return {type: bankConstants.BANK_REQUEST}};
	function success(banks) { return {type: bankConstants.BANK_SUCCESS, banks}};
	function failure(error) { return {type: bankConstants.BANK_FAILURE, error}};
}