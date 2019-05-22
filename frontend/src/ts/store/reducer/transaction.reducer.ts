import { transactionConstants, userConstants } from '../constants';

export function transaction(state = {notLoad: true, transactions: []}, action) {
  switch (action.type) {
    case userConstants.LOGOUT_SUCCESS: 
        return {
            notLoad: true,
            transactions: [],
        }
    case transactionConstants.TRANSACTION_REQUEST: 
      return {
        notLoad: false,
        loading: true,
        transactions: state.transactions,
      };
    case transactionConstants.TRANSACTION_SUCCESS:
      return {
        notLoad: false,
        loaded: true,
        transactions: action.transactions.sort((trans1, trans2) => {
          if (trans1.time > trans2.time) {
            return -1;
          }
          if (trans1.time == trans2.time) {
            return 0;
          }
          return 1;
        }),
      };
    case transactionConstants.TRANSACTION_FAILURE:
      return {
        notLoad: true,
        error: action.error,
        transactions: state.transactions,
      };
    default:
      return state
  }
}
