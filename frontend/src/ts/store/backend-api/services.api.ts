import { getData } from "./";

export function transfer({amount, email, message}) {
	let data = {
		"sotien": amount,
		"email_nhan": email,
		"noidung": message,
	}

	return new Promise((resolve, reject) => {
		getData("post-transfer", data)
			.then(result => {
				if (result["title"] == "error") {
					reject(result["content"]);
				} else {
					resolve();
				}
			})
	})
}

export function deposit(account, amount) {
	let data = {
		"sotk": account,
		"sotien": amount,
	}

	return new Promise((resolve, reject) => {
		getData("post-add-money", data)
			.then(result => {
				if (result["title"] == "error") {
					reject(result["content"]);
				} else {
					resolve();
				}
			})
	})
}

export function payMobileCard(telecomId, amount) {
	let data = {
		"sotien": amount,
		"nhamang": telecomId,
	}
	return new Promise((resolve, reject) => {
		getData("nap-the", data)
			.then(result => {
				if (result["napthe"] != "error") {
					resolve(result['code']);	
				} else {
					reject(result["message"]);
				}
			})
	});
}