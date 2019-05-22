"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function transaction(state = { notLoad: true, transactions: [] }, action) {
    switch (action.type) {
        case constants_1.userConstants.LOGOUT_SUCCESS:
            return {
                notLoad: true,
                transactions: [],
            };
        case constants_1.transactionConstants.TRANSACTION_REQUEST:
            return {
                notLoad: false,
                loading: true,
                transactions: state.transactions,
            };
        case constants_1.transactionConstants.TRANSACTION_SUCCESS:
            return {
                notLoad: false,
                loaded: true,
                transactions: action.transactions.sort((trans1, trans2) => {
                    if (trans1.time > trans2.time) {
                        return -1;
                    }
                    if (trans1.time == trans2.time) {
                        return 0;
                    }
                    return 1;
                }),
            };
        case constants_1.transactionConstants.TRANSACTION_FAILURE:
            return {
                notLoad: true,
                error: action.error,
                transactions: state.transactions,
            };
        default:
            return state;
    }
}
exports.transaction = transaction;
