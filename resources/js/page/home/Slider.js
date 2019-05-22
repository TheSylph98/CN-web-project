"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_bootstrap_carousel_1 = require("react-bootstrap-carousel");
const react_router_dom_1 = require("react-router-dom");
class Slider extends React.Component {
    render() {
        let leftIcon = React.createElement("span", { className: "fa fa-angle-left" });
        let rightIcon = React.createElement("span", { className: "fa fa-angle-right" });
        return React.createElement(react_bootstrap_carousel_1.default, { animation: true, autoplay: false, slideshowSpeed: 2000, defaultActiveIndex: 0, leftIcon: leftIcon, rightIcon: rightIcon },
            React.createElement("div", { class: "background item-1" },
                React.createElement("div", { class: "item bg-parallax" },
                    React.createElement("div", { class: "slider-content" },
                        React.createElement("div", { class: "container" },
                            React.createElement("div", { class: "slider-text text-center" },
                                React.createElement("h3", { class: "slide-title" },
                                    React.createElement("span", null, "Secure"),
                                    " and ",
                                    React.createElement("span", null, "Easy Way"),
                                    React.createElement("br", null),
                                    " To Trading Online"),
                                React.createElement("p", null,
                                    React.createElement(react_router_dom_1.Link, { to: "/register", class: "slider btn btn-primary" }, "REGISTER NOW"))))))),
            React.createElement("div", { class: "background item-2" },
                React.createElement("div", { class: "item bg-parallax" },
                    React.createElement("div", { class: "slider-content" },
                        React.createElement("div", { class: "col-md-12" },
                            React.createElement("div", { class: "container" },
                                React.createElement("div", { class: "slider-text text-center" },
                                    React.createElement("h3", { class: "slide-title" },
                                        React.createElement("span", null, "Enjoy"),
                                        " our services ",
                                        React.createElement("br", null),
                                        " ",
                                        React.createElement("span", null, "safely"),
                                        " and ",
                                        React.createElement("span", null, "easily")),
                                    React.createElement("p", null,
                                        React.createElement(react_router_dom_1.Link, { to: "/customer/services", class: "slider btn btn-primary" }, "OUR SERVICES")))))))));
    }
}
exports.default = Slider;
