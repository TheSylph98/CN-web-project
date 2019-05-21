import { getData } from "./";

export function getTelecom() {
	return new Promise((resolve, reject) => {
		getData("nha-mang", {})
			.then(result => {
				if (result instanceof Array) {
					resolve(result.map(telecom => ({
						id: telecom["id"],
						name: telecom["tennhamang"],
					})));
				} else {
					reject("Internet Connection Error!");
				}
			})
	})
}

export function getTelecomById(id) {
	return new Promise((resolve, reject) => {
		getData("get-nha-mang", { id })
			.then(result => {
				if (result['get'] == 'success') {
					let telecom = result['nhamang'];
					resolve({
						id: telecom["id"],
						name: telecom["tennhamang"],
					});
				} else {
					reject(result['errors']);
				}
			})
	})
}