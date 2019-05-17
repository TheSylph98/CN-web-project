"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
function getBank() {
    return new Promise((resolve, reject) => {
        index_1.getData("bank")
            .then(banks => {
            if (banks instanceof Array) {
                resolve(banks.map(bank => ({
                    name: bank["ten_nganhang"],
                    id: bank["id"],
                })));
            }
            else {
                reject("");
            }
        });
    });
}
exports.getBank = getBank;
function connectAccount(accountNumber, bankId) {
    let data = {
        'sotaikhoan': accountNumber,
        'nganhang': bankId,
    };
    return new Promise((resolve, reject) => {
        index_1.getData("them-tai-khoan", data)
            .then(result => {
            if (result['add_account'] == 'true') {
                resolve();
            }
            else {
                reject(result['errors']);
            }
        });
    });
}
exports.connectAccount = connectAccount;
