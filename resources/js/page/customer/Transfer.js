"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
class Transfer extends React.Component {
    onSubmit(e) {
        e.preventDefault();
    }
    render() {
        return React.createElement("div", { className: "wrapper" },
            React.createElement("form", { class: "content", id: "edit-account" },
                React.createElement("div", { class: "form-group" },
                    React.createElement("label", { class: "control-label", htmlFor: "receiver" }, "Receiver"),
                    React.createElement("div", { class: "input-wrap" },
                        React.createElement("input", { ref: input => this.receiver = input, type: "text", name: "receiver", class: "form-control", id: "receiver", placeholder: "Enter email address of receiver" }))),
                React.createElement("div", { class: "form-group" },
                    React.createElement("label", { class: "control-label", htmlFor: "receiver" }, "Amount"),
                    React.createElement("div", { class: "input-wrap" },
                        React.createElement("input", { ref: input => this.amount = input, type: "number", name: "amount", class: "form-control", id: "amount", placeholder: "Enter amount of money" }))),
                React.createElement("div", { class: "form-group" },
                    React.createElement("label", { class: "control-label", htmlFor: "message" }, "Message"),
                    React.createElement("div", { class: "input-wrap" },
                        React.createElement("input", { ref: input => this.message = input, type: "text", name: "amount", class: "form-control", id: "message", placeholder: "Message" }))),
                React.createElement("div", { class: "form-group" },
                    React.createElement("div", { class: "form-message" }),
                    React.createElement("div", { class: "input-wrap margin" },
                        React.createElement("button", { onClick: this.onSubmit.bind(this), type: "submit", class: "btn btn-info btn-block btn-update" }, "Transfer")))));
    }
}
function mapStateToProps(state) {
    return {
        state
    };
}
exports.default = react_redux_1.connect(mapStateToProps)(Transfer);
