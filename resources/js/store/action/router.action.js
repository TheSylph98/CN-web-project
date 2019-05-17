"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
exports.routerActions = {
    init,
    push
};
function init(history) {
    return {
        type: constants_1.routerConstants.INIT,
        history
    };
}
function push(url) {
    return {
        type: constants_1.routerConstants.PUSH,
        url
    };
}
