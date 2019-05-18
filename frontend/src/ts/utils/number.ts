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