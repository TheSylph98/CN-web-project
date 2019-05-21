import { servicesConstants } from '../constants';

export function services(state = {transfer: {}, mobile: {}, deposit: {}}, action) {
	switch (action.type) {
		case servicesConstants.TRANSFER_REQUEST: 
			return {
				...state,
				transfer: {
					transfering: true,
				}
			};
		case servicesConstants.TRANSFER_SUCCESS:
			return {
				...state,
				transfer: {
					transfered: true,
				}
			};
		case servicesConstants.TRANSFER_FAILURE:
			return {
				...state,
				transfer: {
					error: action.error,
				}
			};
		case servicesConstants.MOBILE_REQUEST: 
			return {
				...state,
				mobile: {
					paying: true,
				}
			};
		case servicesConstants.MOBILE_SUCCESS:
			return {
				...state,
				mobile: {
					payed: true,
					code: action.code,
				}
			};
		case servicesConstants.MOBILE_FAILURE:
			return {
				...state,
				mobile: {
					error: action.error,
				}
			};
		case servicesConstants.DEPOSIT_REQUEST: 
			return {
				...state,
				deposit: {
					depositing: true,
				}
			};
		case servicesConstants.DEPOSIT_SUCCESS:
			return {
				...state,
				deposit: {
					deposited: true,
				}
			};
		case servicesConstants.TRANSFER_FAILURE:
			return {
				...state,
				deposit: {
					error: action.error,
				}
			};
		default:
			return state
	}
}
