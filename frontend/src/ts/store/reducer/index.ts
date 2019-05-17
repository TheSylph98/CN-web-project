import { combineReducers } from 'redux';
import { login } from './login.reducer';
import { register } from './register.reducer';
import { alert } from './alert.reducer';
import {router } from "./router.reducer";

const rootReducer = combineReducers({
  login,
  register,
  alert,
  router,
});

export default rootReducer;
