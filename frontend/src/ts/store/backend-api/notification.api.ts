import { getData } from "./";

export function getNotification() {
	return new Promise((resolve, reject) => {
		getData("thong-bao", {}) 
			.then(result => {
				if (result['noti'] == 'success') {
					resolve(result['thongbao'].map(notification => ({
						title: notification["tieude"],
						content: notification["noidung"],
						time: notification["time"],
						read: true,
					})));
				} else {
					reject(result['errors']);
				}
			})
	})
}