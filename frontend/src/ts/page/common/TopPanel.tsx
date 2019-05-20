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
					  <img id="logo" class="img-responsive" 
                        src="resources/images/logo-dark.png" alt="logo"/>
                    </Link>
                </div>
                {/*<div class="col-md-6 col-lg-6">
                    <ul class="guess bitcoin-stats text-center">
                        <li>
                            <h6>9,450 USD</h6><span>Last trade price</span></li>
                        <li>
                            <h6>+5.26%</h6><span>24 hour price</span></li>
                        <li>
                            <h6>12.820 BTC</h6><span>24 hour volume</span></li>
                        <li>
                            <h6>2,231,775</h6><span>active traders</span></li>
                        <li>
                            <h6>2,231,775</h6><span>active traders</span></li>
                    </ul>
                </div>*/}
                { !this.props.login.loggedIn ? 
                    <div class="col-md-4 col-lg-4">
                        <div class="guess user">
                            <div class="sign-in">
                                <Link to="/login" className="btn btn-primary">
                                	<i class="fa fa-user"></i> SIGN IN
                                </Link>
                            </div>
                            <div class="sign-up">
                                <Link to="/register" class="btn btn-primary">
                            	   <i class="fa fa-user-plus"/> REGISTER 
                                </Link>
                            </div>
                        </div>
                    </div> :
                    <div class="col-md-4 col-lg-4"> 
                        <div class="logged-in user">
                            <div class="account">
                                <Link to="/customer">
                                    <div class="avatar">
                                        <i class="fa fa-user"></i>
                                        {this.props.numUnread > 0 && 
                                            <div className="notification">{this.props.numUnread}</div>}
                                    </div>
                                    <span>{this.props.login.user.username}</span>
                                </Link>
                            </div>
                            <div class="sign-out">
                                <Link to="/" class="btn btn-primary" onClick={this.onSignOut.bind(this)}>
                                    <i class="fa fa-sign-out-alt"></i>
                                    SIGN OUT
                                </Link>
                            </div>
                        </div>
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