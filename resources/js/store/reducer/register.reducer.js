"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function register(state = {}, action) {
    switch (action.type) {
        case constants_1.userConstants.REGISTER_REQUEST:
            return { registering: true };
        case constants_1.userConstants.REGISTER_SUCCESS:
            return {};
        case constants_1.userConstants.REGISTER_FAILURE:
            return { error: action.error };
        default:
            return state;
    }
}
exports.register = register;
