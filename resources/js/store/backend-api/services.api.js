"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
function transfer({ amount, email, message }) {
    let data = {
        "sotien": amount,
        "email_nhan": email,
        "noidung": message,
    };
    return new Promise((resolve, reject) => {
        _1.getData("post-transfer", data)
            .then(result => {
            if (result["title"] == "error") {
                reject(result["content"]);
            }
            else {
                resolve();
            }
        });
    });
}
exports.transfer = transfer;
function deposit(account, amount) {
    let data = {
        "sotk": account,
        "sotien": amount,
    };
    return new Promise((resolve, reject) => {
        _1.getData("post-add-money", data)
            .then(result => {
            if (result["title"] == "error") {
                reject(result["content"]);
            }
            else {
                resolve();
            }
        });
    });
}
exports.deposit = deposit;
function payMobileCard(telecomId, amount) {
    let data = {
        "sotien": amount,
        "nhamang": telecomId,
    };
    return new Promise((resolve, reject) => {
        _1.getData("nap-the", data)
            .then(result => {
            if (result["napthe"] != "error") {
                resolve(result['code']);
            }
            else {
                reject(result["message"]);
            }
        });
    });
}
exports.payMobileCard = payMobileCard;
function payBill(code, type) {
    let data = {
        "id_loaihoadon": type,
        "mahoadon": code,
    };
    return new Promise((resolve, reject) => {
        _1.getData("post-pay-bill", data)
            .then(result => {
            if (result["title"] == "success") {
                resolve();
            }
            else {
                reject(result["content"]);
            }
        });
    });
}
exports.payBill = payBill;
