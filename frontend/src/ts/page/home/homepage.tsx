import React = require("react");
import TopPanel from "../common/TopPanel";
import Slider from "./Slider";
import Feature from "./Feature";
import { connect } from "react-redux";

class HomePage extends React.Component<{}, {}> {
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

export default connect(mapStateToProps)(HomePage);