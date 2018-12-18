import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({});

class Popup extends Component {
  render() {
    const { data } = this.props;
    console.log("pop up data", data);
    return (
      <div className="popup">
        <div>
          <img src={data.url} alt="view" />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Popup);
