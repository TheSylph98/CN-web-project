import React = require("react");
import { Link } from "react-router-dom";

export default class RegisterPage extends React.Component<{},{}> {
	render() {
		return <div class="register col-xs-12">
			<div class="form-container">
				<div>
					<div class="row text-center title">
						<h2 class="title-head hidden-xs">get <span>started</span></h2>
						 <p class="info-form">Open account for free and start trading online now!</p>
					</div>
					<form>
						<div class="form-group">
							<input class="form-control" name="name" id="name" placeholder="NAME" type="text" />
						</div>
						<div class="form-group">
							<input class="form-control" name="email" id="email" placeholder="EMAIL" type="email" />
						</div>
						<div class="form-group">
							<input class="form-control" name="password" id="password" placeholder="PASSWORD" type="password" aria-autocomplete="list"/>
						</div>
						<div class="form-group">
							<Link to="/"><button class="btn btn-primary">create account</button></Link>
							<p class="text-center">already have an account ? <Link to="/login">Login</Link>
						</p></div>
					</form>
				</div>
			</div>
		</div>
	}
}