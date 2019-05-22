"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function account(state = { notLoad: true, accounts: [] }, action) {
    switch (action.type) {
        case constants_1.userConstants.LOGOUT_SUCCESS:
            return {
                notLoad: true,
                accounts: [],
            };
        case constants_1.accountConstants.CONNECT_REQUEST:
            return Object.assign({}, state, { accounts: state.accounts, connecting: true });
        case constants_1.accountConstants.CONNECT_SUCCESS:
            return Object.assign({}, state, { connected: true, accounts: state.accounts });
        case constants_1.accountConstants.CONNECT_FAILURE:
            return Object.assign({}, state, { error: action.error, accounts: state.accounts });
        case constants_1.accountConstants.ACCOUNT_REQUEST:
            return Object.assign({}, state, { notLoad: false, accounts: state.accounts, loading: true });
        case constants_1.accountConstants.ACCOUNT_SUCCESS:
            return Object.assign({}, state, { notLoad: false, loaded: true, accounts: action.accounts });
        case constants_1.accountConstants.ACCOUNT_FAILURE:
            return Object.assign({}, state, { notLoad: true, error: action.error, accounts: state.accounts });
        default:
            return state;
    }
}
exports.account = account;
