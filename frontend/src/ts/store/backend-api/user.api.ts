import {getData} from "./index";

export function loginAuth(name: string, password: string) {
	let data = {
		"email": name,
		"password": password,
	}

	return new Promise((resolve, reject) => {
        getData("dang-nhap", data)
            .then(data => {
            	if (data["login"] === "success") {
                    resolve(data["user"]);
                } else {
                    reject(data["errors"]);
                }
            }); 
        })
}

export function register(input: {email, password, username, phone, verifyPassword}) {
    let data = {
        "username": input.username,
        "email": input.email,
        "diachi": "",
        "password": input.password,
        "sodt": input.phone,
        "password_again": input.verifyPassword
    }
    return new Promise((resolve, reject) => {
        getData("dang-ki", data)
            .then(data => {
                if (data['register'] == 'success') {
                    resolve(data['user']);
                } else {
                    reject(data['errors']);
                }
            })
    })
}

export function logout() {

    return new Promise((resolve, reject) => {
        getData("dang-xuat", {})
            .then(message => {
                if (message["logout"] == 'success') {
                    resolve();
                } else {
                    reject(message['errors']);
                }
            })
    })
}

export function modify(input: {address, username, phone}) {
    let data = {
        username: input.username,
        diachi: input.address,
        sodt: input.phone,
    }

    return new Promise((resolve, reject) => {
        getData("quan-li-thong-tin", data)
            .then(data => {
                if (data['update_info'] == 'true') {
                    resolve(data['user_info']);
                } else {
                    reject(data['errors']);
                }
            })
    })
}
