"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_thunk_1 = require("redux-thunk");
const reducer_1 = require("../reducer");
exports.store = redux_1.createStore(reducer_1.default, redux_1.applyMiddleware(redux_thunk_1.default));
