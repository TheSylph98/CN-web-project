"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const TopPanel_1 = require("../common/TopPanel");
const Slider_1 = require("./Slider");
const Feature_1 = require("./Feature");
const Guide_1 = require("./Guide");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const Footer_1 = require("../common/Footer");
class HomePage extends React.Component {
    render() {
        return React.createElement("div", null,
            React.createElement(TopPanel_1.default, null),
            React.createElement(Slider_1.default, null),
            React.createElement(Feature_1.default, null),
            React.createElement(Guide_1.default, null),
            React.createElement(Footer_1.default, null));
    }
}
function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    };
}
exports.default = react_redux_1.connect(mapStateToProps)(react_router_dom_1.withRouter(HomePage));
