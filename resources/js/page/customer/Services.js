"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ServiceTab_1 = require("./ServiceTab");
const Transfer_1 = require("./Transfer");
const Deposit_1 = require("./Deposit");
const MobilePay_1 = require("./MobilePay");
const PayBill_1 = require("./PayBill");
const react_router_dom_1 = require("react-router-dom");
class Services extends React.Component {
    render() {
        return React.createElement("div", null,
            React.createElement("h1", { class: "title" }, "Services"),
            React.createElement(ServiceTab_1.default, { location: this.props.location.pathname }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/customer/(services|services/transfer)", component: Transfer_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/customer/services/deposit", component: Deposit_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/customer/services/mobile", component: MobilePay_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/customer/services/pay", component: PayBill_1.default }));
    }
}
exports.default = Services;
