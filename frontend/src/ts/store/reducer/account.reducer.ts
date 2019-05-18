import { accountConstants } from '../constants';

export function account(state = {notLoad: true, accounts: []}, action) {
  switch (action.type) {
    case accountConstants.CONNECT_REQUEST: 
      return {
        ...state,
        accounts: state.accounts,
        connecting: true,
      };
    case accountConstants.CONNECT_SUCCESS:
      return {
        ...state,
        connected: true,
        accounts: state.accounts,
      };
    case accountConstants.CONNECT_FAILURE:
      return {
        ...state,
        error: action.error,
        accounts: state.accounts,
      };
    case accountConstants.ACCOUNT_REQUEST: 
      return {
        ...state,
        notLoad: false,
        accounts: state.accounts,
        loading: true,
      };
    case accountConstants.ACCOUNT_SUCCESS:
      return {
        ...state,
        notLoad: false,
        loaded: true,
        accounts: action.accounts,
      };
    case accountConstants.ACCOUNT_FAILURE:
      return {
        ...state,
        notLoad: true,
        error: action.error,
        accounts: state.accounts,
      };
    default:
      return state
  }
}
