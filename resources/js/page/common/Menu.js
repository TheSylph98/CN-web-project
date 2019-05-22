"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expandSearch: false,
            fixed: false,
            expandMenu: false
        };
        window.onscroll = this.fixAtTop.bind(this);
    }
    fixAtTop() {
        if (document.body.getBoundingClientRect().top < -90) {
            this.setState(Object.assign({}, this.state, { fixed: true }));
        }
        else {
            this.setState(Object.assign({}, this.state, { fixed: false }));
        }
    }
    switchSearch() {
        this.setState(Object.assign({}, this.state, { expandSearch: !this.state.expandSearch }));
    }
    collapse() {
        this.setState(Object.assign({}, this.state, { expandMenu: !this.state.expandMenu }));
    }
    render() {
        return React.createElement("nav", { class: "site-navigation navigation" + (this.state.fixed ? " fixed" : ""), id: "site-navigation" },
            React.createElement("div", { class: "container" },
                React.createElement("div", { class: "site-nav-inner" },
                    React.createElement("a", { class: "logo-mobile", href: "index.html" },
                        React.createElement("div", { id: "logo", class: "img-responsive" },
                            React.createElement("span", null, "\u20AC"),
                            "Wallet")),
                    React.createElement("button", { type: "button", class: "navbar-toggle", onClick: this.collapse.bind(this) },
                        React.createElement("span", { class: "sr-only" }, "Toggle navigation"),
                        React.createElement("span", { class: "icon-bar" }),
                        React.createElement("span", { class: "icon-bar" }),
                        React.createElement("span", { class: "icon-bar" })),
                    React.createElement("div", { class: "collapse navbar-collapse navbar-responsive-collapse" +
                            (this.state.expandMenu ? " in" : "") },
                        React.createElement("ul", { class: "nav navbar-nav" },
                            React.createElement("li", null,
                                React.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
                            React.createElement("li", null,
                                React.createElement(react_router_dom_1.Link, { to: "/customer" }, "Customer")),
                            React.createElement("li", null,
                                React.createElement(react_router_dom_1.Link, { to: "/customer/services" }, "Services")),
                            React.createElement("li", null,
                                React.createElement(react_router_dom_1.Link, { to: "/#guide" }, "Guide")),
                            React.createElement("li", null,
                                React.createElement(react_router_dom_1.Link, { to: "/contact" }, "Contact")),
                            React.createElement("li", { class: "search" },
                                React.createElement("button", { class: "fa fa-search", onClick: this.switchSearch.bind(this) })))))),
            React.createElement("div", { class: "site-search" },
                React.createElement("div", { class: "container" + (this.state.expandSearch ? " open" : "") },
                    React.createElement("input", { type: "text", placeholder: "type your keyword and hit enter ..." }),
                    React.createElement("span", { onClick: this.switchSearch.bind(this), class: "close" }, "\u00D7"))));
    }
}
exports.default = Menu;
