import React = require("react");
import { TransactionType, toMoneyFormat } from "../../utils";

export default class TransactionSummary extends React.Component<{transactions},{showIncome}> {

	constructor (props) {
		super(props);
		this.state = {
			showIncome: false,
		};
	}

	show(income) {
		this.setState({
			showIncome: income,
		})
	}

	getTotalOfType(types) {
		let total = this.props.transactions.filter(transaction => {
			return types.includes(transaction.type);
		}).reduce((result, transaction) => result + transaction.amount, 0);
		return toMoneyFormat(total) + "đ";
	}

	render() {
		return <div className="wrapper trans-summary">
			<div className="summary">
				<div onClick={() => this.show(false)} 
					className={"title" + (this.state.showIncome ? "" : " active")} >
					<h3>Total Expenditures</h3>
					<span>{this.getTotalOfType([
							TransactionType.PAY,
							TransactionType.MOBILE_PAY,
							TransactionType.TRANSFER,
						])}
					</span>
				</div>
				<div onClick={() => this.show(true)} 
					className={"title" + (this.state.showIncome ? " active" : "")}>
					<h3>Total Income</h3>
					<span>{this.getTotalOfType([
							TransactionType.RECEIVE,
							TransactionType.DEPOSIT,
						])}
					</span>
				</div>
			</div>
			{this.state.showIncome ?
				<ul className="details">
					<li className="receive">
						<h3>Receive</h3>
						<span>{this.getTotalOfType([
								TransactionType.RECEIVE
							])}
						</span>
					</li>
					<li className="deposit">
						<h3>Deposit</h3>
						<span>{this.getTotalOfType([
								TransactionType.DEPOSIT
							])}
						</span>
					</li>
				</ul> 
				:
				<ul className="details">
					<li className="transfer">
						<h3>Transfer</h3>
						<span>{this.getTotalOfType([
								TransactionType.TRANSFER
							])}
						</span>
					</li>
					<li className="mobile-pay">
						<h3>Mobile pay</h3>
						<span>{this.getTotalOfType([
								TransactionType.MOBILE_PAY
							])}
						</span>
					</li>
					<li className="pay">
						<h3>Other pays</h3>
						<span>{this.getTotalOfType([
								TransactionType.PAY
							])}
						</span>
					</li>
				</ul>
			}
		</div>
	}
}