import React = require("react");
import { billActions, servicesActions } from "../../store/action";
import { connect } from "react-redux";
import { toMoneyFormat } from "../../utils";

class PayBill extends React.Component<{dispatch, bill, pay }, {}> {

	type;
	code;

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		if (this.props.bill.type.notLoad) {
			this.props.dispatch(billActions.getBillType());
		}
	}

	loadBill(e) {
		e.preventDefault();
		this.props.dispatch(billActions.getBill(this.code.value, this.type.value));
	}

	pay(e) {
		e.preventDefault();
		this.props.dispatch(servicesActions.payBill(this.code.value, this.type.value));
	}

	render() {

		let types = this.props.bill.type.types;
		let bill = this.props.bill.bill.bill;

		return <div>
            <div className="wrapper pay-bill">
				<form class="content">
					<div class="form-group ">
						<label class="control-label" htmlFor="type">Bill type </label>
						<div class="input-wrap">	
	                    	<fieldset id="type">
	                    		<select class="birth-day form-control" ref={input => this.type = input}>
	                    			<option key="type" value={undefined}>Select a type</option>
	                    			{types.map(type => 
	                                    <option key={type.id} value={type.id}>{type.name}</option>)}
	                    		</select>
	                    	</fieldset>
	                    </div>
	                </div>
                    <div class="form-group">
                        <label class="control-label" htmlFor="code">Bill code</label>
                        <div class="input-wrap">
                            <input ref={input => this.code = input } type="text" class="form-control" id="code" 
                                placeholder="Enter bill code"/>
                            <button  onClick={this.loadBill.bind(this)}>Load bill</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" htmlFor="provider">Provider </label>
                        <div class="input-wrap">
                            <input disabled={true} type="text" class="form-control" id="provider" 
                            value={bill && bill.provider}/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" htmlFor="cost">Cost</label>
                        <div class="input-wrap">
                            <input disabled={true} type="text" class="form-control" id="cost" 
                            value={bill && toMoneyFormat(bill.amount) + "đ"}/>
                        </div>
                    </div>
                    {(this.props.bill.bill.error || this.props.pay.error) ?
		                <div class="form-group">
		                    <div class="form-message">
		                        <span className="error">
		                        	{this.props.bill.bill.error ? this.props.bill.bill.error :
		                         		this.props.pay.error}
		                         </span>
		                    </div>
		                </div> 
		                : (this.props.bill.bill.loading || this.props.pay.paying) ?
		                    <div class="form-group">
		                        <div class="form-message">
		                            <span className="info">Processing...</span>
		                        </div>
		                    </div> 
		                    : this.props.pay.payed ?
		                        <div class="form-group">
		                            <div class="form-message">
		                                <span className="success">Pay bill successfully</span>
		                            </div>
		                        </div> 
		                        : <span/>
		            }
                    <div class="form-group">
                        <div class="input-wrap margin">
                            <button disabled={!bill} onClick={this.pay.bind(this)} type="submit" class="btn btn-info btn-block btn-update">Pay</button>
                        </div>
                    </div>
                    
                </form>
			</div>

		</div>
	}
}

function mapStateToProps(state) {
	const { bill } = state;
	const { pay } = state.services;
	return {
		bill,
		pay,
	}
}

export default connect(mapStateToProps)(PayBill);