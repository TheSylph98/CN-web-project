"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
function getFriendList() {
    return new Promise((resolve, reject) => {
        index_1.getData("danh-ba")
            .then(friends => {
            friends = friends['danhba'];
            if (friends instanceof Array) {
                resolve(friends.map(friend => ({
                    username: friend["ten"],
                    email: friend["email"],
                    phone: friend["sodienthoai"],
                    id: friend["id"],
                })));
            }
            else {
                reject(friends["errors"]);
            }
        });
    });
}
exports.getFriendList = getFriendList;
function addFriend(email) {
    let data = { email };
    return new Promise((resolve, reject) => {
        index_1.getData("them-danh-ba", data)
            .then(result => {
            if (result['link_user'] == 'success') {
                resolve();
            }
            else {
                reject(result['message']);
            }
        });
    });
}
exports.addFriend = addFriend;
