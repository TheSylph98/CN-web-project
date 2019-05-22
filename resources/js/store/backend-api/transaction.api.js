"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const utils_1 = require("../../utils");
function getTransaction() {
    return new Promise((resolve, reject) => {
        _1.getData("lich-su-giao-dich", {})
            .then(result => {
            if (result['trans'] == 'success') {
                let transactions = [];
                transactions = transactions.concat(result['chuyentien'].map(transaction => ({
                    type: utils_1.TransactionType.TRANSFER,
                    id: transaction["id"],
                    receiver: transaction["id_nhan"],
                    message: transaction["noidung"],
                    time: new Date(transaction["created_at"]),
                    amount: transaction["sotien"],
                })));
                transactions = transactions.concat(result['naptien'].map(transaction => ({
                    type: utils_1.TransactionType.DEPOSIT,
                    id: transaction["id"],
                    account: transaction["id_taikhoan"],
                    time: new Date(transaction["created_at"]),
                    amount: transaction["sotien"],
                })));
                transactions = transactions.concat(result['napthe'].map(transaction => ({
                    type: utils_1.TransactionType.MOBILE_PAY,
                    id: transaction["id"],
                    telecom: transaction["nhamang_id"],
                    time: new Date(transaction["created_at"]),
                    amount: transaction["sotien"],
                })));
                transactions = transactions.concat(result['nhantien'].map(transaction => ({
                    type: utils_1.TransactionType.RECEIVE,
                    id: transaction["id"],
                    sender: transaction["id_chuyen"],
                    time: new Date(transaction["created_at"]),
                    message: transaction["noidung"],
                    amount: transaction["sotien"],
                })));
                transactions = transactions.concat(result['thanhtoan'].map(transaction => ({
                    type: utils_1.TransactionType.PAY,
                    id: transaction["id"],
                    bill: transaction["hoadon_id"],
                    time: new Date(transaction["created_at"]),
                })));
                resolve(transactions);
            }
            else {
                reject(result["errors"]);
            }
        });
    });
}
exports.getTransaction = getTransaction;
