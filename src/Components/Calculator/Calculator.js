import React, { Component } from "react";
import Add from "./Add";
import Substract from "./Substract";
import Divide from "./Divide";
import Multiply from "./Multiply";
import Result from "./Result";

class Calculator extends Component {
  state = {
    resultData: ""
  };
  showResult = resultData => {
    this.setState({ resultData });
  };
  render() {
    const { resultData } = this.state;
    return (
      <div className="calculator-container">
        <div className="calculate">
          <Add showResult={this.showResult} />
          <Substract showResult={this.showResult} />
          <Divide showResult={this.showResult} />
          <Multiply showResult={this.showResult} />
        </div>
        <div className="results">
          <Result data={resultData} />
        </div>
      </div>
    );
  }
}

export default Calculator;
