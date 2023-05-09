import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: 'Off',
    };
  }
  toggleFunc = () => {
    this.setState({
      toggle:
        this.state.toggle === 'Off'
          ? (this.state.toggle = 'On')
          : (this.state.toggle = 'Off'),
    });
  };
  render() {
    return (
      <div className="toggler" onClick={this.toggleFunc}>
        {this.state.toggle}
      </div>
    );
  }
}

export default Toggler;
