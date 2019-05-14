import React = require("react");
import { Link } from "react-router-dom";

export default class Directory extends React.Component<{location: string}, {}> {
    props;

    render() {
        let location = this.props.location.replace(/\/$/, '');
        let titles = location.split("/");
        let link = "";
        const texts = {
            "": "Home",
            "customer": "Customer",
            "account": "Account Info",
            "notification": "Notification",
            "history": "Traction History",
            "services": "Services"
        };

        return <div class="directory">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <ol class="title">
                            {titles.map(title => {
                                link += title + "/";
                                return <li><Link to={link}>{texts[title]}</Link></li>
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    }
}