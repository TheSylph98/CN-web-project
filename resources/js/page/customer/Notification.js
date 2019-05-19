"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const action_1 = require("../../store/action");
class Notification extends React.Component {
    componentWillMount() {
        if (this.props.notification.notLoad) {
            this.props.dispatch(action_1.notificationActions.load());
        }
    }
    render() {
        return React.createElement("div", { className: "content-right" },
            React.createElement("h1", { className: "title" }, "Notification"),
            React.createElement("div", { className: "wrapper" }, this.props.notification.notifications.length == 0 ?
                React.createElement("div", { className: "small-text" }, this.props.notification.loading ?
                    "Loading notifications..." :
                    "You do not have any notifications")
                :
                    React.createElement("div", { className: "noti-list" }, this.props.notification.notifications.map(notification => React.createElement("div", { className: "noti" + (notification.read ? " read" : "") },
                        React.createElement("div", { className: "avatar" },
                            React.createElement("i", { className: "fa fa-sign-in-alt" })),
                        React.createElement("div", { className: "text" },
                            React.createElement("span", { className: "title" }, notification.title),
                            React.createElement("span", { className: "content" }, notification.content),
                            React.createElement("span", { className: "time" }, notification.time)))))));
    }
}
function mapStateToProps(state) {
    const { notification } = state;
    return {
        notification
    };
}
exports.default = react_redux_1.connect(mapStateToProps)(Notification);
