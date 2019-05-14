import React = require("react");
import Menu from "./Menu";
import {Link} from "react-router-dom";

export default class TopPanel extends React.Component<{},{}> {
	render() {
		return <header class="header top-panel">
			<div class="container">
				<div class="main-logo col-xs-12 col-md-3 col-md-2 col-lg-2 hidden-xs">
                    <Link to="/">
					  <img id="logo" class="img-responsive" 
                        src="resources/images/logo-dark.png" alt="logo"/>
                    </Link>
                </div>
                <div class="col-md-6 col-lg-6">
                    <ul class="unstyled bitcoin-stats text-center">
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
                </div>
                <div class="col-md-4 col-lg-4">
                    <div class="unstyled user">
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
                </div>
			</div>
			<Menu/>
		</header>

	}
}