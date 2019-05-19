import React = require("react");
import { Link } from "react-router-dom";

export default class ServiceTab extends React.Component<{location: string}, {}> {
	render() {
		let location = this.props.location.split("/").filter(path => path != "");
		let tab = location[location.length - 1];

		return <div className="wrapper service-tab">
			<Link to="/customer/services/transfer" className={"tab" + (tab == "transfer" || tab == "services" ? " active" : "")}>
				<i className="fa fa-sign-out-alt"/>
				<span>Transfer</span>
			</Link>
			<Link to="/customer/services/deposit" className={"tab" + (tab == "deposit" ? " active" : "")}>
				<i className="fa fa-sign-in-alt"/>
				<span>Deposit</span>
			</Link>
			<Link to="/customer/services/pay" className={"tab" + (tab == "pay" ? " active" : "")}>
				<i className="fa fa-credit-card"/>
				<span>Pay</span>
			</Link>
		</div>
	}
}

