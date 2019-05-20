import { friendConstants } from '../constants';

export function friend(state = {friends: [], notLoad: true}, action) {
  switch (action.type) {
    case friendConstants.FRIEND_REQUEST: 
      return {
        ...state,
        notLoad: false,
        loading: true,
        friends: [],
      };
    case friendConstants.FRIEND_SUCCESS:
      return {
        ...state,
        notLoad: false,
        loaded: true,
        friends: action.friends,
      };
    case friendConstants.FRIEND_FAILURE:
      return {
        ...state,
        notLoad: true,
        error: action.error,
        friends: []
      };
    case friendConstants.ADD_FRIEND_REQUEST: 
      return {
        ...state,
        adding: true,
      };
    case friendConstants.ADD_FRIEND_SUCCESS:
      return {
        ...state,
        adding: false,
        added: true,
      };
    case friendConstants.ADD_FRIEND_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state
  }
}
