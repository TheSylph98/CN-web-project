import React = require("react");
import TopPanel from "../common/TopPanel";
import Directory from "../common/Directory";
import Navigator from "./Navigator";
import AccountInfo from "./AccountInfo";
import BankAccount from "./BankAccount";
import Services from "./Services";
import {Route, withRouter} from "react-router-dom";
import { connect } from "react-redux";

class CustomerPage extends React.Component<{history, loggedIn: boolean, location: {pathname: string}},{}> {

	render() {
		if (!this.props.loggedIn) {
			this.props.history.push("/login");
			alert("You have to login first!");
			return <div/>
		}	
		return <div>
			<TopPanel/>
			<Directory location={this.props.location.pathname}/>
			<div class="customer-content" style={{paddingLeft: "40px", background: "#111"}}>
				<Navigator location={this.props.location.pathname}/>
				<Route exact path="/(customer/account|customer)/" component={AccountInfo}/>
				<Route path="/customer/bank" component={BankAccount}/>
				<Route path="/customer/services" component={Services}/>
			</div>
		</div>
	}
}

function mapStateToProps(state) {
	const { loggedIn } = state.login;
	return {
		loggedIn
	}
}

export default connect(mapStateToProps)(withRouter(CustomerPage));