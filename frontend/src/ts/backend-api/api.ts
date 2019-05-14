export function getData(url: string) {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then(response => {
				resolve(response.json())
			})
			.catch(e => reject(e));
	})
}

export function loginAuth(name: string, password: string, token: string) {
	let data = {
		"email": name,
		"password": password,
	}
	return fetch("dang-nhap", {
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
        body: JSON.stringify(data), 
    })
    .then(response => response.json())
    .then(data => data);
}