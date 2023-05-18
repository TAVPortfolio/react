import React, { Component } from 'react';
import UserForm from './UserForm.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  createUser = (obj) => {
    console.log(Object.values(obj));
  };
  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;
