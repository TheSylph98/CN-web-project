"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const action_1 = require("../../store/action");
class Deposit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenBankId: null,
        };
    }
    onSubmit(e) {
        e.preventDefault();
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
            chosenBankId: id
        });
    }
    render() {
        let accounts = this.props.account.accounts;
        return React.createElement("div", { className: "wrapper" },
            React.createElement("div", { className: "title" }, "Choose a bank account to deposit"),
            React.createElement("div", { className: "bank-list" }, accounts.map(bank => React.createElement("div", { onClick: () => this.chooseAccount(bank.id), id: bank.id, class: "bank" + (this.state.chosenBankId == bank.id ? " active" : "") },
                React.createElement("div", { class: "avatar" },
                    React.createElement("img", { class: "bank-avatar", src: "resources/images/banks/" + bank.name.toLowerCase() + ".png" })),
                React.createElement("span", null, bank.name)))),
            React.createElement("form", { class: "content" },
                React.createElement("div", { class: "form-group" },
                    React.createElement("label", { class: "control-label", htmlFor: "amount" }, "Amount"),
                    React.createElement("div", { class: "input-wrap" },
                        React.createElement("input", { step: 1000, ref: input => this.amount = input, type: "number", name: "amount", class: "form-control", placeholder: "Enter amount of money to deposit" }))),
                React.createElement("div", { class: "form-group" },
                    React.createElement("div", { class: "form-message" }),
                    React.createElement("div", { class: "input-wrap margin" },
                        React.createElement("button", { onClick: this.onSubmit.bind(this), type: "submit", class: "btn btn-info btn-block btn-update" }, "Deposit")))));
    }
}
function mapStateToProps(state) {
    const { account } = state;
    return {
        account
    };
}
exports.default = react_redux_1.connect(mapStateToProps)(Deposit);
