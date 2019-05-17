import React = require("react");
import { bankActions, accountActions } from "../../store/action";
import { connect } from "react-redux";

class BankAccount extends React.Component<{dispatch, banks, loading, account}, {chosenBankId}> {

	account;

	constructor(props) {
		super(props);
		this.state = {
			chosenBankId: null,
		}
	}

	chooseBank(id: string) {
		this.setState({
			chosenBankId: id,
		})
	}

	connect() {
		this.props.dispatch(accountActions.connectAccount(this.account.value, this.state.chosenBankId));
	}

	render() {
		if (!this.props.loading && this.props.banks.length == 0) {
			this.props.dispatch(bankActions.getBank());
		}
		let banks = this.props.banks;
		return <div class="content-right">
            <h1 class="title">Bank Account</h1>
            <div className="wrapper bank-account">
				<div className="title">
					Choose a bank account to connect
				</div>
				<div className="bank-list">
					{banks.map(bank => 
						<div onClick={() => this.chooseBank(bank.id)} id={bank.id} class={"bank" + (this.state.chosenBankId == bank.id ? " active" : "")}> 
							<img class="bank-avatar" src={"resources/images/banks/" + bank.name.toLowerCase() + ".png"}/>
							<span>{bank.name}</span>
						</div>)}
				</div>
				<form class="content" id="edit-account">
                    <div class="form-group">
                        <label class="control-label" htmlFor="account">Account Number </label>
                        <div class="input-wrap">
                            <input ref={input => this.account = input } type="text" name="account" class="form-control" id="account" 
                                placeholder="Account Number"/>
                        </div>
                    </div>
                    <div class="form-group">
                    	<div class="form-message">
                            {this.props.account.connected ? 
                                "Account has been connected!" :
                                    this.props.account.error ?
                                        this.props.account.error : ""
                            }
                        </div>
                        <div class="input-wrap margin">
                            <button onClick={this.connect.bind(this)} type="submit" class="btn btn-info btn-block btn-update">Connect</button>
                        </div>
                    </div>
                </form>
			</div>

		</div>
	}
}

function mapStateToProps(state) {
	const { banks, loading } = state.bank;
	const { account } = state;
	return {
		banks,
		loading,
		account,
	}
}

export default connect(mapStateToProps)(BankAccount);