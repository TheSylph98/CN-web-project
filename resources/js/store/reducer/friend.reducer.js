"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function friend(state = { friends: [], notLoad: true }, action) {
    switch (action.type) {
        case constants_1.friendConstants.FRIEND_REQUEST:
            return Object.assign({}, state, { notLoad: false, loading: true, friends: [] });
        case constants_1.friendConstants.FRIEND_SUCCESS:
            return Object.assign({}, state, { notLoad: false, loaded: true, friends: action.friends });
        case constants_1.friendConstants.FRIEND_FAILURE:
            return Object.assign({}, state, { notLoad: true, error: action.error, friends: [] });
        case constants_1.friendConstants.ADD_FRIEND_REQUEST:
            return Object.assign({}, state, { adding: true });
        case constants_1.friendConstants.ADD_FRIEND_SUCCESS:
            return Object.assign({}, state, { adding: false, added: true });
        case constants_1.friendConstants.ADD_FRIEND_FAILURE:
            return Object.assign({}, state, { error: action.error });
        default:
            return state;
    }
}
exports.friend = friend;
