import React, { Component } from 'react';

class Expand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleBtn = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleBtn}>
            {this.state.isOpen ? (
              <i class="fa-solid fa-chevron-up" />
            ) : (
              <i class="fa-solid fa-chevron-down" />
            )}
          </button>
        </div>
        {this.state.isOpen ? (
          <div className="expand__content">{this.props.children}</div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Expand;
