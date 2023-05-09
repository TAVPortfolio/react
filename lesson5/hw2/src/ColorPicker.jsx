import React, { Component } from 'react';

const CORAL = 'Coral';
const AQUA = 'Aqua';
const BISQUE = 'Bisque';

class ColorPicker extends Component {
  setNameColor = (nameColor) => {
    document.querySelector('.picker__title').textContent = nameColor;
  };
  mouseLeave = () => {
    return (document.querySelector('.picker__title').textContent = '');
  };

  render() {
    return (
      <div>
        <div className="picker__title"></div>
        <div>
          <button
            onMouseEnter={() => this.setNameColor(CORAL)}
            onMouseLeave={this.mouseLeave}
            className="picker__button picker__button_coral"
          ></button>
          <button
            onMouseEnter={() => this.setNameColor(AQUA)}
            onMouseLeave={this.mouseLeave}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            onMouseEnter={() => this.setNameColor(BISQUE)}
            onMouseLeave={this.mouseLeave}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
