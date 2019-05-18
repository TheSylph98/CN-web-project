import {getData } from "./index";

export function getBank() {
	return new Promise((resolve, reject) => {
		getData("bank")
			.then(banks => {
				if (banks instanceof Array) {
					resolve(banks.map(bank => ({
						name: bank["ten_nganhang"],
						id: bank["id"],
					})));
				} else {
					reject("");
				}
			})
	})
}

export function connectAccount(accountNumber: string, bankId: string) {
	let data = {
		'sotaikhoan': accountNumber,
	}
	if (bankId) {
		data['nganhang'] = bankId;
	}
	return new Promise((resolve, reject) => {
		getData("them-tai-khoan", data)
			.then(result => {
				if (result['add_account'] == 'true') {
					resolve();
				} else {
					reject(result['errors']);
				}
			})
	})
}

export function getConnectedAccount() {
	return new Promise((resolve, reject) => {
		getData("bank-user")
			.then(result => {
				if (result instanceof Array) {
					resolve(result.map(bank => ({
						name: bank['ten_nganhang'],
						id: bank['id'],
					})))
				} else {
					reject(result['message']);
				}
			})
	})
}