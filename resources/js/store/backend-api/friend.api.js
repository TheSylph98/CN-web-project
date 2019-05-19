"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
function getFriendList() {
    return new Promise((resolve, reject) => {
        index_1.getData("danh-ba")
            .then(friends => {
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
