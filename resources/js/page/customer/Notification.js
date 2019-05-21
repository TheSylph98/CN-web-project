"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const action_1 = require("../../store/action");
const utils_1 = require("../../utils");
4;
const react_router_dom_1 = require("react-router-dom");
class Notification extends React.Component {
    componentWillMount() {
        if (this.props.notification.notLoad) {
            this.props.dispatch(action_1.notificationActions.load());
        }
    }
    onRead(id) {
        this.props.dispatch(action_1.notificationActions.read(id));
    }
    render() {
        let notifications = this.props.notification.notifications;
        let numOfUnread = notifications.filter(noti => noti.read == false).length;
        return React.createElement("div", { className: "content-right" },
            React.createElement("h1", { className: "title" }, "Notification"),
            React.createElement("div", { className: "wrapper" }, notifications.length == 0 ?
                React.createElement("div", { className: "small-text" }, this.props.notification.loading ?
                    "Loading notifications..." :
                    "You do not have any notifications")
                :
                    React.createElement("div", null,
                        React.createElement("div", { className: "small-text" }, "You have " + numOfUnread + " unread notification(s)"),
                        React.createElement("div", { className: "noti-list" }, notifications.map(notification => React.createElement("div", { key: notification.id, onClick: () => this.onRead(notification.id) },
                            React.createElement(react_router_dom_1.Link, { to: { pathname: "/customer/transaction", details: { id: notification.transactionId, type: notification.type } }, className: "noti" + (notification.read ? " read" : "") },
                                React.createElement("div", { className: "avatar" }, notification.type == utils_1.NotificationType.TRANSFER ?
                                    React.createElement("i", { className: "fa fa-sign-out-alt", style: { color: "green" } })
                                    : notification.type == utils_1.NotificationType.DEPOSIT ?
                                        React.createElement("i", { className: "fa fa-sign-in-alt", style: { color: "blue" } })
                                        : notification.type == utils_1.NotificationType.RECEIVE ?
                                            React.createElement("i", { className: "fa fa-money-bill", style: { color: "red" } })
                                            : notification.type == utils_1.NotificationType.PAY ?
                                                React.createElement("i", { className: "fa fa-credit-card", style: { color: "yellow" } })
                                                : notification.type == utils_1.NotificationType.MOBILE_PAY ?
                                                    React.createElement("i", { className: "fa fa-mobile-alt", style: { color: "#fd961a" } })
                                                    : React.createElement("i", null)),
                                React.createElement("div", { className: "text" },
                                    React.createElement("span", { className: "title" }, notification.title),
                                    React.createElement("span", { className: "content" }, notification.content),
                                    React.createElement("span", { className: "time" }, notification.time.toLocaleString())))))))));
    }
}
function mapStateToProps(state) {
    const { notification } = state;
    return {
        notification
    };
}
exports.default = react_redux_1.connect(mapStateToProps)(Notification);
