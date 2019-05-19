"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationType = {
    TRANSFER: "chuyentien",
    PAY: "thanhtoan",
    DEPOSIT: "naptien",
    RECEIVE: "nhantien",
    MOBILE_PAY: "napthe",
};
exports.TransactionType = {
    TRANSFER: "TRANSFER",
    PAY: "PAY",
    DEPOSIT: "DEPOSIT",
    RECEIVE: "RECEIVE",
    MOBILE_PAY: "MOBILE_PAY",
};
function compare(noti, trans) {
    if (noti == exports.NotificationType.TRANSFER && trans == exports.TransactionType.TRANSFER) {
        return true;
    }
    if (noti == exports.NotificationType.PAY && trans == exports.TransactionType.PAY) {
        return true;
    }
    if (noti == exports.NotificationType.DEPOSIT && trans == exports.TransactionType.DEPOSIT) {
        return true;
    }
    if (noti == exports.NotificationType.RECEIVE && trans == exports.TransactionType.RECEIVE) {
        return true;
    }
    if (noti == exports.NotificationType.MOBILE_PAY && trans == exports.TransactionType.MOBILE_PAY) {
        return true;
    }
    return false;
}
exports.compare = compare;
