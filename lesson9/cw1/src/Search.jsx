import React, { Component } from 'react';

class Search extends Component {
  state = {
    value: '',
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  search = (e) => {
    e.preventDefault();
    alert(`Search text: ${this.state.value}`);
  };

  render() {
    return (
      <form className="search" onSubmit={this.search}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          className="search__input"
        />
        <button type="submit" className="search__button">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
