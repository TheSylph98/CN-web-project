import { notificationConstants } from '../constants';

export function notification(state = {notLoad: true, notifications: []}, action) {
  switch (action.type) {
    case notificationConstants.NOTIFICATION_REQUEST: 
      return {
        notLoad: false,
        loading: true,
        notifications: [],
      };
    case notificationConstants.NOTIFICATION_SUCCESS:
      return {
        notLoad: false,
        loaded: true,
        notifications: action.notifications,
      };
    case notificationConstants.NOTIFICATION_FAILURE:
      return {
        notLoad: true,
        error: action.error,
        notifications: []
      };
    default:
      return state
  }
}
