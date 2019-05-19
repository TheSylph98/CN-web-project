"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const action_1 = require("../../store/action");
const react_router_dom_1 = require("react-router-dom");
class FavoriteList extends React.Component {
    componentWillMount() {
        if (this.props.friend.notLoad) {
            this.props.dispatch(action_1.friendActions.getFriendList());
        }
    }
    render() {
        let friends = this.props.friend.friends;
        return React.createElement("div", { class: "content-right" },
            React.createElement("h1", { class: "title" }, "Favorite List"),
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
