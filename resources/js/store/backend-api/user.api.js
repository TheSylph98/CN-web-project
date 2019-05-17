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
                resolve(data['user_info']);
            }
            else {
                reject(data['errors']);
            }
        });
    });
}
exports.modify = modify;
