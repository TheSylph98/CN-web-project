"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReactDOM = require("react-dom");
const React = require("react");
const homepage_1 = require("../page/home/homepage");
const RegisterPage_1 = require("../page/login/RegisterPage");
const LoginPage_1 = require("../page/login/LoginPage");
const CustomerPage_1 = require("../page/customer/CustomerPage");
const react_router_dom_1 = require("react-router-dom");
ReactDOM.render(React.createElement(react_router_dom_1.HashRouter, null,
    React.createElement(react_router_dom_1.Route, { path: "/", exact: true, component: homepage_1.default }),
    React.createElement(react_router_dom_1.Route, { path: "/register/", component: RegisterPage_1.default }),
    React.createElement(react_router_dom_1.Route, { path: "/login/", component: LoginPage_1.default }),
    React.createElement(react_router_dom_1.Route, { path: "/customer", component: CustomerPage_1.default })), document.getElementById("app"));
