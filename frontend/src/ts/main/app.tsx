import HomePage from "../page/home/homepage";
import Register from "../page/login/RegisterPage";
import Login from "../page/login/LoginPage";
import CustomerPage from "../page/customer/CustomerPage";
import { Route, withRouter } from "react-router-dom";
import React = require("react");
import { connect } from "react-redux";
import { notificationActions} from "../store/action";

export class App extends React.Component<{dispatch, history, location}, {}> {
	componentWillMount() {
		window["routerHistory"] = this.props.history;
		setInterval(() => this.props.dispatch(notificationActions.load()), 1000);
	}

	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0)
		}
	}

	render() {
		return <div>
			<Route exact path="/" component={HomePage} />
		    <Route path="/register/" component={Register} />
		    <Route path="/login/" component={Login} />
		    <Route path="/customer" component={CustomerPage}/>
		</div>
	}
}

export default connect()(withRouter(App));