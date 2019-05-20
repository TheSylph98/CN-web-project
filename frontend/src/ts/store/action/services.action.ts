import { servicesConstants } from "../constants";
import backend = require("../backend-api");

export const servicesActions = {
	transfer,
	payMobileCard,
}

function transfer({amount, email, message}) {
	return dispatch => {
		dispatch(request());

		backend.transfer({amount, email, message})
			.then(
				() => {
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

function payMobileCard(telecomId, amount) {
	return dispatch => {
		dispatch(request());

		backend.payMobileCard(telecomId, amount)
			.then(
				code => {
					dispatch(success(code));
				},
				error => {
					dispatch(failure(error));
				}
			);
	}

	function request() { return {type: servicesConstants.MOBILE_REQUEST}};
	function success(code) { return {type: servicesConstants.MOBILE_SUCCESS, code}};
	function failure(error) { return {type: servicesConstants.MOBILE_FAILURE, error}};
}