export function toMoneyFormat(money: number) {
	let temp = money.toString().split("").reverse().join("");
	let result = "";
	for (let i = 0; i < temp.length; ++i) {
		if (i != 0 && i % 3 == 0) {
			result = "." + result;
		}
		result = temp[i] + result;
	}
	return result
} 

export function toAccountNumberFormat(accountNumber: number) {
	let result = accountNumber.toString();
	return "*******" + result.slice(result.length - 3);
}