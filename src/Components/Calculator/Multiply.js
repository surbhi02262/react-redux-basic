import React, { Component } from "react";

class Multiply extends Component {
  state = {
    num1: 0,
    num2: 0
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = () => {
    if (this.state.num1 === 0 || this.state.num2 === 0) {
      this.props.showResult(`You cannot multiply with 0 `);
    } else {
      this.props.showResult(`multiplication of ${this.state.num1}  and ${
        this.state.num2
      } is : 
    ${parseFloat(this.state.num1) * parseFloat(this.state.num2)}
    `);
    }
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
          <button onClick={() => this.onSubmit()}>Multiply</button>
        </div>
      </div>
    );
  }
}

export default Multiply;
