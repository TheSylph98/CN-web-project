import React = require("react");
import { connect } from "react-redux";
import { friendActions, servicesActions } from "../../store/action";

class Transfer extends React.Component<{ dispatch, friend, location, transfer },{ searchList}> {

	amount;
	receiver;
	message;

    componentWillMount() {
        if (this.props.friend.notLoad) {
            this.props.dispatch(friendActions.getFriendList());
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            searchList: []
        }
    }

	onSubmit(e) {
		e.preventDefault();
        this.props.dispatch(servicesActions.transfer({
            amount: this.amount.value,
            email: this.receiver.value,
            message: this.message.value,
        }))
	}

    onFocus() {
        this.setState({
            searchList: this.props.friend.friends
        })
    }

    onChange(e) {
        let value = e.target.value;
        this.setState({
            searchList: this.props.friend.friends.filter(friend => {
                return friend.username.includes(value)
                    || friend.email.includes(value)
                    || (friend.phone && friend.phone.toString().includes(value))
            })
        })
    }

    onBlur() {
        setTimeout(() => {
            this.setState({
                searchList: [],
            })
        }, 300);
    }

    onUpdate(email: string) {
        this.receiver.value = email;
        this.setState({
            searchList: [],
        })
    }

	render() {

		return <div className="wrapper">
			<form class="content" id="edit-account">
                <div class="form-group">
                    <label class="control-label" htmlFor="receiver">Receiver</label>
                    <div class="input-wrap"  >
                        <input 
                            onBlur={this.onBlur.bind(this)}
                            onFocus={this.onFocus.bind(this)} 
                            onChange={this.onChange.bind(this)}
                            ref={input => this.receiver = input } type="text" class="form-control" id="receiver"
                            defaultValue={this.props.location.state && this.props.location.state.email}
                            placeholder="Enter email address of receiver"/>

                        {this.state.searchList.length > 0 && 
                            <div className="friend-list search">
                            
                                <div className="small-text">
                                    Users from favorite list
                                </div>
                                {this.state.searchList.map(friend => 
                                    <div className="friend" key={friend.id} 
                                        onClick={() => {
                                            this.onUpdate(friend.email)
                                        }}>
                                        <div className="avatar">
                                            <i className="fa fa-user"/>
                                        </div>
                                        <div className="text">
                                            <span className="name">{friend.username}</span>
                                            <span className="email">{friend.email}</span>
                                            <span className="phone">{friend.phone}</span>
                                        </div>
                                    </div>)
                                }
                            </div>
                        }
                    </div>
                    
                </div>
                <div class="form-group">
                    <label class="control-label" htmlFor="receiver">Amount</label>
                    <div class="input-wrap">
                        <input step={1000} ref={input => this.amount = input } type="number" name="amount" class="form-control" id="amount" 
                            placeholder="Enter amount of money"/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label" htmlFor="message">Message</label>
                    <div class="input-wrap">
                        <input ref={input => this.message = input } type="text" name="amount" class="form-control" id="message" 
                            placeholder="Message"/>
                    </div>
                </div>
                <div class="form-group">
                	<div class="form-message">
                        {this.props.transfer.transfering ? 
                            "Transfering..." :
                            this.props.transfer.transfered ?
                            "Transfer successfully!" : 
                                this.props.transfer.error ?
                                this.props.transfer.error : ""}
                    </div>
                    <div class="input-wrap margin">
                        <button onClick={this.onSubmit.bind(this)} type="submit" class="btn btn-info btn-block btn-update">Transfer</button>
                    </div>
                </div>
            </form>
		</div>
	}
}

function mapStateToProps(state) {
    const { friend } = state;
    const { transfer } = state.services;
	return {
		friend,
        transfer,
	}
}

export default connect(mapStateToProps)(Transfer);