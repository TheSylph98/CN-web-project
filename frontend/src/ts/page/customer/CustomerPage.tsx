import React = require("react");
import TopPanel from "../common/TopPanel";
import Directory from "../common/Directory";
import Navigator from "./Navigator";
import AccountInfo from "./AccountInfo";
import {Route} from "react-router-dom";

export default class CustomerPage extends React.Component<{location: {pathname: string}},{}> {
	render() {
		return <div>
			<TopPanel/>
			<Directory location={this.props.location.pathname}/>
			<div class="customer-content" style={{paddingLeft: "40px", background: "#111"}}>
				<Navigator location={this.props.location.pathname}/>
				<Route path="/(customer/account|customer)/" component={AccountInfo}/>
			</div>
		</div>
	}
}