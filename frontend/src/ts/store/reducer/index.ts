import { combineReducers } from 'redux';
import { login } from './login.reducer';
import { register } from './register.reducer';
import { alert } from './alert.reducer';
import { modify } from "./modify.reducer";
import { bank } from "./bank.reducer";
import { account } from "./account.reducer";

const rootReducer = combineReducers({
  login,
  register,
  alert,
  bank,
  modify,
  account,
});

export default rootReducer;
