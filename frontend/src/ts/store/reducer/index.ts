import { combineReducers } from 'redux';
import { login } from './login.reducer';
import { register } from './register.reducer';
import { modify } from "./modify.reducer";
import { bank } from "./bank.reducer";
import { account } from "./account.reducer";
import { friend } from "./friend.reducer";
import { services } from "./services.reducer";
import { notification } from "./notification.reducer";
import { transaction } from "./transaction.reducer";
import { mobile } from "./mobile.reducer";
import { bill } from "./bill.reducer";

const rootReducer = combineReducers({
  login,
  register,
  bank,
  modify,
  account,
  friend,
  services,
  notification,
  transaction,
  mobile,
  bill,
});

export default rootReducer;
