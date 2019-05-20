"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const action_1 = require("../../store/action");
class RegisterPage extends React.Component {
    onSubmit(e) {
        e.preventDefault();
        this.props.dispatch(action_1.userActions.register({
            email: this.email.value,
            password: this.password.value,
            username: this.username.value,
            verifyPassword: this.verifyPassword.value,
            phone: ""
        }));
    }
    render() {
        return React.createElement("div", { class: "register col-xs-12" },
            React.createElement("div", { class: "form-container" },
                React.createElement("div", null,
                    React.createElement("div", { class: "row text-center title" },
                        React.createElement("h2", { class: "title-head hidden-xs" },
                            "get ",
                            React.createElement("span", null, "started")),
                        React.createElement("p", { class: "info-form" }, "Open account for free and start trading online now!")),
                    React.createElement("form", null,
                        React.createElement("div", { class: "form-group" },
                            React.createElement("input", { ref: input => this.username = input, class: "form-control", name: "name", id: "name", placeholder: "NAME", type: "text" })),
                        React.createElement("div", { class: "form-group" },
                            React.createElement("input", { ref: input => this.email = input, class: "form-control", name: "email", id: "email", placeholder: "EMAIL", type: "email" })),
                        React.createElement("div", { class: "form-group" },
                            React.createElement("input", { ref: input => this.password = input, class: "form-control", name: "password", id: "password", placeholder: "PASSWORD", type: "password", "aria-autocomplete": "list" })),
                        React.createElement("div", { class: "form-group" },
                            React.createElement("input", { ref: input => this.verifyPassword = input, class: "form-control", name: "verify-password", id: "verify-password", placeholder: "VERIFY PASSWORD", type: "password", "aria-autocomplete": "list" })),
                        React.createElement("div", { class: "form-message" }, this.props.error && this.props.error),
                        React.createElement("div", { class: "form-group" },
                            React.createElement("button", { onClick: this.onSubmit.bind(this), class: "btn btn-primary" }, "create account"),
                            React.createElement("p", { class: "text-center" },
                                "already have an account ? ",
                                React.createElement(react_router_dom_1.Link, { to: "/login" }, "Login")))))));
    }
}
function mapStateToProps(state) {
    const { registering, error } = state.register;
    return {
        registering,
        error,
    };
}
exports.default = react_redux_1.connect(mapStateToProps)(RegisterPage);
