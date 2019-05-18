"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const backend = require("../backend-api");
exports.bankActions = {
    getBank,
};
function getBank() {
    return dispatch => {
        dispatch(request());
        backend.getBank()
            .then(banks => {
            dispatch(success(banks));
        }, error => {
            dispatch(failure(error));
        });
    };
    function request() { return { type: constants_1.bankConstants.BANK_REQUEST }; }
    ;
    function success(banks) { return { type: constants_1.bankConstants.BANK_SUCCESS, banks }; }
    ;
    function failure(error) { return { type: constants_1.bankConstants.BANK_FAILURE, error }; }
    ;
}
