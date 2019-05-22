"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function account(state = { list: { notLoad: true, accounts: [] }, connect: {} }, action) {
    switch (action.type) {
        case constants_1.userConstants.LOGOUT_SUCCESS:
            return {
                list: { notLoad: true, accounts: [] },
                connect: {}
            };
        case constants_1.accountConstants.CONNECT_REQUEST:
            return Object.assign({}, state, { connect: {
                    connecting: true,
                } });
        case constants_1.accountConstants.CONNECT_SUCCESS:
            return Object.assign({}, state, { connect: {
                    connected: true,
                } });
        case constants_1.accountConstants.CONNECT_FAILURE:
            return Object.assign({}, state, { connect: {
                    error: action.error,
                } });
        case constants_1.accountConstants.ACCOUNT_REQUEST:
            return Object.assign({}, state, { list: {
                    notLoad: false,
                    accounts: state.list.accounts,
                } });
        case constants_1.accountConstants.ACCOUNT_SUCCESS:
            return Object.assign({}, state, { list: {
                    notLoad: false,
                    loaded: true,
                    accounts: action.accounts,
                } });
        case constants_1.accountConstants.ACCOUNT_FAILURE:
            return Object.assign({}, state, { list: {
                    notLoad: true,
                    error: action.error,
                } });
        default:
            return state;
    }
}
exports.account = account;
