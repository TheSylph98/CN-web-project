"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Menu_1 = require("./Menu");
const react_router_dom_1 = require("react-router-dom");
class TopPanel extends React.Component {
    render() {
        return React.createElement("header", { class: "header top-panel" },
            React.createElement("div", { class: "container" },
                React.createElement("div", { class: "main-logo col-xs-12 col-md-3 col-md-2 col-lg-2 hidden-xs" },
                    React.createElement(react_router_dom_1.Link, { to: "/" },
                        React.createElement("img", { id: "logo", class: "img-responsive", src: "resources/images/logo-dark.png", alt: "logo" }))),
                React.createElement("div", { class: "col-md-6 col-lg-6" },
                    React.createElement("ul", { class: "unstyled bitcoin-stats text-center" },
                        React.createElement("li", null,
                            React.createElement("h6", null, "9,450 USD"),
                            React.createElement("span", null, "Last trade price")),
                        React.createElement("li", null,
                            React.createElement("h6", null, "+5.26%"),
                            React.createElement("span", null, "24 hour price")),
                        React.createElement("li", null,
                            React.createElement("h6", null, "12.820 BTC"),
                            React.createElement("span", null, "24 hour volume")),
                        React.createElement("li", null,
                            React.createElement("h6", null, "2,231,775"),
                            React.createElement("span", null, "active traders")),
                        React.createElement("li", null,
                            React.createElement("h6", null, "2,231,775"),
                            React.createElement("span", null, "active traders")))),
                React.createElement("div", { class: "col-md-4 col-lg-4" },
                    React.createElement("div", { class: "unstyled user" },
                        React.createElement("div", { class: "sign-in" },
                            React.createElement(react_router_dom_1.Link, { to: "/login", className: "btn btn-primary" },
                                React.createElement("i", { class: "fa fa-user" }),
                                " SIGN IN")),
                        React.createElement("div", { class: "sign-up" },
                            React.createElement(react_router_dom_1.Link, { to: "/register", class: "btn btn-primary" },
                                React.createElement("i", { class: "fa fa-user-plus" }),
                                " REGISTER"))))),
            React.createElement(Menu_1.default, null));
    }
}
exports.default = TopPanel;
