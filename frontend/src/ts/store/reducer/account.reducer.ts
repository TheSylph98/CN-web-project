import { accountConstants, userConstants } from '../constants';

export function account(state = {list: {notLoad: true, accounts: []}, connect: {}}, action) {
  switch (action.type) {
    case userConstants.LOGOUT_SUCCESS: 
      return {
        list: {notLoad: true, accounts: []}, 
        connect: {}
      }
    case accountConstants.CONNECT_REQUEST: 
      return {
        ...state,
        connect: {
          connecting: true,
        }
      };
    case accountConstants.CONNECT_SUCCESS:
      return {
        ...state,
        connect: {
          connected: true,
        }
      };
    case accountConstants.CONNECT_FAILURE:
      return {
        ...state,
        connect: {
          error: action.error,
        }
      };
    case accountConstants.ACCOUNT_REQUEST: 
      return {
        ...state,
        list: {
          notLoad: false,
          accounts: state.list.accounts,
        }
      };
    case accountConstants.ACCOUNT_SUCCESS:
      return {
        ...state,
        list: {
          notLoad: false,
          loaded: true,
          accounts: action.accounts,  
        }
      };
    case accountConstants.ACCOUNT_FAILURE:
      return {
        ...state,
        list: {
          notLoad: true,
          error: action.error,
        }
      };
    default:
      return state
  }
}
