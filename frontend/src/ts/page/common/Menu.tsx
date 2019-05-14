import React = require("react");
import { Link } from "react-router-dom";

export default class Menu extends React.Component<{},{expandSearch: boolean}> {
	state;
	setState;

	constructor(props) {
		super(props);
		this.state = {
			expandSearch: false,
			fixed: false,
		}
		window.onscroll = this.fixAtTop.bind(this);
	}

	fixAtTop() {
		if (document.body.getBoundingClientRect().top < -90) {
            this.setState({
            	...this.state,
                fixed: true,
            })
        } else {
            this.setState({
            	...this.state,
                fixed: false,
            })
        }
	}

	switchSearch() {
		this.setState({
			...this.state,
			expandSearch: !this.state.expandSearch
		})
	}

	render() {
		return <nav class={"site-navigation navigation" + (this.state.fixed ? " fixed" : "")} id="site-navigation">
	        <div class="container">
	            <div class="site-nav-inner">
	                
	                <a class="logo-mobile" href="index.html">
						<img id="logo-mobile" class="img-responsive" src="resources/images/logo-dark.png" alt=""/>
					</a>
	                
	                <button type="button" class="navbar-toggle" >
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
	                <div class="collapse navbar-collapse navbar-responsive-collapse" style={{maxHeight: "158px"}}>
	                
	                    <ul class="nav navbar-nav">
	                        <li><Link to="/">Home</Link></li>
	                        <li><Link to="/customer">Customer</Link></li>
	                        <li><a href="services.html">Services</a></li>
	                        <li><a href="pricing.html">Guide</a></li>
	                        <li><a href="contact.html">Contact</a></li>
							
							<li class="cart"><a href="shopping-cart.html"><i class="fa fa-shopping-cart"></i></a></li>
							
	                        <li class="search"><button class="fa fa-search" onClick={this.switchSearch.bind(this)}></button></li>
	                       
	                    </ul>
	                    
	                </div>
	            </div>
	        </div>
	        
	        <div class="site-search">
	            <div class={"container" + (this.state.expandSearch ? " open" : "")}>
	                <input type="text" placeholder="type your keyword and hit enter ..."/>
	                <span onClick={this.switchSearch.bind(this)} class="close">×</span>
	            </div>
	        </div>
	      
	    </nav>
	}
}