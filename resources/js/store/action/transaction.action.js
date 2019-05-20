"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const backend = require("../backend-api");
exports.transactionActions = {
    load,
};
function load() {
    return (dispatch) => {
        dispatch(request());
        backend.getTransaction()
            .then(transactions => {
            dispatch(success(transactions));
        }, error => {
            dispatch(failure(error));
        });
    };
    function request() { return { type: constants_1.transactionConstants.TRANSACTION_REQUEST }; }
    ;
    function success(transactions) { return { type: constants_1.transactionConstants.TRANSACTION_SUCCESS, transactions }; }
    ;
    function failure(error) { return { type: constants_1.transactionConstants.TRANSACTION_FAILURE, error }; }
    ;
}
