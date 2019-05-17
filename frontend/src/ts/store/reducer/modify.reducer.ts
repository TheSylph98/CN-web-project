import { userConstants } from '../constants';

export function modify(state = {}, action) {
  switch (action.type) {
    case userConstants.MODIFY_REQUEST:
      return {
        modifying: true,
      };
    case userConstants.MODIFY_SUCCESS:
      return {
        modified: true,
      };
    case userConstants.MODIFY_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state
  }
}