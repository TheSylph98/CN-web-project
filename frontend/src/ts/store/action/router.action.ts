import { routerConstants} from "../constants";

export const routerActions = {
	init,
	push
}

function init(history) {
	return {
		type: routerConstants.INIT,
		history
	}
}

function push(url) {
	return {
		type: routerConstants.PUSH,
		url
	}
}