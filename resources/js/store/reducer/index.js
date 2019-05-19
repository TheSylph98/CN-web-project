"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const login_reducer_1 = require("./login.reducer");
const register_reducer_1 = require("./register.reducer");
const alert_reducer_1 = require("./alert.reducer");
const modify_reducer_1 = require("./modify.reducer");
const bank_reducer_1 = require("./bank.reducer");
const account_reducer_1 = require("./account.reducer");
const friend_reducer_1 = require("./friend.reducer");
const rootReducer = redux_1.combineReducers({
    login: login_reducer_1.login,
    register: register_reducer_1.register,
    alert: alert_reducer_1.alert,
    bank: bank_reducer_1.bank,
    modify: modify_reducer_1.modify,
    account: account_reducer_1.account,
    friend: friend_reducer_1.friend,
});
exports.default = rootReducer;
