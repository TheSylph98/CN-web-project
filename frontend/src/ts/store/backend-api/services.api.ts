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

export function payMobileCard(telecomId, amount) {
	return new Promise((resolve, reject) => {
		getData("nap-the")
			.then(result => {
				
			})
	});
}