"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const TopPanel_1 = require("../common/TopPanel");
const Directory_1 = require("../common/Directory");
const Navigator_1 = require("./Navigator");
const AccountInfo_1 = require("./AccountInfo");
const react_router_dom_1 = require("react-router-dom");
class CustomerPage extends React.Component {
    render() {
        return React.createElement("div", null,
            React.createElement(TopPanel_1.default, null),
            React.createElement(Directory_1.default, { location: this.props.location.pathname }),
            React.createElement("div", { class: "customer-content", style: { paddingLeft: "40px", background: "#111" } },
                React.createElement(Navigator_1.default, { location: this.props.location.pathname }),
                React.createElement(react_router_dom_1.Route, { path: "/(customer/account|customer)/", component: AccountInfo_1.default })));
    }
}
exports.default = CustomerPage;
