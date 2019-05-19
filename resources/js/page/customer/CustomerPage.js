"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const TopPanel_1 = require("../common/TopPanel");
const Directory_1 = require("../common/Directory");
const Navigator_1 = require("./Navigator");
const AccountInfo_1 = require("./AccountInfo");
const BankAccount_1 = require("./BankAccount");
const Services_1 = require("./Services");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const FavoriteList_1 = require("./FavoriteList");
class CustomerPage extends React.Component {
    render() {
        if (!this.props.loggedIn) {
            this.props.history.push("/login");
            alert("You have to login first!");
            return React.createElement("div", null);
        }
        return React.createElement("div", null,
            React.createElement(TopPanel_1.default, null),
            React.createElement(Directory_1.default, { location: this.props.location.pathname }),
            React.createElement("div", { class: "customer-content", style: { paddingLeft: "40px", background: "#111" } },
                React.createElement(Navigator_1.default, { location: this.props.location.pathname }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/(customer/account|customer)/", component: AccountInfo_1.default }),
                React.createElement(react_router_dom_1.Route, { path: "/customer/bank", component: BankAccount_1.default }),
                React.createElement(react_router_dom_1.Route, { path: "/customer/services", component: Services_1.default }),
                React.createElement(react_router_dom_1.Route, { path: "/customer/favorite", component: FavoriteList_1.default })));
    }
}
function mapStateToProps(state) {
    const { loggedIn } = state.login;
    return {
        loggedIn
    };
}
exports.default = react_redux_1.connect(mapStateToProps)(react_router_dom_1.withRouter(CustomerPage));
