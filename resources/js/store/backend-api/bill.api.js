"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
function getBillType() {
    return new Promise((resolve, reject) => {
        _1.getData("bill-type")
            .then(result => {
            if (result instanceof Array) {
                resolve(result.map(type => ({
                    id: type["id"],
                    name: type["tenloai"],
                })));
            }
            else {
                reject("Internet Connection Error");
            }
        });
    });
}
exports.getBillType = getBillType;
function getBill(code, type) {
    let data = {
        "mahoadon": code,
        "id_loaihoadon": type
    };
    return new Promise((resolve, reject) => {
        _1.getData("get-bill", data)
            .then(result => {
            if (result['title'] == 'success') {
                let bill = result["content"];
                resolve({
                    id: bill['id'],
                    code: bill['mahoadon'],
                    amount: bill['sotien'],
                    provider: bill['ten_nhacungcap'],
                    type: bill['loaihoadon_id'],
                });
            }
            else {
                reject(result["content"]);
            }
        });
    });
}
exports.getBill = getBill;
function getBillById(id) {
    let data = {
        id
    };
    return new Promise((resolve, reject) => {
        _1.getData("get-bill-id", data)
            .then(result => {
            if (result['title'] == 'success') {
                let bill = result['content'];
                resolve({
                    id: bill['id'],
                    code: bill['mahoadon'],
                    amount: bill['sotien'],
                    provider: bill['ten_nhacungcap'],
                    type: result['type'],
                });
            }
            else {
                reject(result["content"]);
            }
        });
    });
}
exports.getBillById = getBillById;
