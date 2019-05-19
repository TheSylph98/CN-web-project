"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Feature extends React.Component {
    render() {
        return React.createElement("section", { class: "features" },
            React.createElement("div", { class: "container" },
                React.createElement("div", { class: "row features-row" },
                    React.createElement("div", { class: "feature-box col-md-4 col-sm-12" },
                        React.createElement("span", { class: "feature-icon" },
                            React.createElement("i", { class: "fas fa-wallet" })),
                        React.createElement("div", { class: "feature-box-content" },
                            React.createElement("h3", null, "Add money to your Wallet"),
                            React.createElement("p", null, "Add money you\u2019ve owned via credit card."))),
                    React.createElement("div", { class: "feature-box two col-md-4 col-sm-12" },
                        React.createElement("span", { class: "feature-icon" },
                            React.createElement("i", { class: "fa fa-credit-card" })),
                        React.createElement("div", { class: "feature-box-content" },
                            React.createElement("h3", null, "Withdraw from Wallet"),
                            React.createElement("p", null, "Tranfer to your bank account without fee"))),
                    React.createElement("div", { class: "feature-box three col-md-4 col-sm-12" },
                        React.createElement("span", { class: "feature-icon" },
                            React.createElement("i", { class: "fa fa-shopping-cart" })),
                        React.createElement("div", { class: "feature-box-content" },
                            React.createElement("h3", null, "Pay bill with Wallet"),
                            React.createElement("p", null, "Enter receiver's address, specify the amount and send."))))));
    }
}
exports.default = Feature;
