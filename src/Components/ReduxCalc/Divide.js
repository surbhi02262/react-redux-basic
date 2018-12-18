import React, { Component } from "react";
import { connect } from "react-redux";
import { dividecalc } from "../../Store/ReduxCalc/actionCreator";
class Divide extends Component {
  state = {
    num1: 0,
    num2: 0
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { num1, num2 } = this.state;
    return (
      <div className="container">
        <div className="input-container">
          <input
            type="number"
            value={num1}
            name="num1"
            onChange={e => this.onChange(e)}
          />
        </div>
        <div className="input-container">
          <input
            type="number"
            value={num2}
            name="num2"
            onChange={e => this.onChange(e)}
          />
        </div>
        <div className="btn-container">
          <button
            onClick={() => this.props.dividecalc({ num1: num1, num2: num2 })}
          >
            Divide
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    dividecalc: data => {
      dispatch(dividecalc(data));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Divide);
