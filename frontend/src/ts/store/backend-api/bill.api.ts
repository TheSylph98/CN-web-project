import { getData } from "./";

export function getBillType() {
	return new Promise((resolve, reject) => {
		getData("bill-type")
			.then(result => {
				if (result instanceof Array) {
					resolve(result.map(type => ({
						id: type["id"],
						name: type["tenloai"],
					})))
				} else {
					reject("Internet Connection Error");
				}
			})
	})
}

export function getBill(code, type) {
	let data = { 
		"mahoadon": code,
		"id_loaihoadon": type 
	};

	return new Promise((resolve, reject) => {
		getData("get-bill", data)
			.then(result => {
				if (result['title'] == 'success') {
					let bill = result["content"];
					resolve({
						id: bill['id'],
						code: bill['mahoadon'],
						amount: bill['sotien'],
						provider: bill['ten_nhacungcap'],
						type: bill['loaihoadon_id'],
					})
				} else {
					reject(result["content"]);
				}
			})
	})
}

export function getBillById(id) {
	let data = { 
		id
	};

	return new Promise((resolve, reject) => {
		getData("get-bill-id", data)
			.then(result => {
				if (result['title'] == 'success') {
					let bill = result['content'];
					resolve({
						id: bill['id'],
						code: bill['mahoadon'],
						amount: bill['sotien'],
						provider: bill['ten_nhacungcap'],
						type: result['type'],
					})
				} else {
					reject(result["content"]);
				}
			})
	})
}