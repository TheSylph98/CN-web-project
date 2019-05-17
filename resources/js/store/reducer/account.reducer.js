"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function account(state = { accounts: [] }, action) {
    switch (action.type) {
        case constants_1.accountConstants.CONNECT_REQUEST:
            return {
                accounts: state.accounts,
                connecting: true,
            };
        case constants_1.accountConstants.CONNECT_SUCCESS:
            return {
                connected: true,
                accounts: state.accounts,
            };
        case constants_1.accountConstants.CONNECT_FAILURE:
            return {
                error: action.error,
                accounts: state.accounts,
            };
        default:
            return state;
    }
}
exports.account = account;
