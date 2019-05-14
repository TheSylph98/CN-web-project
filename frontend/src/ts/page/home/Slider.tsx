import React = require("react");
import RBCarousel from "react-bootstrap-carousel";

export default class Slider extends React.Component<{}, {}> {
	render() {
		let leftIcon = <span className="fa fa-angle-left" />;
		let rightIcon = <span className="fa fa-angle-right" />;
		return <RBCarousel
              animation={true}
              autoplay={false}
              slideshowSpeed={2000}
              defaultActiveIndex={0}
              leftIcon={leftIcon}
              rightIcon={rightIcon}
            >
            <div class="background item-1">
            	<div class="item bg-parallax">
                  <div class="slider-content">
                      <div class="container">
                          <div class="slider-text text-center">
                              <h3 class="slide-title"><span>Secure</span> and <span>Easy Way</span><br/> To Bitcoin</h3>
                              <p>
                                  <a href="about.html" class="slider btn btn-primary">LEARN MORE</a>
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            
            <div class="background item-2">
              <div class="item bg-parallax">
                  <div class="slider-content">
                      <div class="col-md-12">
                          <div class="container">
                              <div class="slider-text text-center">
                                  <h3 class="slide-title"><span>Bitcoin</span> Exchange <br/>You can <span>Trust</span> </h3>
                                  <p>
                                      <a href="pricing.html" class="slider btn btn-primary">OUR PRICES</a>
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            </RBCarousel>
	}
}