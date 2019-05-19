import React = require("react");
import { connect } from "react-redux";
import { notificationActions } from "../../store/action";

class Notification extends React.Component<{dispatch, notification}, {}> {
	componentWillMount() {
		if (this.props.notification.notLoad) {
			this.props.dispatch(notificationActions.load());
		}
	}

	render() {
		return <div className="content-right">
			<h1 className="title">Notification</h1>
			<div className="wrapper">
				{this.props.notification.notifications.length == 0 ? 
					<div className="small-text">
						{this.props.notification.loading ? 
							"Loading notifications..." :
							"You do not have any notifications"
						}
					</div>
				:
					<div className="noti-list">
						{this.props.notification.notifications.map(notification =>
							<div className={"noti" + (notification.read ? " read" : "")}>
								<div className="avatar">
									<i className="fa fa-sign-in-alt"/>
								</div>
								<div className="text">
									<span className="title">{notification.title}</span>
									<span className="content">{notification.content}</span>
									<span className="time">{notification.time}</span>
								</div>
							</div>)}
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