"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function services(state = { transfer: {}, mobile: {}, deposit: {}, pay: {} }, action) {
    switch (action.type) {
        case constants_1.userConstants.LOGOUT_SUCCESS:
            return {
                transfer: {}, mobile: {}, deposit: {}, pay: {}
            };
        case constants_1.servicesConstants.TRANSFER_REQUEST:
            return Object.assign({}, state, { transfer: {
                    transfering: true,
                } });
        case constants_1.servicesConstants.TRANSFER_SUCCESS:
            return Object.assign({}, state, { transfer: {
                    transfered: true,
                } });
        case constants_1.servicesConstants.TRANSFER_FAILURE:
            return Object.assign({}, state, { transfer: {
                    error: action.error,
                } });
        case constants_1.servicesConstants.MOBILE_REQUEST:
            return Object.assign({}, state, { mobile: {
                    paying: true,
                } });
        case constants_1.servicesConstants.MOBILE_SUCCESS:
            return Object.assign({}, state, { mobile: {
                    payed: true,
                    code: action.code,
                } });
        case constants_1.servicesConstants.MOBILE_FAILURE:
            return Object.assign({}, state, { mobile: {
                    error: action.error,
                } });
        case constants_1.servicesConstants.DEPOSIT_REQUEST:
            return Object.assign({}, state, { deposit: {
                    depositing: true,
                } });
        case constants_1.servicesConstants.DEPOSIT_SUCCESS:
            return Object.assign({}, state, { deposit: {
                    deposited: true,
                } });
        case constants_1.servicesConstants.TRANSFER_FAILURE:
            return Object.assign({}, state, { deposit: {
                    error: action.error,
                } });
        case constants_1.servicesConstants.PAY_REQUEST:
            return Object.assign({}, state, { pay: {
                    paying: true,
                } });
        case constants_1.servicesConstants.PAY_SUCCESS:
            return Object.assign({}, state, { pay: {
                    payed: true,
                } });
        case constants_1.servicesConstants.PAY_FAILURE:
            return Object.assign({}, state, { pay: {
                    error: action.error,
                } });
        default:
            return state;
    }
}
exports.services = services;
