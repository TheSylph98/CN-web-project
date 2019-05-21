import { mobileConstants } from '../constants';

export function mobile(state = {notLoad: true, telecoms: []}, action) {
  switch (action.type) {
    case mobileConstants.MOBILE_REQUEST: 
      return {
        notLoad: false,
        loading: true,
        telecoms: [],
      };
    case mobileConstants.MOBILE_SUCCESS:
      return {
        notLoad: false,
        loaded: true,
        telecoms: action.telecoms,
      };
    case mobileConstants.MOBILE_FAILURE:
      return {
        notLoad: true,
        error: action.error,
        telecoms: []
      };
    default:
      return state
  }
}
