import React = require("react");
import TopPanel from "../common/TopPanel";
import Slider from "./Slider";
import Feature from "./Feature";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class HomePage extends React.Component<{dispatch, history }, {}> {

	render() {
		return <div>
			<TopPanel/>
			<Slider/>
			<Feature/>
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