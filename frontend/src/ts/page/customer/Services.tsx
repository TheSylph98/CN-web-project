import React = require("react");
import ServiceTab from "./ServiceTab";
import Transfer from "./Transfer";
import Deposit from "./Deposit";
import MobilePay from "./MobilePay";
import { Route } from "react-router-dom";

export default class Services extends React.Component<{location, dispatch}, {}> {
	render() {
		return <div class="content-right">
            <h1 class="title">Services</h1>
            <ServiceTab location={this.props.location.pathname}/>
            <Route exact path="/customer/(services|services/transfer)" component={Transfer}/>
            <Route exact path="/customer/services/deposit" component={Deposit}/>
            <Route exact path="/customer/services/mobile" component={MobilePay}/>
        </div>
	}
}

