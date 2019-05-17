"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function router(state = {}, action) {
    switch (action.type) {
        case constants_1.routerConstants.INIT:
            return {
                history: action.history
            };
        case constants_1.routerConstants.PUSH:
            if (state["history"]) {
                state["history"].push(action.url);
            }
            return state;
        default:
            return state;
    }
}
exports.router = router;
