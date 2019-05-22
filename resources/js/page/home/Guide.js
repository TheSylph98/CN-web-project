"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
class Guide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
        };
    }
    onClick(index) {
        this.setState({
            step: index,
        });
    }
    render() {
        return React.createElement("section", { className: "guide", id: "guide" },
            React.createElement("div", { className: "text text-center" },
                React.createElement("div", { className: "title" }, "Guide"),
                React.createElement("div", { className: "subtitle" }, "four easy steps to become our customer and enjoy useful services")),
            React.createElement("div", { className: "guide-content container" },
                React.createElement("div", { className: "col-12 col-lg-6 guide-logo" },
                    React.createElement("img", { className: "img-responsive", src: "resources/images/guide.png", alt: "Guide" })),
                React.createElement("div", { class: "col-12 col-lg-6 order-1 order-lg-2" },
                    React.createElement("ol", { class: "process list-unstyled manual-process d-block", childid: "37752", id: "hd-sub-ctn-37752" },
                        React.createElement("li", { onClick: () => this.onClick(1), class: "process_item" + (this.state.step == 1 ? " active" : "") },
                            React.createElement("div", { class: "process__number" },
                                React.createElement("span", null, "1")),
                            React.createElement("div", { class: "process__body" },
                                React.createElement("h4", { class: "process__body-title" }, "Register an e-wallet"),
                                React.createElement("div", { class: "process__body-content" },
                                    React.createElement("p", null,
                                        React.createElement("span", { style: { fontSize: "14px" } }, "Create a new e-wallet with your email account")),
                                    React.createElement("p", null,
                                        React.createElement("span", { style: { fontSize: "14px" } }, "Update your phone number to have a better experience"))))),
                        React.createElement("li", { onClick: () => this.onClick(2), class: "process_item" + (this.state.step == 2 ? " active" : "") },
                            React.createElement("div", { class: "process__number" },
                                React.createElement("span", null, "2")),
                            React.createElement("div", { class: "process__body" },
                                React.createElement("h4", { class: "process__body-title" }, "Connect to your bank account"),
                                React.createElement("div", { class: "process__body-content" },
                                    React.createElement("p", null,
                                        React.createElement("span", { style: { fontSize: "14px" } }, "Select your bank and enter your account number to start making transaction")),
                                    React.createElement("p", null,
                                        React.createElement("span", { style: { fontSize: "14px" } },
                                            React.createElement("em", null, "Note:\u00A0")),
                                        React.createElement("em", null, "Your account must be registered in a bank supported by us"))))),
                        React.createElement("li", { onClick: () => this.onClick(3), class: "process_item" + (this.state.step == 3 ? " active" : "") },
                            React.createElement("div", { class: "process__number" },
                                React.createElement("span", null, "3")),
                            React.createElement("div", { class: "process__body" },
                                React.createElement("h4", { class: "process__body-title" }, "Withdraw money from bank account to wallet"),
                                React.createElement("div", { class: "process__body-content" },
                                    React.createElement("p", null,
                                        React.createElement("span", { style: { fontSize: "14px" } }, "Your wallet is empty at first")),
                                    React.createElement("p", null,
                                        React.createElement("span", { style: { fontSize: "14px" } }, "You can send money from bank account to wallet without any fee"))))),
                        React.createElement("li", { onClick: () => this.onClick(4), class: "process_item" + (this.state.step == 4 ? " active" : "") },
                            React.createElement("div", { class: "process__number" },
                                React.createElement("span", null, "4")),
                            React.createElement("div", { class: "process__body" },
                                React.createElement("h4", { class: "process__body-title" }, "Use our services"),
                                React.createElement("div", { class: "process__body-content" },
                                    React.createElement("p", null,
                                        React.createElement("span", { style: { fontSize: "14px" } }, "We provide numerous kinds of service")),
                                    React.createElement("p", null,
                                        React.createElement("span", { style: { fontSize: "14px" } },
                                            React.createElement(react_router_dom_1.Link, { to: "/customer/services/transfer" }, "Transfer to other wallets"),
                                            React.createElement("br", null),
                                            React.createElement(react_router_dom_1.Link, { to: "/customer/services/pay" }, "Pay your bills"),
                                            React.createElement("br", null),
                                            React.createElement(react_router_dom_1.Link, { to: "/customer/services/mobile" }, "Buy mobile cards"))))))))));
    }
}
exports.default = Guide;
