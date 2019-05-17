"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReactDOM = require("react-dom");
const React = require("react");
const react_redux_1 = require("react-redux");
const helper_1 = require("../store/helper");
const react_router_dom_1 = require("react-router-dom");
const app_1 = require("./app");
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: helper_1.store },
    React.createElement(react_router_dom_1.HashRouter, null,
        React.createElement(react_router_dom_1.Route, { path: "/", component: app_1.default }))), document.getElementById("app"));
