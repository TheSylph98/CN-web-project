"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const api_1 = require("../../backend-api/api");
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
        api_1.loginAuth(this.name.value, this.password.value, token)
            .then(data => {
            if (data.dangnhap == "kothanhcong") {
                this.showMessage(data.error.password);
            }
        });
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
                        React.createElement("div", { class: "form-message" }, this.state.message),
                        React.createElement("div", { class: "form-group" },
                            React.createElement(react_router_dom_1.Link, { to: "/" },
                                React.createElement("button", { class: "btn btn-primary", onClick: this.onSubmit.bind(this) }, "login")),
                            React.createElement("p", { class: "text-center" },
                                "don't have an account ? ",
                                React.createElement(react_router_dom_1.Link, { to: "/register" }, "register now")))))));
    }
}
exports.default = LoginPage;
