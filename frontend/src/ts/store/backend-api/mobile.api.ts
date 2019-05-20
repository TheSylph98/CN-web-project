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