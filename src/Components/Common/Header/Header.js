import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

class Header extends Component {
  static propTypes = {
    headerTitle: PropTypes.string.isRequired
  };

  render() {
    const { headerTitle, appName } = this.props;
    return (
      <div className="header">
        <div className="app-title">
          {appName} | {headerTitle}
          <Helmet>
            <title>
              {appName} | {headerTitle}
            </title>
          </Helmet>
        </div>
        <div className="add">
          <Link to="/calculator">Calculator</Link>
        </div>
        <div className="add">
          <Link to="/reduxcalc">Redux Calculator</Link>
        </div>
        <div className="home-header">
          <Link to="/add">+</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  headerTitle: state.header.title,
  appName: state.header.appName
});

export default connect(
  mapStateToProps,
  null
)(Header);
