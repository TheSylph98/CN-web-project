import { notificationConstants, userConstants } from '../constants';

export function notification(state = {notLoad: true, notifications: []}, action) {
  switch (action.type) {
    case userConstants.LOGOUT_SUCCESS: 
      return {
        notLoad: true,
        notifications: [],
      }
    case notificationConstants.NOTIFICATION_REQUEST: 
      return {
        notLoad: false,
        loading: true,
        notifications: state.notifications,
      };
    case notificationConstants.NOTIFICATION_SUCCESS:
      return {
        notLoad: false,
        loaded: true,
        notifications: action.notifications.sort((noti1, noti2) => {
          if (noti1.time > noti2.time) {
            return -1;
          }
          if (noti1.time == noti2.time) {
            return 0;
          }
          return 1;
        }),
      };
    case notificationConstants.NOTIFICATION_FAILURE:
      return {
        notLoad: true,
        error: action.error,
        notifications: state.notifications,
      };
    default:
      return state
  }
}
