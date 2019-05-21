"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const action_1 = require("../../store/action");
const react_router_dom_1 = require("react-router-dom");
class FavoriteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showInput: false,
        };
    }
    componentWillMount() {
        if (this.props.friend.notLoad) {
            this.props.dispatch(action_1.friendActions.getFriendList());
        }
    }
    onShowInput() {
        this.setState({
            showInput: !this.state.showInput,
        });
        if (!this.state.showInput) {
            this.email.focus();
        }
    }
    onChange(e) {
        if (e.charCode == 13) {
            this.props.dispatch(action_1.friendActions.addFriend(this.email.value));
        }
    }
    render() {
        let friends = this.props.friend.friends;
        return React.createElement("div", { class: "content-right" },
            React.createElement("h1", { class: "title" }, "Favorite List"),
            React.createElement("div", { className: "wrapper favorite" },
                React.createElement("div", { className: "form-group" },
                    React.createElement("button", { className: "add-user", onClick: this.onShowInput.bind(this) }, "Add new user"),
                    React.createElement("div", { class: "input-wrap" },
                        React.createElement("input", { ref: input => this.email = input, className: "form-control" + (this.state.showInput ? " display" : ""), onKeyPress: this.onChange.bind(this), type: "text", id: "email", placeholder: "Enter email of user" }))),
                this.props.friend.error ?
                    React.createElement("div", { class: "form-group" },
                        React.createElement("div", { class: "form-message" },
                            React.createElement("span", { className: "error" }, this.props.friend.error)))
                    : this.props.friend.adding ?
                        React.createElement("div", { class: "form-group" },
                            React.createElement("div", { class: "form-message" },
                                React.createElement("span", { className: "info" }, "Processing...")))
                        : this.props.friend.added ?
                            React.createElement("div", { class: "form-group" },
                                React.createElement("div", { class: "form-message" },
                                    React.createElement("span", { className: "success" }, "Successfully")))
                            : React.createElement("span", null)),
            React.createElement("div", { className: "wrapper bank-account" },
                React.createElement("div", { className: "friend-list" }, friends.map(friend => React.createElement("div", { className: "friend", key: friend.id },
                    React.createElement("div", { className: "avatar" },
                        React.createElement("i", { className: "fa fa-user" })),
                    React.createElement("div", { className: "text" },
                        React.createElement("span", { className: "name" }, friend.username),
                        React.createElement("span", { className: "email" }, friend.email),
                        React.createElement("span", { className: "phone" }, friend.phone)),
                    React.createElement(react_router_dom_1.Link, { to: { pathname: "/customer/services/transfer", state: { email: friend.email } } },
                        React.createElement("button", null, "Transfer")))))));
    }
}
function mapStateToProps(state) {
    const { friend } = state;
    return {
        friend
    };
}
exports.default = react_redux_1.connect(mapStateToProps)(FavoriteList);
