import React, { Component } from "react";

class Substract extends Component {
  state = {
    num1: 0,
    num2: 0
  };
  onSubmit = () => {
    this.props.showResult(`Substraction of ${this.state.num1} and ${
      this.state.num2
    } is : 
          ${parseFloat(this.state.num1) - parseFloat(this.state.num2)}`);
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
          <button onClick={() => this.onSubmit()}>Substract</button>
        </div>
      </div>
    );
  }
}

export default Substract;
