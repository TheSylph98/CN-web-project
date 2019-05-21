import { transactionConstants } from "../constants";
import backend = require("../backend-api");
import { TransactionType } from "../../utils";

export const transactionActions = {
	load,
}

function load() {
	return (dispatch) => {
		dispatch(request());

		backend.getTransaction()
			.then(
				(transactions: Array<any>) => {
					Promise.all(
						transactions.map(transaction => {
							if (transaction.type == TransactionType.TRANSFER) {
								return new Promise(resolve => {
									backend.getInfo(transaction.receiver)
										.then(user => {
											transaction.receiver = user;
											resolve();
										});
								})
							} else if (transaction.type == TransactionType.RECEIVE) {
								return new Promise(resolve => {
									backend.getInfo(transaction.sender)
										.then(user => {
											transaction.sender = user;
											resolve();
										})
								})
							} else if (transaction.type == TransactionType.MOBILE_PAY) {
								return new Promise(resolve => {
									backend.getTelecomById(transaction.telecom)
										.then(telecom => {
											transaction.telecom = telecom;
											resolve();
										})
								})
							} else if (transaction.type == TransactionType.DEPOSIT) {
								return new Promise(resolve => {
									backend.getAccountById(transaction.account)
										.then(account => {
											transaction.account = account;
											resolve();
										})
								})
							} else if (transaction.type == TransactionType.PAY) {
								return new Promise(resolve => {
									backend.getBillById(transaction.bill)
										.then(bill => {
											transaction.bill = bill;
											transaction.amount = bill['amount'];
											resolve();
										})
								})
							}
					})).then(() => {
						dispatch(success(transactions));
					})
				},
				error => {
					dispatch(failure(error));
				}
			);
	};

	function request() { return {type: transactionConstants.TRANSACTION_REQUEST}};
	function success(transactions) { return {type: transactionConstants.TRANSACTION_SUCCESS, transactions}};
	function failure(error) { return {type: transactionConstants.TRANSACTION_FAILURE, error}};
}