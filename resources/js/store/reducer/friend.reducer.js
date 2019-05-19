"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function friend(state = { friends: [], notLoad: true }, action) {
    switch (action.type) {
        case constants_1.friendConstants.FRIEND_REQUEST:
            return {
                notLoad: false,
                loading: true,
                friends: [],
            };
        case constants_1.friendConstants.FRIEND_SUCCESS:
            return {
                notLoad: false,
                loaded: true,
                friends: action.friends,
            };
        case constants_1.friendConstants.FRIEND_FAILURE:
            return {
                notLoad: true,
                error: action.error,
                friends: []
            };
        default:
            return state;
    }
}
exports.friend = friend;
