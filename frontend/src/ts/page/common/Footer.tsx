import React = require("react");
import { Link } from "react-router-dom";

export default class Footer extends React.Component<{},{}> {
	render() {
		return <footer class="footer" id="contact">
            <div class="top-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4 col-md-2">
                            <h4>Our Company</h4>
                            <div class="menu">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/customer">Customer</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                    <li><Link to="/guide">Guide</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-4 col-md-2">
                            <h4>Our services</h4>
                            <div class="menu">
                                <ul>
                                    <li><Link to="/customer/services/transfer">Transfer</Link></li>
                                    <li><Link to="/customer/services/deposit">Deposit</Link></li>
                                    <li><Link to="/customer/services/pay">Pay Bill</Link></li>
                                    <li><Link to="/customer/services/mobile">Mobile Pay</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-4 col-md-3">
                            <h4>Contact Us </h4>
                            <div class="contacts">
                                <div>
                                    <span>thanhtung29497@gmail.com</span>
                                </div>
                                <div>
                                    <span>012345678910</span>
                                </div>
                                <div>
                                    <span>Hanoi, Vietnam</span>
                                </div>
                                <div>
                                    <span>Mon-Sat 08am ⇾ 05pm</span>
                                </div>
                            </div>
                            <div class="social-footer">
                                <ul>
                                    <li><a href="https://fb.com/thanhtung29497" target="_blank"><i class="fab fa-facebook"></i></a></li>
                                    <li><a href="https://twitter.com/ecommer38342799" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="https://www.youtube.com/channel/UC7PbNnYZjgNfs7if36syXpQ" target="_blank"><i class="fab fa-youtube"></i></a></li>
                                    <li><a href="https://github.com/thanhtung29497" target="_blank"><i class="fab fa-github" ></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-5">
							<div class="facts-footer">
								<div>
									<h5>13</h5>
									<span>Supported bank</span>
								</div>
								<div>
									<h5>5</h5>
									<span>Supported telecom company</span>
								</div>
								<div>
									<h5>100K</h5>
									<span>active accounts</span>
								</div>
							</div>
							<hr/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <p class="text-center">Copyright © 2019 E-Wallet All Rights Reserved | Created with Love by <a href="https://github.com/thanhtung29497" target="_blank">Tung</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
	}
}