"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const action_1 = require("../../store/action");
const react_redux_1 = require("react-redux");
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
    connect() {
        this.props.dispatch(action_1.accountActions.connectAccount(this.account.value, this.state.chosenBankId));
    }
    render() {
        if (!this.props.loading && this.props.banks.length == 0) {
            this.props.dispatch(action_1.bankActions.getBank());
        }
        let banks = this.props.banks;
        return React.createElement("div", { class: "content-right" },
            React.createElement("h1", { class: "title" }, "Bank Account"),
            React.createElement("div", { className: "wrapper bank-account" },
                React.createElement("div", { className: "title" }, "Choose a bank account to connect"),
                React.createElement("div", { className: "bank-list" }, banks.map(bank => React.createElement("div", { onClick: () => this.chooseBank(bank.id), id: bank.id, class: "bank" + (this.state.chosenBankId == bank.id ? " active" : "") },
                    React.createElement("img", { class: "bank-avatar", src: "resources/images/banks/" + bank.name.toLowerCase() + ".png" }),
                    React.createElement("span", null, bank.name)))),
                React.createElement("form", { class: "content", id: "edit-account" },
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
    const { banks, loading } = state.bank;
    const { account } = state;
    return {
        banks,
        loading,
        account,
    };
}
exports.default = react_redux_1.connect(mapStateToProps)(BankAccount);
