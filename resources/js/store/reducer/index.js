"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const login_reducer_1 = require("./login.reducer");
const register_reducer_1 = require("./register.reducer");
const modify_reducer_1 = require("./modify.reducer");
const bank_reducer_1 = require("./bank.reducer");
const account_reducer_1 = require("./account.reducer");
const friend_reducer_1 = require("./friend.reducer");
const services_reducer_1 = require("./services.reducer");
const notification_reducer_1 = require("./notification.reducer");
const transaction_reducer_1 = require("./transaction.reducer");
const mobile_reducer_1 = require("./mobile.reducer");
const bill_reducer_1 = require("./bill.reducer");
const rootReducer = redux_1.combineReducers({
    login: login_reducer_1.login,
    register: register_reducer_1.register,
    bank: bank_reducer_1.bank,
    modify: modify_reducer_1.modify,
    account: account_reducer_1.account,
    friend: friend_reducer_1.friend,
    services: services_reducer_1.services,
    notification: notification_reducer_1.notification,
    transaction: transaction_reducer_1.transaction,
    mobile: mobile_reducer_1.mobile,
    bill: bill_reducer_1.bill,
});
exports.default = rootReducer;
