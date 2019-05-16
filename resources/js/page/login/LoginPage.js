"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const action_1 = require("../../store/action");
const react_router_dom_2 = require("react-router-dom");
class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
    }
    showMessage(message) {
        this.setState({
            message: message
        });
    }
    onSubmit(e) {
        e.preventDefault();
        let token = document.getElementById("csrf-token").getAttribute("content");
        this.props.dispatch(action_1.userActions.login(this.name.value, this.password.value, token));
        this.props.history.push("/");
    }
    render() {
        return React.createElement("div", { class: "register col-xs-12" },
            React.createElement("div", { class: "form-container" },
                React.createElement("div", null,
                    React.createElement("div", { class: "row text-center title" },
                        React.createElement("h2", { class: "title-head hidden-xs" },
                            "member ",
                            React.createElement("span", null, "login")),
                        React.createElement("p", { class: "info-form" }, "SEND, RECEIVE AND SECURELY STORE YOUR money IN YOUR WALLET!")),
                    React.createElement("form", null,
                        React.createElement("div", { class: "form-group" },
                            React.createElement("input", { class: "form-control", ref: input => this.name = input, name: "email", id: "email", placeholder: "EMAIL", type: "email" })),
                        React.createElement("div", { class: "form-group" },
                            React.createElement("input", { class: "form-control", ref: input => this.password = input, name: "password", id: "password", placeholder: "PASSWORD", type: "password", "aria-autocomplete": "list" })),
                        React.createElement("div", { class: "form-message" }, this.props.error && this.props.error),
                        React.createElement("div", { class: "form-group" },
                            React.createElement(react_router_dom_1.Link, { to: "/" },
                                React.createElement("button", { class: "btn btn-primary", onClick: this.onSubmit.bind(this) }, "login")),
                            React.createElement("p", { class: "text-center" },
                                "don't have an account ? ",
                                React.createElement(react_router_dom_1.Link, { to: "/register" }, "register now")))))));
    }
}
exports.LoginPage = LoginPage;
function mapStateToProps(state) {
    const { error } = state.login;
    return {
        error
    };
}
exports.default = react_redux_1.connect(mapStateToProps)(react_router_dom_2.withRouter(LoginPage));
