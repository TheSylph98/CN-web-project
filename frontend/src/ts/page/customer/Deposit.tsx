import React = require("react");
import { connect } from "react-redux";
import { accountActions, servicesActions } from "../../store/action";

class Deposit extends React.Component<{account, dispatch, location, deposit},{chosenAccount}> {

    amount;

    constructor(props) {
        super(props);
        this.state = {
            chosenAccount: null,
        }
    }

	onSubmit(e) {
		e.preventDefault();
        this.props.dispatch(servicesActions.deposit(this.state.chosenAccount, this.amount.value));
	}

    componentWillMount() {
        if (this.props.account.notLoad) {
            this.props.dispatch(accountActions.getConnectedAccount());
        }
        if (this.props.location.account) {
            this.chooseAccount(this.props.location.account);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.account) {
            this.chooseAccount(nextProps.location.account);
        }
    }

    chooseAccount(id: string) {
        this.setState({
            chosenAccount: id
        })
    }

	render() {

        let accounts = this.props.account.accounts;

		return <div className="wrapper">
			<div className="title">
                Choose a bank account to deposit
            </div>
            <div className="bank-list">
                {accounts.map(account => 
                     <div onClick={() => this.chooseAccount(account.number)} key={account.id} class={"bank" + (this.state.chosenAccount == account.number ? " active" : "")}> 
                        <div class="avatar">
                            <img class="bank-avatar" src={"resources/images/banks/" + account.name.toLowerCase() + ".png"}/>
                        </div>
                        <span>{account.name}</span>
                    </div>
                )}
            </div>
            <form class="content">
                <div class="form-group">
                    <label class="control-label" htmlFor="amount">Amount</label>
                    <div class="input-wrap">
                        <input defaultValue={"10000"} min={10000} step={1000} ref={input => this.amount = input } type="number" name="amount" class="form-control" 
                            placeholder="Enter amount of money to deposit"/>
                    </div>
                </div>
                {this.props.deposit.error ?
                    <div class="form-group">
                        <div class="form-message">
                            <span className="error">{this.props.deposit.error}</span>
                        </div>
                    </div> 
                    : this.props.deposit.depositing ?
                        <div class="form-group">
                            <div class="form-message">
                                <span className="info">Processing...</span>
                            </div>
                        </div> 
                        : this.props.deposit.deposited ?
                            <div class="form-group">
                                <div class="form-message">
                                    <span className="success">Deposit successfully</span>
                                </div>
                            </div> 
                            : <span/>
                }
                <div class="form-group">
                    <div class="input-wrap margin">
                        <button onClick={this.onSubmit.bind(this)} type="submit" class="btn btn-info btn-block btn-update">Deposit</button>
                    </div>
                </div>
            </form>
		</div>
	}
}

function mapStateToProps(state) {
    const { account } = state;
    const { deposit } = state.services;
	return {
		account,
        deposit,
	}
}

export default connect(mapStateToProps)(Deposit);