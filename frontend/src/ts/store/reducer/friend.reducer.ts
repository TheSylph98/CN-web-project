import { friendConstants } from '../constants';

export function friend(state = {friends: [], notLoad: true}, action) {
  switch (action.type) {
    case friendConstants.FRIEND_REQUEST: 
      return {
        notLoad: false,
        loading: true,
        friends: [],
      };
    case friendConstants.FRIEND_SUCCESS:
      return {
        notLoad: false,
        loaded: true,
        friends: action.friends,
      };
    case friendConstants.FRIEND_FAILURE:
      return {
        notLoad: true,
        error: action.error,
        friends: []
      };
    default:
      return state
  }
}
