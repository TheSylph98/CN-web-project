import React = require("react");

export default class AccountInfo extends React.Component<{}, {openChangePassword: boolean}> {
	state;
	setState;
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

	render() {
		return <div class="content-right">
            <h1 class="title">Account Info</h1>
            <div class="account-profile register-form">
                <form class="content" id="edit-account">
                    <div class="form-group">
                    <label class="control-label" htmlFor="full_name">Full name </label>
                    <div class="input-wrap">
                        <input type="text" name="full_name" class="form-control" id="full_name" defaultValue="Tùng Thanh" placeholder="Full name"/>
                    </div>
                    </div>
                    <div class="form-group ">
                        <label class="control-label" htmlFor="phone_number">Phone number</label>
                        <div class="input-wrap update-phone">
                            <input type="text" placeholder="Enter your phone number for better experience" defaultValue="" class="form-control" name="phone_number" id="phone_number"/>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label class="control-label" htmlFor="email">Email</label>
                        <div class="input-wrap">
                            <input type="email" disabled={true} defaultValue="thanhtung29497@gmail.com" class="form-control" name="email" id="form_email" placeholder="Email"/>
                        </div>
                    </div>
                    
                    <div class="form-group gender-select-wrap" id="register_name">
                        <label class="control-label" htmlFor="pasword">Gender</label>
                        <div class="input-wrap">
                            <div class="row">
                                <div class="col-xs-4">
                                	<label>
                                        <input type="radio" name="gender" defaultValue="on" id="gender_male" class="gender"/>
                                        <span>
                                            Male
                                        </span>
                                    </label>
                                </div>
                                <div class="col-xs-4">
                                    <label>
                                        <input type="radio" name="gender" defaultValue="off" id="gender_female" class="gender"/>
                                        <span>
                                            Female
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group ">
                        <label class="control-label no-lh" htmlFor="birthdate">
                            Date of birth
                            <span>(Not required)</span>
                        </label>

                        <div class="input-wrap">
                            <div id="birthday-picker" class="birthday-picker">
                            	<fieldset class="birthday-picker">
                            		<select class="birth-day form-control" name="birth[day]">
                            			<option value="0">Day</option>
                            			{Array.from(Array(31).keys()).map(number => <option value={(number+1).toString()}>{number+1}</option>)}
                            		</select>
                            		<select class="birth-month form-control" name="birth[month]">
                            			<option value="0">Month</option>
                            			{Array.from(Array(12).keys()).map(number => <option value={(number+1).toString()}>{number+1}</option>)}
                            		</select>
                            		<select class="birth-year form-control" name="birth[year]">
                            			<option value="0">Year</option>
                            			{Array.from(Array(120).keys()).map(number => <option value={(number+1899).toString()}>{number+1899}</option>)}
                            		</select>
                            	</fieldset></div>
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
                                <input type="password" name="old_password" class="form-control" id="old_password" value="" autoComplete="off" placeholder="Enter old password"/>
                                <span class="help-block"></span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label" htmlFor="new-password">New password</label>
                            <div class="input-wrap">
                                <input type="password" name="new_password" class="form-control" id="new_password" value="" autoComplete="off" placeholder="Length from 6 to 32 characters"/>
                                <span class="help-block"></span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label" htmlFor="re_new_password">Verify password</label>
                            <div class="input-wrap">
                                <input type="password" name="re_new_password" class="form-control" id="re_new_password" value="" autoComplete="off" placeholder="Enter new password again"/>
                                <span class="help-block"></span>
                            </div>
                        </div>

                    </div>
                    <div class="form-group">
                        <div class="input-wrap margin">
                            <input type="hidden" name="customer_birthdate" value=""/>
                            <button type="submit" class="btn btn-info btn-block btn-update">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
	}
}