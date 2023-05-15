import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <div>
        <button className="btn" onClick={this.toggle}>
          Visible
        </button>
        <div className="clock-container">
          {this.state.visible && <Clock offset={0} location="London" />}
          {this.state.visible && <Clock offset={2} location="Kyiv" />}
          {this.state.visible && <Clock offset={-5} location="New York" />}
        </div>
      </div>
    );
  }
}

export default App;
