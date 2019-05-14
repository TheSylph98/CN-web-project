"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
class RegisterPage extends React.Component {
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
                            React.createElement("input", { class: "form-control", name: "name", id: "name", placeholder: "NAME", type: "text" })),
                        React.createElement("div", { class: "form-group" },
                            React.createElement("input", { class: "form-control", name: "email", id: "email", placeholder: "EMAIL", type: "email" })),
                        React.createElement("div", { class: "form-group" },
                            React.createElement("input", { class: "form-control", name: "password", id: "password", placeholder: "PASSWORD", type: "password", "aria-autocomplete": "list" })),
                        React.createElement("div", { class: "form-group" },
                            React.createElement(react_router_dom_1.Link, { to: "/" },
                                React.createElement("button", { class: "btn btn-primary" }, "create account")),
                            React.createElement("p", { class: "text-center" },
                                "already have an account ? ",
                                React.createElement(react_router_dom_1.Link, { to: "/login" }, "Login")))))));
    }
}
exports.default = RegisterPage;
