import React = require("react");
import { mobileActions } from "../../store/action";
import { connect } from "react-redux";
import { toMoneyFormat } from "../../utils";

class MobilePay extends React.Component<{dispatch, mobile }, {chosenTelecomId}> {

	telecom;

	constructor(props) {
		super(props);
		this.state = {
			chosenTelecomId: null,
		}
	}

	componentWillMount() {
		if (this.props.mobile.notLoad) {
			this.props.dispatch(mobileActions.getTelecom());
		}
	}

	chooseTelecom(id: string) {
		this.setState({
			chosenTelecomId: id,
		})
	}

	pay(e) {
		e.preventDefault();
		// this.props.dispatch(accountActions.connectAccount(this.account.value, this.state.chosenBankId));
	}

	render() {
		

		let telecoms = this.props.mobile.telecoms;
		let denominations = [10000, 20000, 30000, 50000, 100000, 200000, 300000, 500000, 1000000];

		return <div class="content-right">
            <div className="wrapper mobile-pay">
				<div className="title">
					Choose a telecom company
				</div>
				<div className="telecom-list">
					{telecoms.map(telecom => 
						<div onClick={() => this.chooseTelecom(telecom.id)} id={telecom.id} class={"telecom" + (this.state.chosenTelecomId == telecom.id ? " active" : "")}> 
							<div class="avatar">
								<img class="telecom-avatar" src={"resources/images/telecoms/" + telecom.name.toLowerCase() + ".png"}/>
							</div>
						</div>)}
				</div>
				<form class="content">
                    <div class="form-group">
                        <label class="control-label no-lh" htmlFor="denomination">
                            Denomination
                        </label>

                        <div class="input-wrap">
                            <div id="denomination" class="denomination">
                            	<fieldset>
                            		<select class="form-control">
                            			<option key={"0"} defaultValue={"0"}>Value</option>
                            			{denominations.map(denomination => 
                                            <option key={denomination} value={denomination.toString()}>
                                            	{toMoneyFormat(denomination)+"đ"}
                                           	</option>)}
                            		</select>
                            	</fieldset>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                    	<div class="form-message">
                        </div>
                        <div class="input-wrap margin">
                            <button onClick={this.pay.bind(this)} type="submit" class="btn btn-info btn-block btn-update">Pay</button>
                        </div>
                    </div>
                </form>
			</div>

		</div>
	}
}

function mapStateToProps(state) {
	const { mobile } = state;
	return {
		mobile,
	}
}

export default connect(mapStateToProps)(MobilePay);