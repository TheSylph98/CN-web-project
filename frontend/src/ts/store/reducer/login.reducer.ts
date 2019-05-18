import { userConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function login(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggedIn: false,
        error: action.error,
      };
    case userConstants.LOGOUT_SUCCESS:
      return {};
    case userConstants.LOGOUT_FAILURE:
      return {
        ...state,
        error: action.error,
      }
    case userConstants.MODIFY_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    default:
      return state
  }
}