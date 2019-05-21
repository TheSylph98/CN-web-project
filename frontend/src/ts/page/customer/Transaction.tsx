import React = require("react");
import { connect } from "react-redux";
import { transactionActions } from "../../store/action";
import { TransactionType, toMoneyFormat, compare } from "../../utils";
import TransactionSummary from "./TransactionSummary";

class Transaction extends React.Component<{dispatch, transaction, location}, {transaction}> {

	constructor(props) {
		super(props);
		this.state = {
			transaction: null,
		}
	}

	componentWillMount() {
		if (this.props.transaction.notLoad) {
			this.props.dispatch(transactionActions.load());
		}

		let transactions = this.props.transaction.transactions;
		if (this.props.location.details) {
			let details = this.props.location.details
			this.setState({
				transaction: transactions.find(trans => {
					return compare(details.type, trans.type)
						&& details.id == trans.id;
				})
			})
		} else {
			if (transactions.length > 0) {
				this.setState({
					transaction: transactions[0]
				})
			}
		}
	}

	componentWillReceiveProps(nextProps) {

		let transactions = nextProps.transaction.transactions;

		if (nextProps.location.details) {
			let details = nextProps.location.details
			this.setState({
				transaction: transactions.find(trans => {
					return compare(details.type, trans.type)
						&& details.id == trans.id;
				})
			})
		} else {
			if (transactions.length > 0) {
				this.setState({
					transaction: transactions[0]
				})
			}
		}
	}

	onRead(transaction) {
		this.setState({
			transaction: transaction
		})
	}

	getSource(transaction) {
		switch (transaction.type) {
			case TransactionType.DEPOSIT:
				return transaction.account.name;
			case TransactionType.RECEIVE:
				return transaction.sender.username;
			default:
				return "e-wallet";
		}
	}

	getOtherInfoSection(transaction) {
		switch (transaction.type) {
			case TransactionType.TRANSFER:
				return<div>
					<div className="section-title">Other Infomation</div>
					<section>
						<div className="info">
							<label>Receiver</label>
							<span>{transaction.receiver.username}</span>
						</div>
						<div className="info">
							<label>Email</label>
							<span>{transaction.receiver.email}</span>
						</div>
						<div className="info">
							<label>Amount</label>
							<span>{this.getAmount(transaction).slice(1)}</span>
						</div>
						<div className="info">
							<label>Message</label>
							<span>{transaction.message}</span>
						</div>
					</section>
				</div>
			case TransactionType.MOBILE_PAY:
				return <div>
					<div className="section-title">Other Infomation</div>
					<section>
						<div className="info">
							<label>Telecom Company</label>
							<span>{transaction.telecom.name}</span>
						</div>
						<div className="info">
							<label>Cost</label>
							<span>{this.getAmount(transaction).slice(1)}</span>
						</div>
					</section>
				</div>
			case TransactionType.PAY:
				return<div>
					<div className="section-title">Other Infomation</div>
					<section>
						<div className="info">
							<label>Service</label>
							<span>{transaction.bill.type}</span>
						</div>
						<div className="info">
							<label>Code</label>
							<span>{transaction.bill.code}</span>
						</div>
						<div className="info">
							<label>Provider</label>
							<span>{transaction.bill.provider}</span>
						</div>
					</section>
				</div>
			default:
				return <span/>
		}
	}

	getAmount(transaction) {
		if (transaction.type == TransactionType.TRANSFER
			|| transaction.type == TransactionType.PAY
			|| transaction.type == TransactionType.MOBILE_PAY) {
			return "-" + toMoneyFormat(transaction.amount) + "đ";
		}

		return "+" + toMoneyFormat(transaction.amount) + "đ";
	}

	getContent(transaction) {
		if (transaction.type == TransactionType.TRANSFER) {
			return "Transfer to " + transaction.receiver.username;
		}
		if (transaction.type == TransactionType.DEPOSIT) {
			return "Add money to wallet from " + transaction.account.name;
		}
		if (transaction.type == TransactionType.PAY) {
			return "Pay '" + transaction.bill.type + "' bill provided by " + transaction.bill.provider;
		}
		if (transaction.type == TransactionType.RECEIVE) {
			return "Receive money from " + transaction.sender.username;
		}
		return "Buy mobile card from " + transaction.telecom.name;

	}

	render() {
		let transactions = this.props.transaction.transactions;
		let transaction = this.state.transaction;

		return <div className="content-right">
			<h1 className="title">Transaction</h1>
			<TransactionSummary transactions={transactions}/>
			<div className="wrapper trans">
				<div className="sub-wrapper">
					<div className="title">May 2019</div>
					<div className="trans-list">
						{transactions.map((transaction, number) =>
							<div onClick={() => this.onRead(transaction)} 
								key={number}
								className={"trans" + (transaction == this.state.transaction ? " active" : "")}>
								<div className="avatar">
								{transaction.type == TransactionType.TRANSFER ?
									<i className="fa fa-sign-out-alt" style={{color: "#0f7a0b"}}/>
								: transaction.type == TransactionType.DEPOSIT ?
									<i className="fa fa-sign-in-alt" style={{color: "#365382"}}/>
								: transaction.type == TransactionType.RECEIVE ?
									<i className="fa fa-money-bill" style={{color: "#e54837"}}/>
								: transaction.type == TransactionType.PAY ?
									<i className="fa fa-credit-card" style={{color: "#d1c217"}}/> 
								: transaction.type == TransactionType.MOBILE_PAY ?
									<i className="fa fa-mobile-alt" style={{color: "#d1c217"}}/>
								: <i/>
								}
								</div>
								<div className="text">
									<span className="title">{this.getContent(transaction)}</span>
									<span className="time">{transaction.time.toLocaleDateString()}</span>
									<span className="status">Success</span>
									<span className="amount">{this.getAmount(transaction)}</span>
								</div>
							</div>)}
					</div>
				</div>
				{transaction &&
					<div className="sub-wrapper trans-details">
						<div className="title">Transaction Details</div>
						<section>
							<span className="type">{transaction.type}</span>
							<span className="amount">{this.getAmount(transaction)}</span>
							<span className="status">Success</span>
						</section>
						<section>
							<div className="info">
								<label>Source</label>
								<span>{this.getSource(transaction)}</span>
							</div>
							<div className="info">
								<label>Transaction fee</label>
								<span>Free</span>
							</div>
							<div className="info">
								<label>Transaction id</label>
								<span>{transaction.id}</span>
							</div>
							<div className="info">
								<label>Time</label>
								<span>{transaction.time.toLocaleString()}</span>
							</div>
							
						</section>
						{this.getOtherInfoSection(transaction)}
					</div>
				}
			</div>
		</div>
	}
}


function mapStateToProps(state) {
	const { transaction } = state;
	return {
		transaction,
	}
}

export default connect(mapStateToProps)(Transaction);