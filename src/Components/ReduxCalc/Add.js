import React, { Component } from "react";
import { connect } from "react-redux";
import { addCalculator } from "../../Store/ReduxCalc/actionCreator";

class Add extends Component {
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
            onClick={() => this.props.addCalculator({ num1: num1, num2: num2 })}
          >
            ADD
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addCalculator: data => {
      dispatch(addCalculator(data));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Add);
