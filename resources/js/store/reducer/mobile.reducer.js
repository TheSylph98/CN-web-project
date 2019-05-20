"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function mobile(state = { notLoad: true, telecoms: [] }, action) {
    switch (action.type) {
        case constants_1.mobileConstants.MOBILE_REQUEST:
            return {
                notLoad: false,
                loading: true,
                telecoms: [],
            };
        case constants_1.mobileConstants.MOBILE_SUCCESS:
            return {
                notLoad: false,
                loaded: true,
                telecoms: action.telecoms,
            };
        case constants_1.mobileConstants.MOBILE_FAILURE:
            return {
                notLoad: true,
                error: action.error,
                telecoms: []
            };
        default:
            return state;
    }
}
exports.mobile = mobile;
