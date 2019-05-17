import { accountConstants } from '../constants';

export function account(state = {accounts: []}, action) {
  switch (action.type) {
    case accountConstants.CONNECT_REQUEST: 
      return {
        accounts: state.accounts,
        connecting: true,
      };
    case accountConstants.CONNECT_SUCCESS:
      return {
        connected: true,
        accounts: state.accounts,
      };
    case accountConstants.CONNECT_FAILURE:
      return {
        error: action.error,
        accounts: state.accounts,
      };
    default:
      return state
  }
}
