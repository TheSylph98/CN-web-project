export const NotificationType = {
	TRANSFER: "chuyentien",
	PAY: "thanhtoan",
	DEPOSIT: "naptien",
	RECEIVE: "nhantien",
	MOBILE_PAY: "napthe",
}

export const TransactionType = {
	TRANSFER: "TRANSFER",
	PAY: "PAY",
	DEPOSIT: "DEPOSIT",
	RECEIVE: "RECEIVE",
	MOBILE_PAY: "MOBILE_PAY",
}

export function compare(noti, trans) {
	if (noti == NotificationType.TRANSFER && trans == TransactionType.TRANSFER) {
		return true;
	}
	if (noti == NotificationType.PAY && trans == TransactionType.PAY) {
		return true;
	}
	if (noti == NotificationType.DEPOSIT && trans == TransactionType.DEPOSIT) {
		return true;
	}
	if (noti == NotificationType.RECEIVE && trans == TransactionType.RECEIVE) {
		return true;
	}
	if (noti == NotificationType.MOBILE_PAY && trans == TransactionType.MOBILE_PAY) {
		return true;
	}
	return false;
}