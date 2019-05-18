import React = require("react");
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../../store/action";

export class LoginPage extends React.Component<{dispatch, error: string, history },{message: string}> {

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
		this.props.dispatch(userActions.login(this.name.value, this.password.value));
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
							{this.props.error && this.props.error}
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

function mapStateToProps(state) {
	const { error} = state.login;
	return {
		error
	}
}

export default connect(mapStateToProps)(LoginPage);
