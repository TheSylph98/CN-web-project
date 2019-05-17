export function getData(url: string, body = {}, token: string) {
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
        })
    })
}

export function loginAuth(name: string, password: string, token: string) {
	let data = {
		"email": name,
		"password": password,
	}

	return new Promise((resolve, reject) => {
        getData("dang-nhap", data, token)
            .then(data => {
            	if (data["login"] === "success") {
                    resolve(data["user"]);
                } else {
                    reject(data["errors"]);
                }
            }); 
        })
}

export function register(input: {email, password, username, phone, verifyPassword}, token: string) {
    let data = {
        "username": input.username,
        "email": input.email,
        "diachi": "",
        "password": input.password,
        "sodt": input.phone,
        "password_again": input.verifyPassword
    }
    return new Promise((resolve, reject) => {
        getData("dang-ki", data, token)
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

    let token = document.getElementById("csrf-token").getAttribute("content");

    return new Promise((resolve, reject) => {
        getData("dang-xuat", {}, token)
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

    let token = document.getElementById("csrf-token").getAttribute("content");

    return new Promise((resolve, reject) => {
        getData("quan-li-thong-tin", data, token)
            .then(data => {
                if (data['update_info'] == 'true') {
                    resolve(data['user_info']);
                } else {
                    reject(data['errors']);
                }
            })
    })
}
