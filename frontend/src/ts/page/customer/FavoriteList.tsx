import React = require("react");
import { connect } from "react-redux";
import { friendActions } from "../../store/action";
import { Link } from "react-router-dom";

class FavoriteList extends React.Component<{dispatch, friend}, {}> {

	componentWillMount() {
		if (this.props.friend.notLoad) {
			this.props.dispatch(friendActions.getFriendList());
		}
	}

	render() {

		let friends = this.props.friend.friends;

		return <div class="content-right">
            <h1 class="title">Favorite List</h1>
            <div className="wrapper bank-account">
            	<div className="friend-list">
	            	{friends.map(friend => 
	            		<div className="friend" key={friend.id}>
	            			<div className="avatar">
	            				<i className="fa fa-user"/>
	            			</div>
	            			<div className="text">
	            				<span className="name">{friend.username}</span>
	            				<span className="email">{friend.email}</span>
	            				<span className="phone">{friend.phone}</span>
	            			</div>
	            			<Link to={{pathname: "/customer/services/transfer", state: {email: friend.email}}}>
	            				<button>Transfer</button>
	            			</Link>
	            		</div>)}
	            </div>
            </div>
        </div>
	}
}

function mapStateToProps(state) {
	const { friend } = state;
	return {
		friend
	}
}

export default connect(mapStateToProps)(FavoriteList); 