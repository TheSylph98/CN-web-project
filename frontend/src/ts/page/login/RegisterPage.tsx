import React = require("react");
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userActions } from "../../store/action";

class RegisterPage extends React.Component<{dispatch, error},{}> {

	email;
	password;
	username;
	verifyPassword;

	onSubmit(e) {
		e.preventDefault();
		this.props.dispatch(userActions.register({
			email: this.email.value,
			password: this.password.value,
			username: this.username.value,
			verifyPassword: this.verifyPassword.value,
			phone: ""
		}));
	}

	render() {
		return <div class="register col-xs-12">
			<div class="main-logo visible-xs">
                <Link to="/">
                    <div id="logo" class="img-responsive">
                        <span>&euro;</span>
                        Wallet
                    </div>
                </Link>
            </div>
			<div class="form-container">
				<div>
					<div class="row text-center title">
						<h2 class="title-head hidden-xs">get <span>started</span></h2>
						 <p class="info-form">Open account for free and start trading online now!</p>
					</div>
					<form>
						<div class="form-group">
							<input ref={input => this.username = input} class="form-control" name="name" id="name" placeholder="NAME" type="text" />
						</div>
						<div class="form-group">
							<input ref={input => this.email = input} class="form-control" name="email" id="email" placeholder="EMAIL" type="email" />
						</div>
						<div class="form-group">
							<input ref={input => this.password = input} class="form-control" name="password" id="password" placeholder="PASSWORD" type="password" aria-autocomplete="list"/>
						</div>
						<div class="form-group">
							<input ref={input => this.verifyPassword = input} class="form-control" name="verify-password" id="verify-password" placeholder="VERIFY PASSWORD" type="password" aria-autocomplete="list"/>
						</div>
						<div class="form-message">
							{this.props.error && this.props.error}
						</div>
						<div class="form-group">
							<button onClick={this.onSubmit.bind(this)} class="btn btn-primary">create account</button>
							<p class="text-center">already have an account ? <Link to="/login">Login</Link>
						</p></div>
					</form>
				</div>
			</div>
		</div>
	}
}

function mapStateToProps(state) {
	const { registering, error } = state.register;
	return {
		registering,
		error,
	}
}

export default connect(mapStateToProps)(RegisterPage);