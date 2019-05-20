"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
function getNotification() {
    return new Promise((resolve, reject) => {
        _1.getData("thong-bao", {})
            .then(result => {
            if (result['noti'] == 'success') {
                resolve(result['thongbao'].map(notification => ({
                    id: notification["id"],
                    title: notification["tieude"],
                    content: notification["noidung"],
                    time: new Date(notification["time"]),
                    read: notification["daxem"] == 1,
                    type: notification["type"].split("_")[0],
                    transactionId: notification["type"].split("_")[1],
                })));
            }
            else {
                reject(result['errors']);
            }
        });
    });
}
exports.getNotification = getNotification;
function readNotification(id) {
    return new Promise(() => {
        let data = {
            id
        };
        _1.getData("update-thongbao", data);
    });
}
exports.readNotification = readNotification;
