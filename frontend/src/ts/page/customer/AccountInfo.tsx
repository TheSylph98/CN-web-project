import React = require("react");
import { connect } from "react-redux";
import { userActions } from "../../store/action";
import utils = require("../../utils");

class AccountInfo extends React.Component<{dispatch, login, modify}, {openChangePassword: boolean}> {

    username;
    address;
    phone;

	constructor(props) {
		super(props);
		this.state = {
			openChangePassword: false,
		}
	}

	changePassword() {
		this.setState({
			openChangePassword: !this.state.openChangePassword,
		})
	}

    onModify(e) {
        e.preventDefault();
        this.props.dispatch(userActions.modify({
            username: this.username.value,
            address: this.address.value,
            phone: this.phone.value,
        }))

    }

	render() {
        let user = this.props.login.user;
		return <div>
            <h1 class="title">Account Info</h1>
            <div class="wrapper">
                <form class="content" id="edit-account">
                    <div class="form-group">
                        <label class="control-label" htmlFor="amount">Amount </label>
                        <div class="input-wrap amount">
                            {utils.toMoneyFormat(user.amount) + "đ"} 
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" htmlFor="full_name">Full name </label>
                        <div class="input-wrap">
                            <input ref={input => this.username = input } type="text" name="full_name" class="form-control" id="full_name" 
                                defaultValue={user.username} placeholder="Full name"/>
                        </div>
                    </div>
                    <div class="form-group ">
                        <label class="control-label" htmlFor="phone_number">Phone number</label>
                        <div class="input-wrap update-phone">
                            <input ref={input => this.phone = input } type="text" placeholder="Enter your phone number for better experience" 
                                defaultValue={user.phone} class="form-control" name="phone_number" id="phone_number"/>
                        </div>
                    </div>

                    <div class="form-group ">
                        <label class="control-label" htmlFor="address">Address</label>
                        <div class="input-wrap">
                            <input ref={input => this.address = input } type="text" placeholder="Address" 
                                defaultValue={user.address} class="form-control" name="address" id="address"/>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label class="control-label" htmlFor="email">Email</label>
                        <div class="input-wrap">
                            <input type="email" disabled={true} defaultValue={user.email} class="form-control" name="email" id="form_email" placeholder="Email"/>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <div class="input-wrap margin">
                            <label class="checkbox">
	                            <input type="checkbox" onChange={this.changePassword.bind(this)} id="is_change_pass" name="is_change_pass" value="checked"/>
								<span>Change password</span>
                            </label>
                        </div>
                    </div>
                    <div class="password-group" style={{display: this.state.openChangePassword ? "block": "none"}}>
                        <div class="form-group">
                            <label class="control-label" htmlFor="old_password">Old password</label>
                            <div class="input-wrap">
                                <input type="password" name="old_password" class="form-control" id="old_password" autoComplete="off" placeholder="Enter old password"/>
                                <span class="help-block"></span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label" htmlFor="new-password">New password</label>
                            <div class="input-wrap">
                                <input type="password" name="new_password" class="form-control" id="new_password" autoComplete="off" placeholder="Length from 6 to 32 characters"/>
                                <span class="help-block"></span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label" htmlFor="re_new_password">Verify password</label>
                            <div class="input-wrap">
                                <input type="password" name="re_new_password" class="form-control" id="re_new_password" autoComplete="off" placeholder="Enter new password again"/>
                                <span class="help-block"></span>
                            </div>
                        </div>

                    </div>
                    <div class="form-group">
                        <div class="form-message">
                            {this.props.modify.modified ? 
                                "All changes have been updated!" :
                                    this.props.modify.error ?
                                        this.props.modify.error : ""
                            }
                        </div>
                        <div class="input-wrap margin">
                            <button onClick={this.onModify.bind(this)} type="submit" class="btn btn-info btn-block btn-update">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
	}
}

function mapStateToProps(state) {
    const { login, modify } = state;
    return {
        login,
        modify,
    }
}

export default connect(mapStateToProps)(AccountInfo);