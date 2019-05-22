import React = require("react");
import { Link } from "react-router-dom";

export default class Menu extends React.Component<{},{fixed, expandSearch, expandMenu}> {

	constructor(props) {
		super(props);
		this.state = {
			expandSearch: false,
			fixed: false,
			expandMenu: false
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

	collapse() {
		this.setState({
			...this.state,
			expandMenu: !this.state.expandMenu,
		})
	}

	render() {
		return <nav class={"site-navigation navigation" + (this.state.fixed ? " fixed" : "")} id="site-navigation">
	        <div class="container">
	            <div class="site-nav-inner">
	                
	                <a class="logo-mobile" href="index.html">
						<div id="logo" class="img-responsive">
                            <span>&euro;</span>
                            Wallet
                        </div>
					</a>
	                
	                <button type="button" class="navbar-toggle" onClick={this.collapse.bind(this)}>
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
	                <div class={"collapse navbar-collapse navbar-responsive-collapse" + 
	            		(this.state.expandMenu ? " in" : "")}>
	                
	                    <ul class="nav navbar-nav">
	                        <li><Link to="/">Home</Link></li>
	                        <li><Link to="/customer">Customer</Link></li>
	                        <li><Link to="/customer/services">Services</Link></li>
	                        <li><Link to="/#guide">Guide</Link></li>
	                        <li><Link to="/contact">Contact</Link></li>
							
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