import React = require("react");

export default class Feature extends React.Component<{},{}> {
	render() {
		return <section class="features">
            <div class="container">
                <div class="row features-row">
                    
                    <div class="feature-box col-md-4 col-sm-12">
                        <span class="feature-icon" >
                        	<i class="fas fa-wallet"></i>
                        </span>
                        <div class="feature-box-content">
                            <h3>Add money to your Wallet</h3>
                            <p>Add money you’ve owned via credit card.</p>
                        </div>
                    </div>
                    
                    <div class="feature-box two col-md-4 col-sm-12">
                        <span class="feature-icon">
                        	<i class="fa fa-credit-card"/>
                        </span>
                        <div class="feature-box-content">
                            <h3>Withdraw from Wallet</h3>
                            <p>Tranfer to your bank account without fee</p>
                        </div>
                    </div>
                    
                    <div class="feature-box three col-md-4 col-sm-12">
                        <span class="feature-icon">
                        	<i class="fa fa-shopping-cart"/>
                        </span>
                        <div class="feature-box-content">
                            <h3>Pay bill with Wallet</h3>
                            <p>Enter receiver's address, specify the amount and send.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
	}
}