import HomePage from "../page/home/homepage";
import Register from "../page/login/RegisterPage";
import Login from "../page/login/LoginPage";
import CustomerPage from "../page/customer/CustomerPage";
import { Route, withRouter } from "react-router-dom";
import React = require("react");

export class App extends React.Component<{history}, {}> {
	componentWillMount() {
		window["routerHistory"] = this.props.history;
	}

	render() {
		return <div>
			<Route path="/" exact component={HomePage} />
		    <Route path="/register/" component={Register} />
		    <Route path="/login/" component={Login} />
		    <Route path="/customer" component={CustomerPage}/>
		</div>
	}
}

export default withRouter(App);