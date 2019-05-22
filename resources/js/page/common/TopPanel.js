"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Menu_1 = require("./Menu");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const action_1 = require("../../store/action");
class TopPanel extends React.Component {
    onSignOut() {
        this.props.dispatch(action_1.userActions.logout());
    }
    render() {
        return React.createElement("header", { class: "header top-panel" },
            React.createElement("div", { class: "container" },
                React.createElement("div", { class: "main-logo col-xs-12 col-md-3 col-md-2 col-lg-2 hidden-xs" },
                    React.createElement(react_router_dom_1.Link, { to: "/" },
                        React.createElement("div", { id: "logo", class: "img-responsive" },
                            React.createElement("span", null, "\u20AC"),
                            "Wallet"))),
                React.createElement("div", { class: "col-md-6 col-lg-6 text-center" },
                    React.createElement("ul", { class: "guess bitcoin-stats text-center" },
                        React.createElement("li", null,
                            React.createElement("h6", null, "13"),
                            React.createElement("span", null, "Banks")),
                        React.createElement("li", null,
                            React.createElement("h6", null, "5"),
                            React.createElement("span", null, "Mobile telecoms")),
                        React.createElement("li", null,
                            React.createElement("h6", null, "5"),
                            React.createElement("span", null, "Bill types")),
                        React.createElement("li", null,
                            React.createElement("h6", null, "100.000"),
                            React.createElement("span", null, "Active accounts")),
                        React.createElement("li", null,
                            React.createElement("h6", null, "FREE"),
                            React.createElement("span", null, "Transfer fee")))),
                !this.props.login.loggedIn ?
                    React.createElement("div", { class: "col-md-4 col-lg-4" },
                        React.createElement("ul", { class: "guess user" },
                            React.createElement("li", { class: "sign-in" },
                                React.createElement(react_router_dom_1.Link, { to: "/login", className: "btn btn-primary" },
                                    React.createElement("i", { class: "fa fa-user" }),
                                    " \u00A0SIGN IN")),
                            React.createElement("li", { class: "sign-up" },
                                React.createElement(react_router_dom_1.Link, { to: "/register", class: "btn btn-primary" },
                                    React.createElement("i", { class: "fa fa-user-plus" }),
                                    " REGISTER")))) :
                    React.createElement("div", { class: "col-md-4 col-lg-4" },
                        React.createElement("ul", { class: "logged-in user" },
                            React.createElement("li", { class: "account" },
                                React.createElement(react_router_dom_1.Link, { to: "/customer" },
                                    React.createElement("div", { class: "avatar" },
                                        React.createElement("i", { class: "fa fa-user" }),
                                        this.props.numUnread > 0 &&
                                            React.createElement("div", { className: "notification" }, this.props.numUnread)),
                                    React.createElement("span", null, this.props.login.user.username))),
                            React.createElement("li", { class: "sign-out" },
                                React.createElement(react_router_dom_1.Link, { to: "/", class: "btn btn-primary", onClick: this.onSignOut.bind(this) },
                                    React.createElement("i", { class: "fa fa-sign-out-alt" }),
                                    "\u00A0SIGN OUT"))))),
            React.createElement(Menu_1.default, null));
    }
}
function mapStateToProps(state) {
    const { login } = state;
    const { notifications } = state.notification;
    let numUnread = notifications.filter(noti => !noti.read).length;
    return {
        login,
        numUnread,
    };
}
exports.default = react_redux_1.connect(mapStateToProps)(TopPanel);
