import React = require("react");
import { connect } from "react-redux";
import { friendActions } from "../../store/action";
import { Link } from "react-router-dom";

class FavoriteList extends React.Component<{dispatch, friend}, {showInput}> {

	email;

	constructor(props) {
		super(props);
		this.state = {
			showInput: false,
		}
	}

	componentWillMount() {
		if (this.props.friend.notLoad) {
			this.props.dispatch(friendActions.getFriendList());
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
			this.props.dispatch(friendActions.addFriend(this.email.value));
		}
	}

	render() {

		let friends = this.props.friend.friends;

		return <div>
            <h1 class="title">Favorite List</h1>
            <div className="wrapper favorite">	
            	<div className="form-group">
            		<button className="add-user" onClick={this.onShowInput.bind(this)}>Add new user</button>
                    <div class="input-wrap">
                        <input
                        	ref = {input => this.email = input} 
                        	className={"form-control" + (this.state.showInput ? " display" : "")}
                        	onKeyPress={this.onChange.bind(this)}
                        	type="text" id="email" 
                            placeholder="Enter email of user"/>
                    </div>
                </div>
                {this.props.friend.error ? 
                	<div class="form-group">
                    	<div class="form-message">
                    		<span className="error">{this.props.friend.error}</span> 
                    	</div>
                    </div>
                    	: this.props.friend.adding ?
                    	<div class="form-group">
                    		<div class="form-message">
                    			<span className="info">Processing...</span> 
                    		</div>
                    	</div>
                    	: this.props.friend.added ?
                    		<div class="form-group">
                    			<div class="form-message">
                    				<span className="success">Successfully</span> 
                    			</div>
                    		</div>
                    		: <span/>
                }	
            </div>
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