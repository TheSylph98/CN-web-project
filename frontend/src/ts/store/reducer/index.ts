import { combineReducers } from 'redux';
import { login } from './login.reducer';
import { register } from './register.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  login,
  register,
  alert
});

export default rootReducer;
