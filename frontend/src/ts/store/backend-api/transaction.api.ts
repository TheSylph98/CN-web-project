import { getData } from "./";
import { TransactionType } from "../../utils";

export function getTransaction() {
	return new Promise((resolve, reject) => {
		getData("lich-su-giao-dich", {})
			.then(result => {
				if (result['trans'] == 'success') {
					let transactions = [];
					transactions = transactions.concat(result['chuyentien'].map(transaction => ({
						type: TransactionType.TRANSFER,
						id: transaction["id"],
						receiver: transaction["id_nhan"],
						message: transaction["noidung"],
						time: new Date(transaction["time"]),
						amount: transaction["sotien"],
					})));

					transactions = transactions.concat(result['naptien'].map(transaction => ({
						type: TransactionType.DEPOSIT,
						id: transaction["id"],
						account: transaction["id_taikhoan"],
						time: new Date(transaction["created_at"]),
						amount: transaction["sotien"],
					})));

					transactions = transactions.concat(result['napthe'].map(transaction => ({
						type: TransactionType.MOBILE_PAY,
						id: transaction["id"],
						telecom: transaction["nhamang_id"],
						time: new Date(transaction["created_at"]),
						amount: transaction["sotien"],
					})));

					transactions = transactions.concat(result['nhantien'].map(transaction => ({
						type: TransactionType.RECEIVE,
						id: transaction["id"],
						sender: transaction["id_chuyen"],
						time: new Date(transaction["time"]),
						message: transaction["noidung"],
						amount: transaction["sotien"],
					})));

					resolve(transactions);
				} else {
					reject(result["errors"]);
				}
			})

	})
}