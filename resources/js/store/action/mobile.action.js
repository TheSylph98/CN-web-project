"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const backend = require("../backend-api");
exports.mobileActions = {
    getTelecom,
};
function getTelecom() {
    return dispatch => {
        dispatch(request());
        backend.getTelecom()
            .then(telecoms => {
            dispatch(success(telecoms));
        }, error => {
            dispatch(failure(error));
        });
    };
    function request() { return { type: constants_1.mobileConstants.MOBILE_REQUEST }; }
    ;
    function success(telecoms) { return { type: constants_1.mobileConstants.MOBILE_SUCCESS, telecoms }; }
    ;
    function failure(error) { return { type: constants_1.mobileConstants.MOBILE_FAILURE, error }; }
    ;
}
