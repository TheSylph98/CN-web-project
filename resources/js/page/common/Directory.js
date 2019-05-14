"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
class Directory extends React.Component {
    render() {
        let location = this.props.location.replace(/\/$/, '');
        let titles = location.split("/");
        let link = "";
        const texts = {
            "": "Home",
            "customer": "Customer",
            "account": "Account Info",
            "notification": "Notification",
            "history": "Traction History",
            "services": "Services"
        };
        return React.createElement("div", { class: "directory" },
            React.createElement("div", { class: "container" },
                React.createElement("div", { class: "row" },
                    React.createElement("div", { class: "col-md-12" },
                        React.createElement("ol", { class: "title" }, titles.map(title => {
                            link += title + "/";
                            return React.createElement("li", null,
                                React.createElement(react_router_dom_1.Link, { to: link }, texts[title]));
                        }))))));
    }
}
exports.default = Directory;
