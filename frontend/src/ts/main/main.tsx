import ReactDOM = require("react-dom");
import React = require("react");
import HomePage from "../page/home/homepage";
import Register from "../page/login/RegisterPage";
import Login from "../page/login/LoginPage";
import CustomerPage from "../page/customer/CustomerPage";
import { HashRouter as Router, Route } from "react-router-dom";
import {Provider} from "react-redux";
import { store } from '../store/helper';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Route path="/" exact component={HomePage} />
		    <Route path="/register/" component={Register} />
		    <Route path="/login/" component={Login} />
		    <Route path="/customer" component={CustomerPage}/>
	    </Router>
    </Provider>
    , document.getElementById("app"));