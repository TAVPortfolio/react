import React, { Component } from 'react';
import Greeting from './Greeting';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handelLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };
  handelLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };
  render() {
    let button;

    if (!this.state.isLoggedIn) {
      button = (
        <button className="login btn" onClick={this.handelLogin}>
          Login
        </button>
      );
    } else {
      button = (
        <button className="logout btn" onClick={this.handelLogout}>
          Logout
        </button>
      );
    }

    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div>{button}</div>
      </div>
    );
  }
}

export default Auth;
