"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const action_1 = require("../../store/action");
const utils_1 = require("../../utils");
const TransactionSummary_1 = require("./TransactionSummary");
class Transaction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transaction: null,
            search: false,
        };
    }
    showSearch() {
        this.setState(Object.assign({}, this.state, { search: true }));
    }
    hideSearch() {
        setTimeout(() => this.setState(Object.assign({}, this.state, { search: false })), 200);
    }
    componentWillMount() {
        if (this.props.transaction.notLoad) {
            this.props.dispatch(action_1.transactionActions.load());
        }
        let transactions = this.props.transaction.transactions;
        if (this.props.location.details) {
            let details = this.props.location.details;
            this.setState(Object.assign({}, this.state, { transaction: transactions.find(trans => {
                    return utils_1.compare(details.type, trans.type)
                        && details.id == trans.id;
                }) }));
        }
        else {
            if (transactions.length > 0) {
                this.setState(Object.assign({}, this.state, { transaction: transactions[0] }));
            }
        }
    }
    componentWillReceiveProps(nextProps) {
        let transactions = nextProps.transaction.transactions;
        if (nextProps.location.details) {
            let details = nextProps.location.details;
            this.setState(Object.assign({}, this.state, { transaction: transactions.find(trans => {
                    return utils_1.compare(details.type, trans.type)
                        && details.id == trans.id;
                }) }));
        }
        else {
            if (transactions.length > 0) {
                this.setState(Object.assign({}, this.state, { transaction: transactions[0] }));
            }
        }
    }
    onRead(transaction) {
        this.setState({
            search: false,
            transaction: transaction
        });
    }
    getSource(transaction) {
        switch (transaction.type) {
            case utils_1.TransactionType.DEPOSIT:
                return transaction.account.name;
            case utils_1.TransactionType.RECEIVE:
                return transaction.sender.username;
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
                            React.createElement("span", null, transaction.receiver.username)),
                        React.createElement("div", { className: "info" },
                            React.createElement("label", null, "Email"),
                            React.createElement("span", null, transaction.receiver.email)),
                        React.createElement("div", { className: "info" },
                            React.createElement("label", null, "Amount"),
                            React.createElement("span", null, this.getAmount(transaction).slice(1))),
                        React.createElement("div", { className: "info" },
                            React.createElement("label", null, "Message"),
                            React.createElement("span", null, transaction.message))));
            case utils_1.TransactionType.MOBILE_PAY:
                return React.createElement("div", null,
                    React.createElement("div", { className: "section-title" }, "Other Infomation"),
                    React.createElement("section", null,
                        React.createElement("div", { className: "info" },
                            React.createElement("label", null, "Telecom Company"),
                            React.createElement("span", null, transaction.telecom.name)),
                        React.createElement("div", { className: "info" },
                            React.createElement("label", null, "Cost"),
                            React.createElement("span", null, this.getAmount(transaction).slice(1)))));
            case utils_1.TransactionType.PAY:
                return React.createElement("div", null,
                    React.createElement("div", { className: "section-title" }, "Other Infomation"),
                    React.createElement("section", null,
                        React.createElement("div", { className: "info" },
                            React.createElement("label", null, "Service"),
                            React.createElement("span", null, transaction.bill.type)),
                        React.createElement("div", { className: "info" },
                            React.createElement("label", null, "Code"),
                            React.createElement("span", null, transaction.bill.code)),
                        React.createElement("div", { className: "info" },
                            React.createElement("label", null, "Provider"),
                            React.createElement("span", null, transaction.bill.provider))));
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
            return "Transfer to " + transaction.receiver.username;
        }
        if (transaction.type == utils_1.TransactionType.DEPOSIT) {
            return "Add money to wallet from " + transaction.account.name;
        }
        if (transaction.type == utils_1.TransactionType.PAY) {
            return "Pay '" + transaction.bill.type + "' bill provided by " + transaction.bill.provider;
        }
        if (transaction.type == utils_1.TransactionType.RECEIVE) {
            return "Receive money from " + transaction.sender.username;
        }
        return "Buy mobile card from " + transaction.telecom.name;
    }
    render() {
        let transactions = this.props.transaction.transactions;
        let transaction = this.state.transaction;
        return React.createElement("div", null,
            React.createElement("h1", { className: "title" }, "Transaction"),
            React.createElement(TransactionSummary_1.default, { transactions: transactions }),
            React.createElement("div", { className: "wrapper trans" },
                React.createElement("div", { className: "sub-wrapper responsive" },
                    React.createElement("div", { class: "form-group" },
                        React.createElement("div", { class: "input-wrap" },
                            React.createElement("input", { onBlur: this.hideSearch.bind(this), onFocus: this.showSearch.bind(this), editable: false, ref: input => this.search = input, type: "text", class: "form-control", value: this.state.transaction && this.getContent(this.state.transaction), placeholder: "Transaction List" })),
                        React.createElement("div", { className: "trans-list collapse" + (this.state.search ? " display" : "") }, transactions.map((transaction, number) => React.createElement("div", { onClick: () => this.onRead(transaction), key: number, className: "trans" + (transaction == this.state.transaction ? " active" : "") },
                            React.createElement("div", { className: "avatar" }, transaction.type == utils_1.TransactionType.TRANSFER ?
                                React.createElement("i", { className: "fa fa-sign-out-alt", style: { color: "#0f7a0b" } })
                                : transaction.type == utils_1.TransactionType.DEPOSIT ?
                                    React.createElement("i", { className: "fa fa-sign-in-alt", style: { color: "#365382" } })
                                    : transaction.type == utils_1.TransactionType.RECEIVE ?
                                        React.createElement("i", { className: "fa fa-money-bill", style: { color: "#e54837" } })
                                        : transaction.type == utils_1.TransactionType.PAY ?
                                            React.createElement("i", { className: "fa fa-credit-card", style: { color: "#d1c217" } })
                                            : transaction.type == utils_1.TransactionType.MOBILE_PAY ?
                                                React.createElement("i", { className: "fa fa-mobile-alt", style: { color: "#d1c217" } })
                                                : React.createElement("i", null)),
                            React.createElement("div", { className: "text" },
                                React.createElement("span", { className: "title" }, this.getContent(transaction)),
                                React.createElement("span", { className: "time" }, transaction.time.toLocaleDateString()),
                                React.createElement("span", { className: "status" }, "Success"),
                                React.createElement("span", { className: "amount" }, this.getAmount(transaction)))))))),
                React.createElement("div", { className: "sub-wrapper" },
                    React.createElement("div", { className: "title" }, "Transaction List"),
                    React.createElement("div", { className: "trans-list" }, transactions.map((transaction, number) => React.createElement("div", { onClick: () => this.onRead(transaction), key: number, className: "trans" + (transaction == this.state.transaction ? " active" : "") },
                        React.createElement("div", { className: "avatar" }, transaction.type == utils_1.TransactionType.TRANSFER ?
                            React.createElement("i", { className: "fa fa-sign-out-alt", style: { color: "#0f7a0b" } })
                            : transaction.type == utils_1.TransactionType.DEPOSIT ?
                                React.createElement("i", { className: "fa fa-sign-in-alt", style: { color: "#365382" } })
                                : transaction.type == utils_1.TransactionType.RECEIVE ?
                                    React.createElement("i", { className: "fa fa-money-bill", style: { color: "#e54837" } })
                                    : transaction.type == utils_1.TransactionType.PAY ?
                                        React.createElement("i", { className: "fa fa-credit-card", style: { color: "#d1c217" } })
                                        : transaction.type == utils_1.TransactionType.MOBILE_PAY ?
                                            React.createElement("i", { className: "fa fa-mobile-alt", style: { color: "#d1c217" } })
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
    const { transaction } = state;
    return {
        transaction,
    };
}
exports.default = react_redux_1.connect(mapStateToProps)(Transaction);
