"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const _1 = require("./");
const backend = require("../backend-api");
exports.servicesActions = {
    transfer,
};
function transfer({ amount, email, message }) {
    return dispatch => {
        dispatch(request());
        backend.transfer({ amount, email, message })
            .then(() => {
            dispatch(_1.userActions.update());
            dispatch(success());
        }, error => {
            dispatch(failure(error));
        });
    };
    function request() { return { type: constants_1.servicesConstants.TRANSFER_REQUEST }; }
    ;
    function success() { return { type: constants_1.servicesConstants.TRANSFER_SUCCESS }; }
    ;
    function failure(error) { return { type: constants_1.servicesConstants.TRANSFER_FAILURE, error }; }
    ;
}
