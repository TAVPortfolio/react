import React, { Component } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  update = (event) => {
    const inputValue = event.target.value;
    this.setState({ inputValue });
  };

  filtering = () => {
    const { users } = this.props;
    const { inputValue } = this.state;

    if (inputValue === '') {
      return users;
    }

    const filteredUsers = users.filter((user) =>
      user.name.toUpperCase().includes(inputValue.toUpperCase())
    );

    return filteredUsers;
  };

  render() {
    const filteredUsers = this.filtering();
    const sortingCount = filteredUsers.length;

    return (
      <div>
        <div className="filter">
          <Filter
            filterText={this.state.inputValue}
            count={sortingCount}
            onChange={this.update}
          />
        </div>
        <ul className="users">
          {filteredUsers.map((user) => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
