import React = require("react");
import TopPanel from "../common/TopPanel";
import Slider from "./Slider";
import Feature from "./Feature";

export default class HomePage extends React.Component<{}, {}> {
	render() {
		return <div>
			<TopPanel/>
			<Slider/>
			<Feature/>
		</div>
	}
}
