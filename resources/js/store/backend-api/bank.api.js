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
    };
    if (bankId) {
        data['nganhang'] = bankId;
    }
    return new Promise((resolve, reject) => {
        index_1.getData("them-tai-khoan", data)
            .then(result => {
            if (result['link'] == 'success') {
                resolve();
            }
            else {
                reject(result['errors']);
            }
        });
    });
}
exports.connectAccount = connectAccount;
function getConnectedAccount() {
    return new Promise((resolve, reject) => {
        index_1.getData("bank-user")
            .then(result => {
            if (result['account'] instanceof Array) {
                resolve(result['account'].map((account, index) => ({
                    number: account['sotaikhoan'],
                    name: result['bank'][index]['ten_nganhang'],
                    id: account['id'],
                })));
            }
            else {
                reject(result['message']);
            }
        });
    });
}
exports.getConnectedAccount = getConnectedAccount;
function getBankById(id) {
    let data = { id };
    return new Promise((resolve, reject) => {
        index_1.getData("get-bank", data)
            .then(result => {
            if (result['get'] == 'success') {
                let bank = result['nganhang'];
                resolve({
                    name: bank["ten_nganhang"],
                    id: bank["id"],
                });
            }
            else {
                reject(result['errors']);
            }
        });
    });
}
exports.getBankById = getBankById;
function getAccountById(id) {
    let data = { id };
    return new Promise((resolve, reject) => {
        index_1.getData("get-account", data)
            .then(result => {
            if (result['get'] == 'success') {
                let account = result['taikhoan'];
                resolve({
                    number: account['sotaikhoan'],
                    name: account["ten_nganhang"],
                    id: account["id"],
                });
            }
            else {
                reject(result['errors']);
            }
        });
    });
}
exports.getAccountById = getAccountById;
