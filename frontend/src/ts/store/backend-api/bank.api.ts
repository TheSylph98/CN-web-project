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
				if (result['link'] == 'success') {
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
				if (result['account'] instanceof Array) {
					resolve(result['account'].map((account,index) => ({
						number: account['sotaikhoan'],
						name: result['bank'][index]['ten_nganhang'],
						id: account['id'],
					})))
				} else {
					reject(result['message']);
				}
			})
	})
}

export function getBankById(id) {
	let data = { id };
	return new Promise((resolve, reject) => {
		getData("get-bank", data)
			.then(result => {
				if (result['get'] == 'success') {
					let bank = result['nganhang'];
					resolve({
						name: bank["ten_nganhang"],
						id: bank["id"],
					});
				} else {
					reject(result['errors']);
				}
			})
	})
}

export function getAccountById(id) {
	let data = { id };
	return new Promise((resolve, reject) => {
		getData("get-account", data)
			.then(result => {
				if (result['get'] == 'success') {
					let account = result['taikhoan'];
					resolve({
						number: account['sotaikhoan'],
						name: account["ten_nganhang"],
						id: account["id"],
					});
				} else {
					reject(result['errors']);
				}
			})
	})
}