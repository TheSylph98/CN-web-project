"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function modify(state = {}, action) {
    switch (action.type) {
        case constants_1.userConstants.MODIFY_REQUEST:
            return {
                modifying: true,
            };
        case constants_1.userConstants.MODIFY_SUCCESS:
            return {
                modified: true,
            };
        case constants_1.userConstants.MODIFY_FAILURE:
            return {
                error: action.error,
            };
        default:
            return state;
    }
}
exports.modify = modify;
