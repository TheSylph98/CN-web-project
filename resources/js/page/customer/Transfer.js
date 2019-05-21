"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const action_1 = require("../../store/action");
class Transfer extends React.Component {
    componentWillMount() {
        if (this.props.friend.notLoad) {
            this.props.dispatch(action_1.friendActions.getFriendList());
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            searchList: []
        };
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.dispatch(action_1.servicesActions.transfer({
            amount: this.amount.value,
            email: this.receiver.value,
            message: this.message.value,
        }));
    }
    onFocus() {
        this.setState({
            searchList: this.props.friend.friends
        });
    }
    onChange(e) {
        let value = e.target.value;
        this.setState({
            searchList: this.props.friend.friends.filter(friend => {
                return friend.username.includes(value)
                    || friend.email.includes(value)
                    || (friend.phone && friend.phone.toString().includes(value));
            })
        });
    }
    onBlur() {
        setTimeout(() => {
            this.setState({
                searchList: [],
            });
        }, 300);
    }
    onUpdate(email) {
        this.receiver.value = email;
        this.setState({
            searchList: [],
        });
    }
    render() {
        return React.createElement("div", { className: "wrapper" },
            React.createElement("form", { class: "content", id: "edit-account" },
                React.createElement("div", { class: "form-group" },
                    React.createElement("label", { class: "control-label", htmlFor: "receiver" }, "Receiver"),
                    React.createElement("div", { class: "input-wrap" },
                        React.createElement("input", { onBlur: this.onBlur.bind(this), onFocus: this.onFocus.bind(this), onChange: this.onChange.bind(this), ref: input => this.receiver = input, type: "text", class: "form-control", id: "receiver", defaultValue: this.props.location.state && this.props.location.state.email, placeholder: "Enter email address of receiver" }),
                        this.state.searchList.length > 0 &&
                            React.createElement("div", { className: "friend-list search" },
                                React.createElement("div", { className: "small-text" }, "Users from favorite list"),
                                this.state.searchList.map(friend => React.createElement("div", { className: "friend", key: friend.id, onClick: () => {
                                        this.onUpdate(friend.email);
                                    } },
                                    React.createElement("div", { className: "avatar" },
                                        React.createElement("i", { className: "fa fa-user" })),
                                    React.createElement("div", { className: "text" },
                                        React.createElement("span", { className: "name" }, friend.username),
                                        React.createElement("span", { className: "email" }, friend.email),
                                        React.createElement("span", { className: "phone" }, friend.phone))))))),
                React.createElement("div", { class: "form-group" },
                    React.createElement("label", { class: "control-label", htmlFor: "receiver" }, "Amount"),
                    React.createElement("div", { class: "input-wrap" },
                        React.createElement("input", { defaultValue: "10000", min: 10000, step: 1000, ref: input => this.amount = input, type: "number", name: "amount", class: "form-control", id: "amount", placeholder: "Enter amount of money" }))),
                React.createElement("div", { class: "form-group" },
                    React.createElement("label", { class: "control-label", htmlFor: "message" }, "Message"),
                    React.createElement("div", { class: "input-wrap" },
                        React.createElement("input", { ref: input => this.message = input, type: "text", name: "amount", class: "form-control", id: "message", placeholder: "Message" }))),
                this.props.transfer.error ?
                    React.createElement("div", { class: "form-group" },
                        React.createElement("div", { class: "form-message" },
                            React.createElement("span", { className: "error" }, this.props.transfer.error)))
                    : this.props.transfer.transfering ?
                        React.createElement("div", { class: "form-group" },
                            React.createElement("div", { class: "form-message" },
                                React.createElement("span", { className: "info" }, "Transfering...")))
                        : this.props.transfer.transfered ?
                            React.createElement("div", { class: "form-group" },
                                React.createElement("div", { class: "form-message" },
                                    React.createElement("span", { className: "success" }, "Transfer successfully")))
                            : React.createElement("span", null),
                React.createElement("div", { class: "form-group" },
                    React.createElement("div", { class: "input-wrap margin" },
                        React.createElement("button", { onClick: this.onSubmit.bind(this), type: "submit", class: "btn btn-info btn-block btn-update" }, "Transfer")))));
    }
}
function mapStateToProps(state) {
    const { friend } = state;
    const { transfer } = state.services;
    return {
        friend,
        transfer,
    };
}
exports.default = react_redux_1.connect(mapStateToProps)(Transfer);
