"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const action_1 = require("../../store/action");
const react_redux_1 = require("react-redux");
const utils_1 = require("../../utils");
class PayBill extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        if (this.props.bill.type.notLoad) {
            this.props.dispatch(action_1.billActions.getBillType());
        }
    }
    loadBill(e) {
        e.preventDefault();
        this.props.dispatch(action_1.billActions.getBill(this.code.value, this.type.value));
    }
    pay(e) {
        e.preventDefault();
        this.props.dispatch(action_1.servicesActions.payBill(this.code.value, this.type.value));
    }
    render() {
        let types = this.props.bill.type.types;
        let bill = this.props.bill.bill.bill;
        return React.createElement("div", { class: "content-right" },
            React.createElement("div", { className: "wrapper pay-bill" },
                React.createElement("form", { class: "content" },
                    React.createElement("div", { class: "form-group " },
                        React.createElement("label", { class: "control-label", htmlFor: "type" }, "Bill type "),
                        React.createElement("div", { class: "input-wrap" },
                            React.createElement("fieldset", { id: "type" },
                                React.createElement("select", { class: "birth-day form-control", ref: input => this.type = input },
                                    React.createElement("option", { key: "type", value: undefined }, "Select a type"),
                                    types.map(type => React.createElement("option", { key: type.id, value: type.id }, type.name)))))),
                    React.createElement("div", { class: "form-group" },
                        React.createElement("label", { class: "control-label", htmlFor: "code" }, "Bill code"),
                        React.createElement("div", { class: "input-wrap" },
                            React.createElement("input", { ref: input => this.code = input, type: "text", class: "form-control", id: "code", placeholder: "Enter bill code" }),
                            React.createElement("button", { onClick: this.loadBill.bind(this) }, "Load bill"))),
                    React.createElement("div", { class: "form-group" },
                        React.createElement("label", { class: "control-label", htmlFor: "provider" }, "Provider "),
                        React.createElement("div", { class: "input-wrap" },
                            React.createElement("input", { disabled: true, type: "text", class: "form-control", id: "provider", value: bill && bill.provider }))),
                    React.createElement("div", { class: "form-group" },
                        React.createElement("label", { class: "control-label", htmlFor: "cost" }, "Cost"),
                        React.createElement("div", { class: "input-wrap" },
                            React.createElement("input", { disabled: true, type: "text", class: "form-control", id: "cost", value: bill && utils_1.toMoneyFormat(bill.amount) + "đ" }))),
                    (this.props.bill.bill.error || this.props.pay.error) ?
                        React.createElement("div", { class: "form-group" },
                            React.createElement("div", { class: "form-message" },
                                React.createElement("span", { className: "error" }, this.props.bill.bill.error ? this.props.bill.bill.error :
                                    this.props.pay.error)))
                        : (this.props.bill.bill.loading || this.props.pay.paying) ?
                            React.createElement("div", { class: "form-group" },
                                React.createElement("div", { class: "form-message" },
                                    React.createElement("span", { className: "info" }, "Processing...")))
                            : this.props.pay.payed ?
                                React.createElement("div", { class: "form-group" },
                                    React.createElement("div", { class: "form-message" },
                                        React.createElement("span", { className: "success" }, "Pay bill successfully")))
                                : React.createElement("span", null),
                    React.createElement("div", { class: "form-group" },
                        React.createElement("div", { class: "input-wrap margin" },
                            React.createElement("button", { disabled: !bill, onClick: this.pay.bind(this), type: "submit", class: "btn btn-info btn-block btn-update" }, "Pay"))))));
    }
}
function mapStateToProps(state) {
    const { bill } = state;
    const { pay } = state.services;
    return {
        bill,
        pay,
    };
}
exports.default = react_redux_1.connect(mapStateToProps)(PayBill);
