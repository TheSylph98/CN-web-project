"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const utils_1 = require("../../utils");
class TransactionSummary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showIncome: false,
        };
    }
    show(income) {
        this.setState({
            showIncome: income,
        });
    }
    getTotalOfType(types) {
        let total = this.props.transactions.filter(transaction => {
            return types.includes(transaction.type);
        }).reduce((result, transaction) => result + transaction.amount, 0);
        return utils_1.toMoneyFormat(total) + "đ";
    }
    render() {
        return React.createElement("div", { className: "wrapper trans-summary" },
            React.createElement("div", { className: "summary" },
                React.createElement("div", { onClick: () => this.show(false), className: "title" + (this.state.showIncome ? "" : " active") },
                    React.createElement("h3", null, "Total Expenditures"),
                    React.createElement("span", null, this.getTotalOfType([
                        utils_1.TransactionType.PAY,
                        utils_1.TransactionType.MOBILE_PAY,
                        utils_1.TransactionType.TRANSFER,
                    ]))),
                React.createElement("div", { onClick: () => this.show(true), className: "title" + (this.state.showIncome ? " active" : "") },
                    React.createElement("h3", null, "Total Income"),
                    React.createElement("span", null, this.getTotalOfType([
                        utils_1.TransactionType.RECEIVE,
                        utils_1.TransactionType.DEPOSIT,
                    ])))),
            this.state.showIncome ?
                React.createElement("ul", { className: "details" },
                    React.createElement("li", { className: "receive" },
                        React.createElement("h3", null, "Receive"),
                        React.createElement("span", null, this.getTotalOfType([
                            utils_1.TransactionType.RECEIVE
                        ]))),
                    React.createElement("li", { className: "deposit" },
                        React.createElement("h3", null, "Deposit"),
                        React.createElement("span", null, this.getTotalOfType([
                            utils_1.TransactionType.DEPOSIT
                        ]))))
                :
                    React.createElement("ul", { className: "details" },
                        React.createElement("li", { className: "transfer" },
                            React.createElement("h3", null, "Transfer"),
                            React.createElement("span", null, this.getTotalOfType([
                                utils_1.TransactionType.TRANSFER
                            ]))),
                        React.createElement("li", { className: "mobile-pay" },
                            React.createElement("h3", null, "Mobile pay"),
                            React.createElement("span", null, this.getTotalOfType([
                                utils_1.TransactionType.MOBILE_PAY
                            ]))),
                        React.createElement("li", { className: "pay" },
                            React.createElement("h3", null, "Other pays"),
                            React.createElement("span", null, this.getTotalOfType([
                                utils_1.TransactionType.PAY
                            ])))));
    }
}
exports.default = TransactionSummary;
