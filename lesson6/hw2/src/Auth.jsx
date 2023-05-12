import React, { Component } from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isProcessing: true,
      isSpinner: false,
    };
    this.spinnerWidth = {
      size: '100px',
    };
  }
  setLogin = () => {
    this.setState({
      isProcessing: true,
    });
  };

  setSpinnerOn = () => {
    this.setState({
      isSpinner: true,
      isProcessing: false,
    });
    setTimeout(() => {
      this.setState({
        isSpinner: false,
      });
    }, 2000);
  };

  render() {
    if (!this.state.isProcessing && !this.state.isSpinner) {
      return <Logout onLogout={this.setLogin} />;
    }

    if (this.state.isSpinner) {
      return <Spinner size={this.spinnerWidth.size} />;
    }

    return <Login onLogin={this.setSpinnerOn} />;
  }
}

export default Auth;
