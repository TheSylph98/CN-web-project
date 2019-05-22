"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const homepage_1 = require("../page/home/homepage");
const RegisterPage_1 = require("../page/login/RegisterPage");
const LoginPage_1 = require("../page/login/LoginPage");
const CustomerPage_1 = require("../page/customer/CustomerPage");
const react_router_dom_1 = require("react-router-dom");
const React = require("react");
const react_redux_1 = require("react-redux");
const action_1 = require("../store/action");
class App extends React.Component {
    componentWillMount() {
        window["routerHistory"] = this.props.history;
        setInterval(() => this.props.dispatch(action_1.notificationActions.load()), 1000);
    }
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }
    render() {
        return React.createElement("div", null,
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: homepage_1.default }),
            React.createElement(react_router_dom_1.Route, { path: "/register/", component: RegisterPage_1.default }),
            React.createElement(react_router_dom_1.Route, { path: "/login/", component: LoginPage_1.default }),
            React.createElement(react_router_dom_1.Route, { path: "/customer", component: CustomerPage_1.default }));
    }
}
exports.App = App;
exports.default = react_redux_1.connect()(react_router_dom_1.withRouter(App));
