import React = require("react");
import { connect } from "react-redux";
import { notificationActions } from "../../store/action";
import { NotificationType } from "../../utils";4
import { Link } from "react-router-dom";

class Notification extends React.Component<{dispatch, notification}, {}> {
	componentWillMount() {
		if (this.props.notification.notLoad) {
			this.props.dispatch(notificationActions.load());
		}
	}

	onRead(id) {
		this.props.dispatch(notificationActions.read(id));
	}

	render() {

		let notifications = this.props.notification.notifications;
		let numOfUnread = notifications.filter(noti => noti.read == false).length;

		return <div>
			<h1 className="title">Notification</h1>
			<div className="wrapper">
				{notifications.length == 0 ? 
					<div className="small-text">
						{this.props.notification.loading ? 
							"Loading notifications..." :
							"You do not have any notifications"
						}
					</div>
				:
					<div>
						<div className="small-text">{"You have " + numOfUnread + " unread notification(s)"}</div>
						<div className="noti-list">
							{notifications.map(notification =>
								<div key={notification.id}
									onClick={() => this.onRead(notification.id)}>
									<Link to={{pathname: "/customer/transaction", details: {id: notification.transactionId, type: notification.type }}}
										className={"noti" + (notification.read ? " read" : "")}>
										<div className="avatar">
										{notification.type == NotificationType.TRANSFER ?
											<i className="fa fa-sign-out-alt" style={{color: "green"}}/>
										: notification.type == NotificationType.DEPOSIT ?
											<i className="fa fa-sign-in-alt" style={{color: "blue"}}/>
										: notification.type == NotificationType.RECEIVE ?
											<i className="fa fa-money-bill" style={{color: "red"}}/>
										: notification.type == NotificationType.PAY ?
											<i className="fa fa-credit-card" style={{color: "yellow"}}/> 
										: notification.type == NotificationType.MOBILE_PAY ?
											<i className="fa fa-mobile-alt" style={{color: "#fd961a"}}/>
										: <i/>
										}
										</div>
										<div className="text">
											<span className="title">{notification.title}</span>
											<span className="content">{notification.content}</span>
											<span className="time">{notification.time.toLocaleString()}</span>
										</div>
									</Link>
								</div>
								)}
						</div>
					</div>
				}
			</div>
		</div>
	}
}

function mapStateToProps(state) {
	const { notification } = state;
	return {
		notification
	}
}

export default connect(mapStateToProps)(Notification);