import { billConstants, userConstants } from '../constants';

export function bill(state = {type: {notLoad: true, types: []}, bill: {}}, action) {
  switch (action.type) {
    case userConstants.LOGOUT_SUCCESS: 
      return {
        ...state,
        bill: {},
      }
    case billConstants.TYPE_REQUEST: 
      return {
        ...state,
        type: {
          loading: true,
          types: [],
        }
      };
    case billConstants.TYPE_SUCCESS:
      return {
        ...state,
        type: {
          loaded: true,
          types: action.types,
        }
      };
    case billConstants.TYPE_FAILURE:
      return {
        ...state,
        type: {
          error: action.error,
          types: []
        }
      };
    case billConstants.BILL_REQUEST: 
      return {
        ...state,
        bill: {
          loading: true,
        }
      };
    case billConstants.BILL_SUCCESS:
      return {
        ...state,
        bill: {
          loaded: true,
          bill: action.bill,
        }
      };
    case billConstants.BILL_FAILURE:
      return {
        ...state,
        bill: {
          error: action.error,
        }
      };
    default:
      return state
  }
}