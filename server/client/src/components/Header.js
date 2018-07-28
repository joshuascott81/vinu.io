import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    console.log(this.props.auth);
    switch (this.props.auth) {
      case null:
        return (
          <a className="nav-link">
            Signing in... <span className="sr-only">(current)</span>
          </a>
        );
      case false:
        return (
          <a className="nav-link" href="/auth/google">
            Sign in with Google <span className="sr-only">(current)</span>
          </a>
        );
      default:
        return (
          <a className="nav-link" href="/api/logout">
            Logout <span className="sr-only">(current)</span>
          </a>
        );
    }
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Vinu
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">{this.renderContent()}</li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
