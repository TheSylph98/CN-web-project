import React = require("react");
import Menu from "./Menu";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../../store/action";

class TopPanel extends React.Component<{login, dispatch, numUnread},{}> {

    onSignOut() {
        this.props.dispatch(userActions.logout());
    }

	render() {
		return <header class="header top-panel">
			<div class="container">
				<div class="main-logo col-xs-12 col-md-3 col-md-2 col-lg-2 hidden-xs">
                    <Link to="/">
                        <div id="logo" class="img-responsive">
                            <span>&euro;</span>
                            Wallet
                        </div>
                    </Link>
                </div>
                <div class="col-md-6 col-lg-6 text-center">
                    <ul class="guess bitcoin-stats text-center">
                        <li>
                            <h6>13</h6><span>Banks</span></li>
                        <li>
                            <h6>5</h6><span>Mobile telecoms</span></li>
                        <li>
                            <h6>5</h6><span>Bill types</span></li>
                        <li>
                            <h6>100.000</h6><span>Active accounts</span></li>
                        <li>
                            <h6>FREE</h6><span>Transfer fee</span></li>
                    </ul>
                </div>
                { !this.props.login.loggedIn ? 
                    <div class="col-md-4 col-lg-4">
                        <ul class="guess user">
                            <li class="sign-in">
                                <Link to="/login" className="btn btn-primary">
                                	<i class="fa fa-user"></i> &nbsp;SIGN IN
                                </Link>
                            </li>
                            <li class="sign-up">
                                <Link to="/register" class="btn btn-primary">
                            	   <i class="fa fa-user-plus"/> REGISTER 
                                </Link>
                            </li>
                        </ul>
                    </div> :
                    <div class="col-md-4 col-lg-4"> 
                        <ul class="logged-in user">
                            <li class="account">
                                <Link to="/customer">
                                    <div class="avatar">
                                        <i class="fa fa-user"></i>
                                        {this.props.numUnread > 0 && 
                                            <div className="notification">{this.props.numUnread}</div>}
                                    </div>
                                    <span>{this.props.login.user.username}</span>
                                </Link>
                            </li>
                            <li class="sign-out">
                                <Link to="/" class="btn btn-primary" onClick={this.onSignOut.bind(this)}>
                                    <i class="fa fa-sign-out-alt"></i>
                                    &nbsp;SIGN OUT
                                </Link>
                            </li>
                        </ul>
                    </div>
                }
			</div>
			<Menu/>
		</header>

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

export default connect(mapStateToProps)(TopPanel);