import { bankConstants } from '../constants';

export function bank(state = {banks: []}, action) {
  switch (action.type) {
    case bankConstants.BANK_REQUEST: 
      return {
        loading: true,
        banks: [],
      };
    case bankConstants.BANK_SUCCESS:
      return {
        loaded: true,
        banks: action.banks,
      };
    case bankConstants.BANK_FAILURE:
      return {
        error: action.error,
        banks: []
      };
    default:
      return state
  }
}
