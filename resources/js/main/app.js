"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const homepage_1 = require("../page/home/homepage");
const RegisterPage_1 = require("../page/login/RegisterPage");
const LoginPage_1 = require("../page/login/LoginPage");
const CustomerPage_1 = require("../page/customer/CustomerPage");
const react_router_dom_1 = require("react-router-dom");
const React = require("react");
class App extends React.Component {
    componentWillMount() {
        window["routerHistory"] = this.props.history;
    }
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }
    render() {
        return React.createElement("div", null,
            React.createElement(react_router_dom_1.Route, { path: "/", exact: true, component: homepage_1.default }),
            React.createElement(react_router_dom_1.Route, { path: "/register/", component: RegisterPage_1.default }),
            React.createElement(react_router_dom_1.Route, { path: "/login/", component: LoginPage_1.default }),
            React.createElement(react_router_dom_1.Route, { path: "/customer", component: CustomerPage_1.default }));
    }
}
exports.App = App;
exports.default = react_router_dom_1.withRouter(App);
