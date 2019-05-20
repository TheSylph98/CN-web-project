import { servicesConstants } from '../constants';

export function services(state = {}, action) {
  switch (action.type) {
    case servicesConstants.TRANSFER_REQUEST: 
      return {
        transfering: true,
      };
    case servicesConstants.TRANSFER_SUCCESS:
      return {
        transfered: true,
      };
    case servicesConstants.TRANSFER_FAILURE:
      return {
        transferError: action.error,
      };
    default:
      return state
  }
}
