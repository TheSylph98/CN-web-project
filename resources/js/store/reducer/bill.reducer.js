"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function bill(state = { type: { notLoad: true, types: [] }, bill: {} }, action) {
    switch (action.type) {
        case constants_1.userConstants.LOGOUT_SUCCESS:
            return Object.assign({}, state, { bill: {} });
        case constants_1.billConstants.TYPE_REQUEST:
            return Object.assign({}, state, { type: {
                    loading: true,
                    types: [],
                } });
        case constants_1.billConstants.TYPE_SUCCESS:
            return Object.assign({}, state, { type: {
                    loaded: true,
                    types: action.types,
                } });
        case constants_1.billConstants.TYPE_FAILURE:
            return Object.assign({}, state, { type: {
                    error: action.error,
                    types: []
                } });
        case constants_1.billConstants.BILL_REQUEST:
            return Object.assign({}, state, { bill: {
                    loading: true,
                } });
        case constants_1.billConstants.BILL_SUCCESS:
            return Object.assign({}, state, { bill: {
                    loaded: true,
                    bill: action.bill,
                } });
        case constants_1.billConstants.BILL_FAILURE:
            return Object.assign({}, state, { bill: {
                    error: action.error,
                } });
        default:
            return state;
    }
}
exports.bill = bill;
