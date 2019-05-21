"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const backend = require("../backend-api");
const utils_1 = require("../../utils");
exports.transactionActions = {
    load,
};
function load() {
    return (dispatch) => {
        dispatch(request());
        backend.getTransaction()
            .then((transactions) => {
            Promise.all(transactions.map(transaction => {
                if (transaction.type == utils_1.TransactionType.TRANSFER) {
                    return new Promise(resolve => {
                        backend.getInfo(transaction.receiver)
                            .then(user => {
                            transaction.receiver = user;
                            resolve();
                        });
                    });
                }
                else if (transaction.type == utils_1.TransactionType.RECEIVE) {
                    return new Promise(resolve => {
                        backend.getInfo(transaction.sender)
                            .then(user => {
                            transaction.sender = user;
                            resolve();
                        });
                    });
                }
                else if (transaction.type == utils_1.TransactionType.MOBILE_PAY) {
                    return new Promise(resolve => {
                        backend.getTelecomById(transaction.telecom)
                            .then(telecom => {
                            transaction.telecom = telecom;
                            resolve();
                        });
                    });
                }
                else if (transaction.type == utils_1.TransactionType.DEPOSIT) {
                    return new Promise(resolve => {
                        backend.getAccountById(transaction.account)
                            .then(account => {
                            transaction.account = account;
                            resolve();
                        });
                    });
                }
            })).then(() => {
                dispatch(success(transactions));
            });
        }, error => {
            dispatch(failure(error));
        });
    };
    function request() { return { type: constants_1.transactionConstants.TRANSACTION_REQUEST }; }
    ;
    function success(transactions) { return { type: constants_1.transactionConstants.TRANSACTION_SUCCESS, transactions }; }
    ;
    function failure(error) { return { type: constants_1.transactionConstants.TRANSACTION_FAILURE, error }; }
    ;
}
