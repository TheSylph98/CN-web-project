"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
class ServiceTab extends React.Component {
    render() {
        let location = this.props.location.split("/").filter(path => path != "");
        let tab = location[location.length - 1];
        return React.createElement("div", { className: "wrapper service-tab" },
            React.createElement(react_router_dom_1.Link, { to: "/customer/services/transfer", className: "tab" + (tab == "transfer" || tab == "services" ? " active" : "") },
                React.createElement("i", { className: "fa fa-sign-out-alt" }),
                React.createElement("span", null, "Transfer")),
            React.createElement(react_router_dom_1.Link, { to: "/customer/services/deposit", className: "tab" + (tab == "deposit" ? " active" : "") },
                React.createElement("i", { className: "fa fa-sign-in-alt" }),
                React.createElement("span", null, "Deposit")),
            React.createElement(react_router_dom_1.Link, { to: "/customer/services/pay", className: "tab" + (tab == "pay" ? " active" : "") },
                React.createElement("i", { className: "fa fa-credit-card" }),
                React.createElement("span", null, "Pay")));
    }
}
exports.default = ServiceTab;
