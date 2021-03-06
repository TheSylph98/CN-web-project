"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const action_1 = require("../../store/action");
const utils = require("../../utils");
class AccountInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openChangePassword: false,
        };
    }
    changePassword() {
        this.setState({
            openChangePassword: !this.state.openChangePassword,
        });
    }
    onModify(e) {
        e.preventDefault();
        this.props.dispatch(action_1.userActions.modify({
            username: this.username.value,
            address: this.address.value,
            phone: this.phone.value,
        }));
    }
    render() {
        let user = this.props.login.user;
        return React.createElement("div", { class: "content-right" },
            React.createElement("h1", { class: "title" }, "Account Info"),
            React.createElement("div", { class: "wrapper" },
                React.createElement("form", { class: "content", id: "edit-account" },
                    React.createElement("div", { class: "form-group" },
                        React.createElement("label", { class: "control-label", htmlFor: "amount" }, "Amount "),
                        React.createElement("div", { class: "input-wrap amount" }, utils.toMoneyFormat(user.amount) + "đ")),
                    React.createElement("div", { class: "form-group" },
                        React.createElement("label", { class: "control-label", htmlFor: "full_name" }, "Full name "),
                        React.createElement("div", { class: "input-wrap" },
                            React.createElement("input", { ref: input => this.username = input, type: "text", name: "full_name", class: "form-control", id: "full_name", defaultValue: user.username, placeholder: "Full name" }))),
                    React.createElement("div", { class: "form-group " },
                        React.createElement("label", { class: "control-label", htmlFor: "phone_number" }, "Phone number"),
                        React.createElement("div", { class: "input-wrap update-phone" },
                            React.createElement("input", { ref: input => this.phone = input, type: "text", placeholder: "Enter your phone number for better experience", defaultValue: user.phone, class: "form-control", name: "phone_number", id: "phone_number" }))),
                    React.createElement("div", { class: "form-group " },
                        React.createElement("label", { class: "control-label", htmlFor: "address" }, "Address"),
                        React.createElement("div", { class: "input-wrap" },
                            React.createElement("input", { ref: input => this.address = input, type: "text", placeholder: "Address", defaultValue: user.address, class: "form-control", name: "address", id: "address" }))),
                    React.createElement("div", { class: "form-group" },
                        React.createElement("label", { class: "control-label", htmlFor: "email" }, "Email"),
                        React.createElement("div", { class: "input-wrap" },
                            React.createElement("input", { type: "email", disabled: true, defaultValue: user.email, class: "form-control", name: "email", id: "form_email", placeholder: "Email" }))),
                    React.createElement("div", { class: "form-group" },
                        React.createElement("div", { class: "input-wrap margin" },
                            React.createElement("label", { class: "checkbox" },
                                React.createElement("input", { type: "checkbox", onChange: this.changePassword.bind(this), id: "is_change_pass", name: "is_change_pass", value: "checked" }),
                                React.createElement("span", null, "Change password")))),
                    React.createElement("div", { class: "password-group", style: { display: this.state.openChangePassword ? "block" : "none" } },
                        React.createElement("div", { class: "form-group" },
                            React.createElement("label", { class: "control-label", htmlFor: "old_password" }, "Old password"),
                            React.createElement("div", { class: "input-wrap" },
                                React.createElement("input", { type: "password", name: "old_password", class: "form-control", id: "old_password", autoComplete: "off", placeholder: "Enter old password" }),
                                React.createElement("span", { class: "help-block" }))),
                        React.createElement("div", { class: "form-group" },
                            React.createElement("label", { class: "control-label", htmlFor: "new-password" }, "New password"),
                            React.createElement("div", { class: "input-wrap" },
                                React.createElement("input", { type: "password", name: "new_password", class: "form-control", id: "new_password", autoComplete: "off", placeholder: "Length from 6 to 32 characters" }),
                                React.createElement("span", { class: "help-block" }))),
                        React.createElement("div", { class: "form-group" },
                            React.createElement("label", { class: "control-label", htmlFor: "re_new_password" }, "Verify password"),
                            React.createElement("div", { class: "input-wrap" },
                                React.createElement("input", { type: "password", name: "re_new_password", class: "form-control", id: "re_new_password", autoComplete: "off", placeholder: "Enter new password again" }),
                                React.createElement("span", { class: "help-block" })))),
                    React.createElement("div", { class: "form-group" },
                        React.createElement("div", { class: "form-message" }, this.props.modify.modified ?
                            "All changes have been updated!" :
                            this.props.modify.error ?
                                this.props.modify.error : ""),
                        React.createElement("div", { class: "input-wrap margin" },
                            React.createElement("button", { onClick: this.onModify.bind(this), type: "submit", class: "btn btn-info btn-block btn-update" }, "Update"))))));
    }
}
function mapStateToProps(state) {
    const { login, modify } = state;
    return {
        login,
        modify,
    };
}
exports.default = react_redux_1.connect(mapStateToProps)(AccountInfo);
