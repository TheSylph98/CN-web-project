"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const backend = require("../backend-api");
exports.friendActions = {
    getFriendList,
    addFriend,
};
function getFriendList() {
    return dispatch => {
        dispatch(request());
        backend.getFriendList()
            .then(friends => {
            dispatch(success(friends));
        }, error => {
            dispatch(failure(error));
        });
    };
    function request() { return { type: constants_1.friendConstants.FRIEND_REQUEST }; }
    ;
    function success(friends) { return { type: constants_1.friendConstants.FRIEND_SUCCESS, friends }; }
    ;
    function failure(error) { return { type: constants_1.friendConstants.FRIEND_FAILURE, error }; }
    ;
}
function addFriend(email) {
    return dispatch => {
        dispatch(request());
        backend.addFriend(email)
            .then(() => {
            dispatch(success());
            dispatch(getFriendList());
        }, error => {
            dispatch(failure(error));
        });
    };
    function request() { return { type: constants_1.friendConstants.ADD_FRIEND_REQUEST }; }
    ;
    function success() { return { type: constants_1.friendConstants.ADD_FRIEND_SUCCESS }; }
    ;
    function failure(error) { return { type: constants_1.friendConstants.ADD_FRIEND_FAILURE, error }; }
    ;
}
