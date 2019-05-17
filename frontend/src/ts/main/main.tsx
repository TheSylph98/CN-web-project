import ReactDOM = require("react-dom");
import React = require("react");
import {Provider} from "react-redux";
import { store } from '../store/helper';
import { HashRouter as Router, Route } from "react-router-dom";
import App from "./app";

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Route path="/" component={App}/>
	    </Router>
    </Provider>
    , document.getElementById("app"));