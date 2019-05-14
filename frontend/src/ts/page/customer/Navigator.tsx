import React = require("react");
import { Link } from "react-router-dom";

export default class Navigator extends React.Component<{location: string}, {}> {
	render() {
		let location = this.props.location.replace(/\/$/, "");
		return <div class="navigator">
            <div class="profiles">
			    <p class="image"><img src="https://salt.tikicdn.com/desktop/img/avatar.png?v=3" height="45" width="45" alt=""/></p>
			    <p class="name">Your account</p>
			    <h6>Tùng Thanh</h6>
			</div> 	
			<div class="menu dropdown">
			    <ul role="menu">
			        <li class={(location.endsWith("account") || location.endsWith("customer")) ? "active" : ""}>
			            <Link to="/customer/account"><i class="fa fa-user"></i> <span>Account Info</span></Link>
			        </li>
			        <li class={location.endsWith("services") ? "active" : ""}>
			            <Link to="/customer/services"> <i class="fa fa-tools"></i> <span>Services</span> </Link>
			        </li>
			        <li class={location.endsWith("notification") ? "active" : ""}>
			            <Link to="/customer/notification"><i class="fa fa-bell"></i> <span>Notification</span> <span class="num-noti-nav">2</span></Link>
			        </li>
			        <li class={location.endsWith("history") ? "active" : ""}>
			            <Link to="/customer/history"> <i class="fa fa-credit-card"></i> <span>Transaction history</span></Link>
			        </li>
			    </ul>
			</div>
        </div>
	}
}