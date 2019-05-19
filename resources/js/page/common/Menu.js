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
    render() {
        return React.createElement("nav", { class: "site-navigation navigation" + (this.state.fixed ? " fixed" : ""), id: "site-navigation" },
            React.createElement("div", { class: "container" },
                React.createElement("div", { class: "site-nav-inner" },
                    React.createElement("a", { class: "logo-mobile", href: "index.html" },
                        React.createElement("img", { id: "logo-mobile", class: "img-responsive", src: "resources/images/logo-dark.png", alt: "" })),
                    React.createElement("button", { type: "button", class: "navbar-toggle" },
                        React.createElement("span", { class: "sr-only" }, "Toggle navigation"),
                        React.createElement("span", { class: "icon-bar" }),
                        React.createElement("span", { class: "icon-bar" }),
                        React.createElement("span", { class: "icon-bar" })),
                    React.createElement("div", { class: "collapse navbar-collapse navbar-responsive-collapse", style: { maxHeight: "158px" } },
                        React.createElement("ul", { class: "nav navbar-nav" },
                            React.createElement("li", null,
                                React.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
                            React.createElement("li", null,
                                React.createElement(react_router_dom_1.Link, { to: "/customer" }, "Customer")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "services.html" }, "Services")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "pricing.html" }, "Guide")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "contact.html" }, "Contact")),
                            React.createElement("li", { class: "cart" },
                                React.createElement("a", { href: "shopping-cart.html" },
                                    React.createElement("i", { class: "fa fa-shopping-cart" }))),
                            React.createElement("li", { class: "search" },
                                React.createElement("button", { class: "fa fa-search", onClick: this.switchSearch.bind(this) })))))),
            React.createElement("div", { class: "site-search" },
                React.createElement("div", { class: "container" + (this.state.expandSearch ? " open" : "") },
                    React.createElement("input", { type: "text", placeholder: "type your keyword and hit enter ..." }),
                    React.createElement("span", { onClick: this.switchSearch.bind(this), class: "close" }, "\u00D7"))));
    }
}
exports.default = Menu;
