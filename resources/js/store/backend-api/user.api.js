"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
function loginAuth(name, password) {
    let data = {
        "email": name,
        "password": password,
    };
    return new Promise((resolve, reject) => {
        index_1.getData("dang-nhap", data)
            .then(data => {
            if (data["login"] === "success") {
                resolve(data["user"]);
            }
            else {
                reject(data["errors"]);
            }
        });
    });
}
exports.loginAuth = loginAuth;
function register(input) {
    let data = {
        "username": input.username,
        "email": input.email,
        "diachi": "",
        "password": input.password,
        "sodt": input.phone,
        "password_again": input.verifyPassword
    };
    return new Promise((resolve, reject) => {
        index_1.getData("dang-ki", data)
            .then(data => {
            if (data['register'] == 'success') {
                resolve(data['user']);
            }
            else {
                reject(data['errors']);
            }
        });
    });
}
exports.register = register;
function logout() {
    return new Promise((resolve, reject) => {
        index_1.getData("dang-xuat", {})
            .then(message => {
            if (message["logout"] == 'success') {
                resolve();
            }
            else {
                reject(message['errors']);
            }
        });
    });
}
exports.logout = logout;
function modify(input) {
    let data = {
        username: input.username,
        diachi: input.address,
        sodt: input.phone,
    };
    return new Promise((resolve, reject) => {
        index_1.getData("quan-li-thong-tin", data)
            .then(data => {
            if (data['update_info'] == 'true') {
                let user = data['user_info'];
                resolve({
                    username: user['ten'],
                    email: user['email'],
                    address: user['diachi'],
                    phone: user['sodienthoai'],
                    amount: user['sotien']
                });
            }
            else {
                reject(data['errors']);
            }
        });
    });
}
exports.modify = modify;
function update() {
    return new Promise((resolve, reject) => {
        index_1.getData("thong-tin-ca-nhan", {})
            .then(result => {
            if (result["check"] == 'true') {
                let user = result['user_info'];
                resolve({
                    username: user['ten'],
                    email: user['email'],
                    address: user['diachi'],
                    phone: user['sodienthoai'],
                    amount: user['sotien']
                });
            }
            else {
                reject(result['message']);
            }
        });
    });
}
exports.update = update;
function getInfo(id) {
    let data = {
        id
    };
    return new Promise((resolve, reject) => {
        index_1.getData("thong-tin-user", data)
            .then(result => {
            if (result["get"] == 'success') {
                let user = result['user'];
                resolve({
                    username: user['ten'],
                    email: user['email'],
                    address: user['diachi'],
                    phone: user['sodienthoai'],
                });
            }
            else {
                reject(result['errors']);
            }
        });
    });
}
exports.getInfo = getInfo;
