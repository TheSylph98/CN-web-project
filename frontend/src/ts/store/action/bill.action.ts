import { billConstants } from "../constants";
import backend = require("../backend-api");

export const billActions = {
	getBillType,
	getBill,
}

function getBillType() {
	return dispatch => {
		dispatch(request());

		backend.getBillType()
			.then(
				types => {
					dispatch(success(types));
				},
				error => {
					dispatch(failure(error));
				}
			);
	};

	function request() { return {type: billConstants.TYPE_REQUEST}};
	function success(types) { return {type: billConstants.TYPE_SUCCESS, types}};
	function failure(error) { return {type: billConstants.TYPE_FAILURE, error}};
}

function getBill(code, type) {
	return dispatch => {
		dispatch(request());

		backend.getBill(code, type)
			.then(
				bill => {
					dispatch(success(bill));
				},
				error => {
					dispatch(failure(error));
				}
			);
	};

	function request() { return {type: billConstants.BILL_REQUEST}};
	function success(bill) { return {type: billConstants.BILL_SUCCESS, bill}};
	function failure(error) { return {type: billConstants.BILL_FAILURE, error}};
}