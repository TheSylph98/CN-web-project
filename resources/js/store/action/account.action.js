"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const backend = require("../backend-api");
exports.accountActions = {
    connectAccount,
    getConnectedAccount,
};
function connectAccount(accountNumber, bankId) {
    return dispatch => {
        dispatch(request());
        backend.connectAccount(accountNumber, bankId)
            .then(() => {
            dispatch(success());
            dispatch(getConnectedAccount());
        }, error => {
            dispatch(failure(error));
        });
    };
    function request() { return { type: constants_1.accountConstants.CONNECT_REQUEST }; }
    ;
    function success() { return { type: constants_1.accountConstants.CONNECT_SUCCESS }; }
    ;
    function failure(error) { return { type: constants_1.accountConstants.CONNECT_FAILURE, error }; }
    ;
}
function getConnectedAccount() {
    return dispatch => {
        dispatch(request());
        backend.getConnectedAccount()
            .then(accounts => {
            dispatch(success(accounts));
        }, error => {
            dispatch(failure(error));
        });
    };
    function request() { return { type: constants_1.accountConstants.ACCOUNT_REQUEST }; }
    ;
    function success(accounts) { return { type: constants_1.accountConstants.ACCOUNT_SUCCESS, accounts }; }
    ;
    function failure(error) { return { type: constants_1.accountConstants.ACCOUNT_FAILURE, error }; }
    ;
}
