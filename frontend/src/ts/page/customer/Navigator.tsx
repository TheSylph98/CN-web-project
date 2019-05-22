import React = require("react");
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navigator extends React.Component<{location: string, numUnread, login}, {}> {
	
	render() {
		let location = this.props.location.replace(/\/$/, "");
		return <div class="navigator col-lg-2 col-md-2">
            <div class="profiles">
			    <p class="image"><img src="https://salt.tikicdn.com/desktop/img/avatar.png?v=3" height="45" width="45" alt=""/></p>
			    <p class="name">Your account</p>
			    <h6>{this.props.login.user.username}</h6>
			</div> 	
			<div class="menu dropdown">
			    <ul role="menu">
			        <li class={(location.endsWith("account") || location.endsWith("customer")) ? "active" : ""}>
			            <Link to="/customer/account"><i class="fa fa-user"></i> <span>Account Info</span></Link>
			        </li>
			        <li class={location.endsWith("bank") ? "active" : ""}>
			            <Link to="/customer/bank"> <i class="fa fa-university"></i> <span>Bank Acount</span> </Link>
			        </li>
			        <li class={location.endsWith("services") ? "active" : ""}>
			            <Link to="/customer/services"> <i class="fa fa-tools"></i> <span>Services</span> </Link>
			        </li>
			        <li class={location.endsWith("notification") ? "active" : ""}>
			            <Link to="/customer/notification"><i class="fa fa-bell"></i> <span>Notification</span> 
			            {this.props.numUnread > 0 && <span class="num-noti-nav">{this.props.numUnread}</span>}</Link>
			        </li>
			        <li class={location.endsWith("transaction") ? "active" : ""}>
			            <Link to="/customer/transaction"> <i class="fa fa-credit-card"></i> <span>Transaction history</span></Link>
			        </li>
			        <li class={location.endsWith("favorite") ? "active" : ""}>
			            <Link to="/customer/favorite"> <i class="fa fa-address-book"></i> <span>Favorite list</span></Link>
			        </li>
			    </ul>
			</div>
        </div>
	}
}

function mapStateToProps(state) {
	const { login } = state;
	const { notifications } = state.notification;
	let numUnread = notifications.filter(noti => !noti.read).length;
	return {
		login,
		numUnread,
	}
}

export default connect(mapStateToProps)(Navigator);