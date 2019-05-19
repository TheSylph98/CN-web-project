"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const action_1 = require("../../store/action");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
class BankAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenBankId: null,
        };
    }
    chooseBank(id) {
        this.setState({
            chosenBankId: id,
        });
    }
    connect(e) {
        e.preventDefault();
        this.props.dispatch(action_1.accountActions.connectAccount(this.account.value, this.state.chosenBankId));
    }
    render() {
        if (!this.props.bank.loading && this.props.bank.banks.length == 0) {
            this.props.dispatch(action_1.bankActions.getBank());
        }
        if (this.props.account.notLoad) {
            this.props.dispatch(action_1.accountActions.getConnectedAccount());
        }
        let banks = this.props.bank.banks;
        let accounts = this.props.account.accounts;
        return React.createElement("div", { class: "content-right" },
            React.createElement("h1", { class: "title" }, "Bank Account"),
            React.createElement("div", { className: "wrapper bank-account" },
                React.createElement("div", { className: "title" }, "Connected bank account"),
                accounts.length == 0 ?
                    React.createElement("div", { className: "small-text" }, "You have not connected to any account")
                    :
                        React.createElement("div", { className: "account-list" }, accounts.map(account => React.createElement("div", { className: "account", key: account.id },
                            React.createElement("div", { className: "avatar" },
                                React.createElement("img", { src: "resources/images/banks/" + account.name.toLowerCase() + ".png" })),
                            React.createElement("div", { className: "text" },
                                React.createElement("span", null, account.name),
                                "Free deposit"),
                            React.createElement(react_router_dom_1.Link, { to: { pathname: "/customer/services/deposit", account: account.id } },
                                React.createElement("button", null, "Deposit"))))),
                React.createElement("div", { className: "title" }, "Choose a bank account to connect"),
                React.createElement("div", { className: "bank-list" }, banks.map(bank => React.createElement("div", { onClick: () => this.chooseBank(bank.id), id: bank.id, class: "bank" + (this.state.chosenBankId == bank.id ? " active" : "") },
                    React.createElement("div", { class: "avatar" },
                        React.createElement("img", { class: "bank-avatar", src: "resources/images/banks/" + bank.name.toLowerCase() + ".png" })),
                    React.createElement("span", null, bank.name)))),
                React.createElement("form", { class: "content" },
                    React.createElement("div", { class: "form-group" },
                        React.createElement("label", { class: "control-label", htmlFor: "account" }, "Account Number "),
                        React.createElement("div", { class: "input-wrap" },
                            React.createElement("input", { ref: input => this.account = input, type: "text", name: "account", class: "form-control", id: "account", placeholder: "Account Number" }))),
                    React.createElement("div", { class: "form-group" },
                        React.createElement("div", { class: "form-message" }, this.props.account.connected ?
                            "Account has been connected!" :
                            this.props.account.error ?
                                this.props.account.error : ""),
                        React.createElement("div", { class: "input-wrap margin" },
                            React.createElement("button", { onClick: this.connect.bind(this), type: "submit", class: "btn btn-info btn-block btn-update" }, "Connect"))))));
    }
}
function mapStateToProps(state) {
    const { bank, account } = state;
    return {
        bank,
        account,
    };
}
exports.default = react_redux_1.connect(mapStateToProps)(BankAccount);
