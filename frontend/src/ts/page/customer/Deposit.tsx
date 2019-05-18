import React = require("react");
import { connect } from "react-redux";
import { accountActions } from "../../store/action";

class Deposit extends React.Component<{account, dispatch},{chosenBankId}> {

    amount;

    constructor(props) {
        super(props);
        this.state = {
            chosenBankId: null,
        }
    }

	onSubmit(e) {
		e.preventDefault();
	}

    componentWillMount() {
        if (this.props.account.notLoad) {
            this.props.dispatch(accountActions.getConnectedAccount());
        }
    }

    chooseAccount(id: string) {
        this.setState({
            chosenBankId: id
        })
    }

	render() {

        let accounts = this.props.account.accounts;

		return <div className="wrapper">
			<div className="title">
                Choose a bank account to deposit
            </div>
            <div className="bank-list">
                {accounts.map(bank => 
                    <div onClick={() => this.chooseAccount(bank.id)} id={bank.id} class={"bank" + (this.state.chosenBankId == bank.id ? " active" : "")}> 
                        <div class="avatar">
                            <img class="bank-avatar" src={"resources/images/banks/" + bank.name.toLowerCase() + ".png"}/>
                        </div>
                        <span>{bank.name}</span>
                    </div>)}
            </div>
            <form class="content">
                <div class="form-group">
                    <label class="control-label" htmlFor="amount">Amount</label>
                    <div class="input-wrap">
                        <input ref={input => this.amount = input } type="number" name="amount" class="form-control" 
                            placeholder="Enter amount of money to deposit"/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-message">
                    </div>
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
	return {
		account
	}
}

export default connect(mapStateToProps)(Deposit);