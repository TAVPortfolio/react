import React, { Component } from 'react';
// work
class GoodButton extends Component {
  handleClick(e) {
    console.log();
    alert(e.target.textContent);
  }
  render() {
    return (
      <button className="fancy-button" onClick={this.handleClick}>
        Click me!
      </button>
    );
  }
}

export default GoodButton;
