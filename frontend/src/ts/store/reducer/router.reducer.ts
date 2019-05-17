import { routerConstants } from '../constants';

export function router(state = {}, action) {
  switch (action.type) {
    case routerConstants.INIT: 
      return {
        history: action.history
      };
    case routerConstants.PUSH:
      if (state["history"]) {
        state["history"].push(action.url);
      }
      return state;
    default:
      return state
  }
}
