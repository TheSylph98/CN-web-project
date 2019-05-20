"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function bank(state = { notLoad: true, banks: [] }, action) {
    switch (action.type) {
        case constants_1.bankConstants.BANK_REQUEST:
            return {
                loading: true,
                banks: [],
            };
        case constants_1.bankConstants.BANK_SUCCESS:
            return {
                loaded: true,
                banks: action.banks,
            };
        case constants_1.bankConstants.BANK_FAILURE:
            return {
                error: action.error,
                banks: []
            };
        default:
            return state;
    }
}
exports.bank = bank;
