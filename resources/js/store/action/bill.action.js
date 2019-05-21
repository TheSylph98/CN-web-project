"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const backend = require("../backend-api");
exports.billActions = {
    getBillType,
    getBill,
};
function getBillType() {
    return dispatch => {
        dispatch(request());
        backend.getBillType()
            .then(types => {
            dispatch(success(types));
        }, error => {
            dispatch(failure(error));
        });
    };
    function request() { return { type: constants_1.billConstants.TYPE_REQUEST }; }
    ;
    function success(types) { return { type: constants_1.billConstants.TYPE_SUCCESS, types }; }
    ;
    function failure(error) { return { type: constants_1.billConstants.TYPE_FAILURE, error }; }
    ;
}
function getBill(code, type) {
    return dispatch => {
        dispatch(request());
        backend.getBill(code, type)
            .then(bill => {
            dispatch(success(bill));
        }, error => {
            dispatch(failure(error));
        });
    };
    function request() { return { type: constants_1.billConstants.BILL_REQUEST }; }
    ;
    function success(bill) { return { type: constants_1.billConstants.BILL_SUCCESS, bill }; }
    ;
    function failure(error) { return { type: constants_1.billConstants.BILL_FAILURE, error }; }
    ;
}
