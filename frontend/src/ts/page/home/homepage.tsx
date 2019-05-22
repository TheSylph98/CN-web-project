import React = require("react");
import TopPanel from "../common/TopPanel";
import Slider from "./Slider";
import Feature from "./Feature";
import Guide from "./Guide";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Footer from "../common/Footer";

class HomePage extends React.Component<{dispatch, history }, {}> {

	render() {
		return <div>
			<TopPanel/>
			<Slider/>
			<Feature/>
			<Guide/>
			<Footer/>
		</div>
	}
}

function mapStateToProps(state) {
	const {user } = state;
	return {
		user
	};
}

export default connect(mapStateToProps)(withRouter(HomePage));