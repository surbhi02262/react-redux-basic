import React, { Component } from "react";
import Add from "./Add";
import Substract from "./Substract";
import Divide from "./Divide";
import Multiply from "./Multiply";
import Result from "./Result";
import { connect } from "react-redux";

class Calculator extends Component {
  render() {
    const { resultData } = this.props;
    return (
      <div className="calculator-container">
        <div className="calculate">
          <Add />
          <Substract />
          <Divide />
          <Multiply />
        </div>
        <div className="results">
          <Result resultData={resultData} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { calc } = state;
  return {
    resultData: calc.resultdata
  };
};
export default connect(
  mapStateToProps,
  null
)(Calculator);
