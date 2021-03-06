"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const backend = require("../backend-api");
exports.servicesActions = {
    transfer,
    payMobileCard,
    deposit,
    payBill,
};
function transfer({ amount, email, message }) {
    return dispatch => {
        dispatch(request());
        backend.transfer({ amount, email, message })
            .then(() => {
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
function payMobileCard(telecomId, amount) {
    return dispatch => {
        dispatch(request());
        backend.payMobileCard(telecomId, amount)
            .then(code => {
            dispatch(success(code));
        }, error => {
            dispatch(failure(error));
        });
    };
    function request() { return { type: constants_1.servicesConstants.MOBILE_REQUEST }; }
    ;
    function success(code) { return { type: constants_1.servicesConstants.MOBILE_SUCCESS, code }; }
    ;
    function failure(error) { return { type: constants_1.servicesConstants.MOBILE_FAILURE, error }; }
    ;
}
function deposit(account, amount) {
    return dispatch => {
        dispatch(request());
        backend.deposit(account, amount)
            .then(() => {
            dispatch(success());
        }, error => {
            dispatch(failure(error));
        });
    };
    function request() { return { type: constants_1.servicesConstants.DEPOSIT_REQUEST }; }
    ;
    function success() { return { type: constants_1.servicesConstants.DEPOSIT_SUCCESS }; }
    ;
    function failure(error) { return { type: constants_1.servicesConstants.DEPOSIT_FAILURE, error }; }
    ;
}
function payBill(code, type) {
    return dispatch => {
        dispatch(request());
        backend.payBill(code, type)
            .then(() => {
            dispatch(success());
        }, error => {
            dispatch(failure(error));
        });
    };
    function request() { return { type: constants_1.servicesConstants.PAY_REQUEST }; }
    ;
    function success() { return { type: constants_1.servicesConstants.PAY_SUCCESS }; }
    ;
    function failure(error) { return { type: constants_1.servicesConstants.PAY_FAILURE, error }; }
    ;
}
