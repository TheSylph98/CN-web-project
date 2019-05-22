import React = require("react");
import { Link } from "react-router-dom";


export default class Guide extends React.Component<{},{step}> {
	constructor(props) {
		super(props);
		this.state = {
			step: 1,
		}
	}

	onClick(index) {
		this.setState({
			step: index,
		})
	}

	render() {
		return <section className="guide" id="guide">
			<div className="text text-center">
				<div className="title">Guide</div>
				<div className="subtitle">four easy steps to become our customer and enjoy useful services</div>
			</div>
			<div className="guide-content container">
				<div className="col-12 col-lg-6 guide-logo">
					<img className="img-responsive" src="resources/images/guide.png" alt="Guide"/>
				</div>	
				<div class="col-12 col-lg-6 order-1 order-lg-2">
					<ol class="process list-unstyled manual-process d-block" childid="37752" id="hd-sub-ctn-37752">
						<li onClick={() => this.onClick(1)}
							class={"process_item" + (this.state.step == 1 ? " active" : "")}>
							<div class="process__number">
								<span>1</span>
							</div>
							<div class="process__body">
								<h4 class="process__body-title">Register an e-wallet</h4>
								<div class="process__body-content">
									<p>
										<span style={{ fontSize: "14px"}}>
											Create a new e-wallet with your email account										
										</span>
									</p>
									<p>
										<span style={{ fontSize: "14px"}}>
											Update your phone number to have a better experience
										</span>
									</p>
								</div>
							</div>
						</li>
						<li onClick={() => this.onClick(2)}
							class={"process_item" + (this.state.step == 2 ? " active" : "")}>
							<div class="process__number">
								<span>2</span>
							</div>
							<div class="process__body">
								<h4 class="process__body-title">Connect to your bank account</h4>
									<div class="process__body-content">
										<p>
											<span style={{ fontSize: "14px"}}>
												Select your bank and enter your account number to start making transaction
											</span>
										</p>
										<p>
											<span style={{ fontSize: "14px"}}>
												<em>Note:&nbsp;</em>
											</span>
											<em>Your account must be registered in a bank supported by us</em>
										</p>
									</div>
							</div>
						</li>
						<li onClick={() => this.onClick(3)}
							class={"process_item" + (this.state.step == 3 ? " active" : "")}>
							<div class="process__number">
								<span>3</span>
							</div>
							<div class="process__body">
								<h4 class="process__body-title">Withdraw money from bank account to wallet</h4>
								<div class="process__body-content">
									<p>
										<span style={{ fontSize: "14px"}}>
											Your wallet is empty at first
										</span>
									</p>
									<p>
										<span style={{ fontSize: "14px"}}>
											You can send money from bank account to wallet without any fee
										</span>
									</p>
								</div>
							</div>
						</li>
						<li onClick={() => this.onClick(4)}
							class={"process_item" + (this.state.step == 4 ? " active" : "")}>
							<div class="process__number">
								<span>4</span>
							</div>
							<div class="process__body">
								<h4 class="process__body-title">Use our services</h4>
								<div class="process__body-content">
									<p>	
										<span style={{ fontSize: "14px"}}>
											We provide numerous kinds of service
										</span>
									</p>
									<p>	
										<span style={{ fontSize: "14px"}}>
											<Link to="/customer/services/transfer">Transfer to other wallets</Link>
											<br/>
											<Link to="/customer/services/pay">Pay your bills</Link>
											<br/>
											<Link to="/customer/services/mobile">Buy mobile cards</Link>
										</span>
									</p>
								</div>
							</div>
						</li>
					</ol>
				</div>
			</div>
		</section>
	}
}