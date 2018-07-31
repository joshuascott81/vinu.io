import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import ProfileNew from "./profile/ProfileNew";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/profile/create" component={ProfileNew} />

            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
