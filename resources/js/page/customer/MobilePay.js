"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const action_1 = require("../../store/action");
const react_redux_1 = require("react-redux");
const utils_1 = require("../../utils");
class MobilePay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenTelecomId: null,
        };
    }
    componentWillMount() {
        if (this.props.mobile.notLoad) {
            this.props.dispatch(action_1.mobileActions.getTelecom());
        }
    }
    chooseTelecom(id) {
        this.setState({
            chosenTelecomId: id,
        });
    }
    pay(e) {
        e.preventDefault();
        this.props.dispatch(action_1.servicesActions.payMobileCard(this.state.chosenTelecomId, parseInt(this.denomination.value)));
    }
    render() {
        let telecoms = this.props.mobile.telecoms;
        let denominations = [10000, 20000, 30000, 50000, 100000, 200000, 300000, 500000, 1000000];
        return React.createElement("div", null,
            React.createElement("div", { className: "wrapper mobile-pay" },
                React.createElement("div", { className: "title" }, "Choose a telecom company"),
                React.createElement("div", { className: "telecom-list" }, telecoms.map(telecom => React.createElement("div", { onClick: () => this.chooseTelecom(telecom.id), id: telecom.id, class: "telecom" + (this.state.chosenTelecomId == telecom.id ? " active" : "") },
                    React.createElement("div", { class: "avatar" },
                        React.createElement("img", { class: "telecom-avatar", src: "resources/images/telecoms/" + telecom.name.toLowerCase() + ".png" }))))),
                React.createElement("form", { class: "content" },
                    React.createElement("div", { class: "form-group" },
                        React.createElement("label", { class: "control-label no-lh", htmlFor: "denomination" }, "Denomination"),
                        React.createElement("div", { class: "input-wrap" },
                            React.createElement("div", { id: "denomination", class: "denomination" },
                                React.createElement("fieldset", null,
                                    React.createElement("select", { class: "form-control", ref: input => this.denomination = input },
                                        React.createElement("option", { key: "0", defaultValue: "0" }, "Value"),
                                        denominations.map(denomination => React.createElement("option", { key: denomination, value: denomination.toString() }, utils_1.toMoneyFormat(denomination) + "đ"))))))),
                    this.props.pay.error ?
                        React.createElement("div", { class: "form-group" },
                            React.createElement("div", { class: "form-message" },
                                React.createElement("span", { className: "error" }, this.props.pay.error)))
                        : this.props.pay.paying ?
                            React.createElement("div", { class: "form-group" },
                                React.createElement("div", { class: "form-message" },
                                    React.createElement("span", { className: "info" }, "Processing...")))
                            : this.props.pay.payed ?
                                React.createElement("div", { class: "form-group" },
                                    React.createElement("label", { class: "control-label" }, "Code"),
                                    React.createElement("div", { class: "input-wrap" },
                                        React.createElement("input", { disabled: true, defaultValue: this.props.pay.code, class: "form-control" })),
                                    React.createElement("div", { class: "form-message" },
                                        React.createElement("span", { className: "success" }, "Successfully")))
                                : React.createElement("span", null),
                    React.createElement("div", { class: "form-group" },
                        React.createElement("div", { class: "input-wrap margin" },
                            React.createElement("button", { onClick: this.pay.bind(this), type: "submit", class: "btn btn-info btn-block btn-update" }, "Pay"))))));
    }
}
function mapStateToProps(state) {
    const { mobile } = state;
    const pay = state.services.mobile;
    return {
        mobile,
        pay,
    };
}
exports.default = react_redux_1.connect(mapStateToProps)(MobilePay);
