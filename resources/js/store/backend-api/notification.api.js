"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
function getNotification() {
    return new Promise((resolve, reject) => {
        _1.getData("thong-bao", {})
            .then(result => {
            if (result['noti'] == 'success') {
                resolve(result['thongbao'].map(notification => ({
                    title: notification["tieude"],
                    content: notification["noidung"],
                    time: notification["time"],
                    read: true,
                })));
            }
            else {
                reject(result['errors']);
            }
        });
    });
}
exports.getNotification = getNotification;
