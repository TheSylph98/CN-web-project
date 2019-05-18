import React = require("react");
import { connect } from "react-redux";

class Transfer extends React.Component<{},{}> {

	amount;
	receiver;
	message;

	onSubmit(e) {
		e.preventDefault();
	}

	render() {
		return <div className="wrapper">
			<form class="content" id="edit-account">
                <div class="form-group">
                    <label class="control-label" htmlFor="receiver">Receiver</label>
                    <div class="input-wrap">
                        <input ref={input => this.receiver = input } type="text" name="receiver" class="form-control" id="receiver" 
                            placeholder="Enter email address of receiver"/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label" htmlFor="receiver">Amount</label>
                    <div class="input-wrap">
                        <input ref={input => this.amount = input } type="number" name="amount" class="form-control" id="amount" 
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
	return {
		state
	}
}

export default connect(mapStateToProps)(Transfer);