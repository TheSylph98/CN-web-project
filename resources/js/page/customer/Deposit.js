"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const action_1 = require("../../store/action");
class Deposit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenAccount: null,
        };
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.dispatch(action_1.servicesActions.deposit(this.state.chosenAccount, this.amount.value));
    }
    componentWillMount() {
        if (this.props.account.notLoad) {
            this.props.dispatch(action_1.accountActions.getConnectedAccount());
        }
        if (this.props.location.account) {
            this.chooseAccount(this.props.location.account);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.location.account) {
            this.chooseAccount(nextProps.location.account);
        }
    }
    chooseAccount(id) {
        this.setState({
            chosenAccount: id
        });
    }
    render() {
        let accounts = this.props.account.accounts;
        return React.createElement("div", { className: "wrapper" },
            React.createElement("div", { className: "title" }, "Choose a bank account to deposit"),
            React.createElement("div", { className: "bank-list" }, accounts.map(account => React.createElement("div", { onClick: () => this.chooseAccount(account.number), key: account.id, class: "bank" + (this.state.chosenAccount == account.number ? " active" : "") },
                React.createElement("div", { class: "avatar" },
                    React.createElement("img", { class: "bank-avatar", src: "resources/images/banks/" + account.name.toLowerCase() + ".png" })),
                React.createElement("span", null, account.name)))),
            React.createElement("form", { class: "content" },
                React.createElement("div", { class: "form-group" },
                    React.createElement("label", { class: "control-label", htmlFor: "amount" }, "Amount"),
                    React.createElement("div", { class: "input-wrap" },
                        React.createElement("input", { defaultValue: "10000", min: 10000, step: 1000, ref: input => this.amount = input, type: "number", name: "amount", class: "form-control", placeholder: "Enter amount of money to deposit" }))),
                this.props.deposit.error ?
                    React.createElement("div", { class: "form-group" },
                        React.createElement("div", { class: "form-message" },
                            React.createElement("span", { className: "error" }, this.props.deposit.error)))
                    : this.props.deposit.depositing ?
                        React.createElement("div", { class: "form-group" },
                            React.createElement("div", { class: "form-message" },
                                React.createElement("span", { className: "info" }, "Processing...")))
                        : this.props.deposit.deposited ?
                            React.createElement("div", { class: "form-group" },
                                React.createElement("div", { class: "form-message" },
                                    React.createElement("span", { className: "success" }, "Deposit successfully")))
                            : React.createElement("span", null),
                React.createElement("div", { class: "form-group" },
                    React.createElement("div", { class: "input-wrap margin" },
                        React.createElement("button", { onClick: this.onSubmit.bind(this), type: "submit", class: "btn btn-info btn-block btn-update" }, "Deposit")))));
    }
}
function mapStateToProps(state) {
    const { account } = state;
    const { deposit } = state.services;
    return {
        account,
        deposit,
    };
}
exports.default = react_redux_1.connect(mapStateToProps)(Deposit);
