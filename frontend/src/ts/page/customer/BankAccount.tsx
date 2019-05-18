import React = require("react");
import { bankActions, accountActions } from "../../store/action";
import { connect } from "react-redux";

class BankAccount extends React.Component<{dispatch, bank, account}, {chosenBankId}> {

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

	connect(e) {
		e.preventDefault();
		this.props.dispatch(accountActions.connectAccount(this.account.value, this.state.chosenBankId));
	}

	render() {
		if (!this.props.bank.loading && this.props.bank.banks.length == 0) {
			this.props.dispatch(bankActions.getBank());

		}
		if (!this.props.account.error && !this.props.account.loading && !this.props.account.loaded && this.props.account.accounts.length == 0) {
			this.props.dispatch(accountActions.getConnectedAccount());
		}

		let banks = this.props.bank.banks;
		let accounts = this.props.account.accounts;

		return <div class="content-right">
            <h1 class="title">Bank Account</h1>
            <div className="wrapper bank-account">
            	<div className="title">
					Connected bank account
				</div>
				{accounts.length == 0 ?
					<div className="small-text">
						You have not connected to any account
					</div> 
						:
					<div className="account-list">
						{accounts.map(account => 
							<div className="account" key={account.id}>
								<div className="avatar">
									<img src={"resources/images/banks/" + account.name.toLowerCase() + ".png"}/>
								</div>
								<div className="text">
									<span>{account.name}</span>
									Free Withdrawing
								</div>
								<button>Withdraw</button>
							</div>
						)}
					</div>
				}
				
				<div className="title">
					Choose a bank account to connect
				</div>
				<div className="bank-list">
					{banks.map(bank => 
						<div onClick={() => this.chooseBank(bank.id)} id={bank.id} class={"bank" + (this.state.chosenBankId == bank.id ? " active" : "")}> 
							<div class="avatar">
								<img class="bank-avatar" src={"resources/images/banks/" + bank.name.toLowerCase() + ".png"}/>
							</div>
							<span>{bank.name}</span>
						</div>)}
				</div>
				<form class="content">
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
	const { bank, account } = state;
	return {
		bank,
		account,
	}
}

export default connect(mapStateToProps)(BankAccount);