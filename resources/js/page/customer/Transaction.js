"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const action_1 = require("../../store/action");
const utils_1 = require("../../utils");
class Transaction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transaction: null,
        };
    }
    componentWillMount() {
        if (this.props.transaction.notLoad) {
            this.props.dispatch(action_1.transactionActions.load());
        }
        if (this.props.account.notLoad) {
            this.props.dispatch(action_1.accountActions.getConnectedAccount());
        }
        if (this.props.location.details) {
            let details = this.props.location.details;
            this.setState({
                transaction: this.props.transaction.transactions.find(trans => {
                    return utils_1.compare(details.type, trans.type)
                        && details.id == trans.id;
                })
            });
        }
    }
    onRead(transaction) {
        this.setState({
            transaction: transaction
        });
    }
    getSource(transaction) {
        switch (transaction.type) {
            case utils_1.TransactionType.DEPOSIT:
                let bank = this.props.account.accounts.find(account => account.id == transaction.account).name;
                return bank;
            case utils_1.TransactionType.RECEIVE:
                return transaction.sender;
            default:
                return "e-wallet";
        }
    }
    getOtherInfoSection(transaction) {
        switch (transaction.type) {
            case utils_1.TransactionType.TRANSFER:
                return React.createElement("div", null,
                    React.createElement("div", { className: "section-title" }, "Other Infomation"),
                    React.createElement("section", null,
                        React.createElement("div", { className: "info" },
                            React.createElement("label", null, "Receiver"),
                            React.createElement("span", null, transaction.receiver)),
                        React.createElement("div", { className: "info" },
                            React.createElement("label", null, "Email"),
                            React.createElement("span", null, transaction.receiver)),
                        React.createElement("div", { className: "info" },
                            React.createElement("label", null, "Amount"),
                            React.createElement("span", null, this.getAmount(transaction))),
                        React.createElement("div", { className: "info" },
                            React.createElement("label", null, "Message"),
                            React.createElement("span", null, transaction.message))));
            case utils_1.TransactionType.PAY:
                return React.createElement("div", null,
                    React.createElement("div", { className: "section-title" }, "Other Infomation"),
                    React.createElement("section", null,
                        React.createElement("div", { className: "info" },
                            React.createElement("label", null, "Service"),
                            React.createElement("span", null, transaction.bill)),
                        React.createElement("div", { className: "info" },
                            React.createElement("label", null, "Bill code"),
                            React.createElement("span", null, transaction.bill)),
                        React.createElement("div", { className: "info" },
                            React.createElement("label", null, "Description"),
                            React.createElement("span", null, transaction.description))));
            case utils_1.TransactionType.MOBILE_PAY:
                return React.createElement("div", null,
                    React.createElement("div", { className: "section-title" }, "Other Infomation"),
                    React.createElement("section", null,
                        React.createElement("div", { className: "info" },
                            React.createElement("label", null, "Telecom Company"),
                            React.createElement("span", null, transaction.telecom)),
                        React.createElement("div", { className: "info" },
                            React.createElement("label", null, "Bill code"),
                            React.createElement("span", null, transaction.bill)),
                        React.createElement("div", { className: "info" },
                            React.createElement("label", null, "Cost"),
                            React.createElement("span", null, transaction.amount))));
            default:
                return React.createElement("span", null);
        }
    }
    getAmount(transaction) {
        if (transaction.type == utils_1.TransactionType.TRANSFER
            || transaction.type == utils_1.TransactionType.PAY
            || transaction.type == utils_1.TransactionType.MOBILE_PAY) {
            return "-" + utils_1.toMoneyFormat(transaction.amount) + "đ";
        }
        return "+" + utils_1.toMoneyFormat(transaction.amount) + "đ";
    }
    getContent(transaction) {
        if (transaction.type == utils_1.TransactionType.TRANSFER) {
            return "Transfer to " + transaction.receiver;
        }
        if (transaction.type == utils_1.TransactionType.DEPOSIT) {
            let bank = this.props.account.accounts.find(account => account.id == transaction.account).name;
            return "Add money to wallet from " + bank;
        }
        if (transaction.type == utils_1.TransactionType.PAY) {
            return "PAY BILL";
        }
        if (transaction.type == utils_1.TransactionType.RECEIVE) {
            return "Receive money from " + transaction.sender;
        }
        return "Buy mobile card from " + transaction.telecom;
    }
    render() {
        let transactions = this.props.transaction.transactions;
        let transaction = this.state.transaction;
        return React.createElement("div", { className: "content-right" },
            React.createElement("h1", { className: "title" }, "Transaction"),
            React.createElement("div", { className: "wrapper trans" },
                React.createElement("div", { className: "sub-wrapper" },
                    React.createElement("div", { className: "title" }, "May 2019"),
                    React.createElement("div", { className: "trans-list" }, transactions.map((transaction, number) => React.createElement("div", { onClick: () => this.onRead(transaction), key: number, className: "trans" + (transaction == this.state.transaction ? " active" : "") },
                        React.createElement("div", { className: "avatar" }, transaction.type == utils_1.TransactionType.TRANSFER ?
                            React.createElement("i", { className: "fa fa-sign-out-alt", style: { color: "green" } })
                            : transaction.type == utils_1.TransactionType.DEPOSIT ?
                                React.createElement("i", { className: "fa fa-sign-in-alt", style: { color: "blue" } })
                                : transaction.type == utils_1.TransactionType.RECEIVE ?
                                    React.createElement("i", { className: "fa fa-money-bill", style: { color: "red" } })
                                    : transaction.type == utils_1.TransactionType.PAY ?
                                        React.createElement("i", { className: "fa fa-credit-card", style: { color: "yellow" } })
                                        : transaction.type == utils_1.TransactionType.MOBILE_PAY ?
                                            React.createElement("i", { className: "fa fa-mobile-alt", style: { color: "#fd961a" } })
                                            : React.createElement("i", null)),
                        React.createElement("div", { className: "text" },
                            React.createElement("span", { className: "title" }, this.getContent(transaction)),
                            React.createElement("span", { className: "time" }, transaction.time.toLocaleDateString()),
                            React.createElement("span", { className: "status" }, "Success"),
                            React.createElement("span", { className: "amount" }, this.getAmount(transaction))))))),
                transaction &&
                    React.createElement("div", { className: "sub-wrapper trans-details" },
                        React.createElement("div", { className: "title" }, "Transaction Details"),
                        React.createElement("section", null,
                            React.createElement("span", { className: "type" }, transaction.type),
                            React.createElement("span", { className: "amount" }, this.getAmount(transaction)),
                            React.createElement("span", { className: "status" }, "Success")),
                        React.createElement("section", null,
                            React.createElement("div", { className: "info" },
                                React.createElement("label", null, "Source"),
                                React.createElement("span", null, this.getSource(transaction))),
                            React.createElement("div", { className: "info" },
                                React.createElement("label", null, "Transaction fee"),
                                React.createElement("span", null, "Free")),
                            React.createElement("div", { className: "info" },
                                React.createElement("label", null, "Transaction id"),
                                React.createElement("span", null, transaction.id)),
                            React.createElement("div", { className: "info" },
                                React.createElement("label", null, "Time"),
                                React.createElement("span", null, transaction.time.toLocaleString()))),
                        this.getOtherInfoSection(transaction))));
    }
}
function mapStateToProps(state) {
    const { transaction, account } = state;
    return {
        transaction,
        account,
    };
}
exports.default = react_redux_1.connect(mapStateToProps)(Transaction);
