import React, { Component } from "react";
import Home from "./Home/Home";
import Header from "./Common/Header/Header";
import { Switch, Route } from "react-router-dom";
import Footer from "./Common/Footer/Footer";
import "../Styles/App.css";
import Add from "./Add/Add";
import Calculator from "./Calculator/Calculator";
import ReduxCalc from "../Components/ReduxCalc/Calculator";
class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/calculator" component={Calculator} />
          <Route exact path="/reduxcalc" component={ReduxCalc} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
