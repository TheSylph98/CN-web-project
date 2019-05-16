"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getData(url, body = {}, token) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-Token": token,
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify(body),
        })
            .then(response => {
            resolve(response.json());
        })
            .catch(e => {
            reject(e);
        });
    });
}
exports.getData = getData;
function loginAuth(name, password, token) {
    let data = {
        "email": name,
        "password": password,
    };
    return new Promise((resolve, reject) => {
        getData("dang-nhap", data, token)
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
function register(input, token) {
    let data = {
        "username": input.username,
        "email": input.email,
        "diachi": "",
        "password": input.password,
        "sodt": input.phone,
        "password_again": input.verifyPassword
    };
    return new Promise((resolve, reject) => {
        getData("dang-ki", data, token)
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
