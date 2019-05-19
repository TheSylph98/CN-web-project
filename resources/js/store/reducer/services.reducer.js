"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function services(state = {}, action) {
    switch (action.type) {
        case constants_1.servicesConstants.TRANSFER_REQUEST:
            return {
                transfering: true,
            };
        case constants_1.servicesConstants.TRANSFER_SUCCESS:
            return {
                transfered: true,
            };
        case constants_1.servicesConstants.TRANSFER_FAILURE:
            return {
                transferError: action.error,
            };
        default:
            return state;
    }
}
exports.services = services;
