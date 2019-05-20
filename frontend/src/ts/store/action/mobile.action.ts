import { mobileConstants } from "../constants";
import backend = require("../backend-api");

export const mobileActions = {
	getTelecom,
}

function getTelecom() {
	return dispatch => {
		dispatch(request());

		backend.getTelecom()
			.then(
				telecoms => {
					dispatch(success(telecoms));
				},
				error => {
					dispatch(failure(error));
				}
			);
	};

	function request() { return {type: mobileConstants.MOBILE_REQUEST}};
	function success(telecoms) { return {type: mobileConstants.MOBILE_SUCCESS, telecoms}};
	function failure(error) { return {type: mobileConstants.MOBILE_FAILURE, error}};
}