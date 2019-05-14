"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
class Navigator extends React.Component {
    render() {
        let location = this.props.location.replace(/\/$/, "");
        return React.createElement("div", { class: "navigator" },
            React.createElement("div", { class: "profiles" },
                React.createElement("p", { class: "image" },
                    React.createElement("img", { src: "https://salt.tikicdn.com/desktop/img/avatar.png?v=3", height: "45", width: "45", alt: "" })),
                React.createElement("p", { class: "name" }, "Your account"),
                React.createElement("h6", null, "T\u00F9ng Thanh")),
            React.createElement("div", { class: "menu dropdown" },
                React.createElement("ul", { role: "menu" },
                    React.createElement("li", { class: (location.endsWith("account") || location.endsWith("customer")) ? "active" : "" },
                        React.createElement(react_router_dom_1.Link, { to: "/customer/account" },
                            React.createElement("i", { class: "fa fa-user" }),
                            " ",
                            React.createElement("span", null, "Account Info"))),
                    React.createElement("li", { class: location.endsWith("services") ? "active" : "" },
                        React.createElement(react_router_dom_1.Link, { to: "/customer/services" },
                            " ",
                            React.createElement("i", { class: "fa fa-tools" }),
                            " ",
                            React.createElement("span", null, "Services"),
                            " ")),
                    React.createElement("li", { class: location.endsWith("notification") ? "active" : "" },
                        React.createElement(react_router_dom_1.Link, { to: "/customer/notification" },
                            React.createElement("i", { class: "fa fa-bell" }),
                            " ",
                            React.createElement("span", null, "Notification"),
                            " ",
                            React.createElement("span", { class: "num-noti-nav" }, "2"))),
                    React.createElement("li", { class: location.endsWith("history") ? "active" : "" },
                        React.createElement(react_router_dom_1.Link, { to: "/customer/history" },
                            " ",
                            React.createElement("i", { class: "fa fa-credit-card" }),
                            " ",
                            React.createElement("span", null, "Transaction history"))))));
    }
}
exports.default = Navigator;
