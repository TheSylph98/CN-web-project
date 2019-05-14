import React = require("react");
import {Link} from "react-router-dom";
import {loginAuth} from "../../backend-api/api";

export default class LoginPage extends React.Component<{},{message: string}> {

	name;
	password;

	constructor(props) {
		super(props);
		this.state = {
			message: ""
		}
	}

	showMessage(message: string) {
		this.setState({
			message: message
		});
	}

	onSubmit(e) {
		e.preventDefault();
		let token = document.getElementById("csrf-token").getAttribute("content");
		loginAuth(this.name.value, this.password.value, token)
			.then(data => {
				if (data.dangnhap == "kothanhcong") {
					this.showMessage(data.error.password);
				}
			});
	}

	render() {
		return <div class="register col-xs-12">
			<div class="form-container">
				<div>
					<div class="row text-center title">
						<h2 class="title-head hidden-xs">member <span>login</span></h2>
						 <p class="info-form">SEND, RECEIVE AND SECURELY STORE YOUR money IN YOUR WALLET!</p>
					</div>
					<form>
						<div class="form-group">
							<input class="form-control" ref={input => this.name = input} name="email" id="email" placeholder="EMAIL" type="email" />
						</div>
						<div class="form-group">
							<input class="form-control" ref={input => this.password = input} name="password" id="password" placeholder="PASSWORD" type="password" aria-autocomplete="list"/>
						</div>
						<div class="form-message">
							{this.state.message}
						</div>
						<div class="form-group">
							<Link to="/"><button class="btn btn-primary" onClick={this.onSubmit.bind(this)}>login</button></Link>
							<p class="text-center">don't have an account ? <Link to="/register">register now</Link>
						</p></div>
					</form>
				</div>
			</div>
		</div>
	}
}