import React, { useState } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

const UsersList = ({ users }) => {
  const [inputValue, setInputValue] = useState('');

  const filteredUsers = users.filter((user) =>
    user.name.toUpperCase().includes(inputValue.toUpperCase())
  );

  return (
    <div>
      <div className="filter">
        <Filter
          filterText={inputValue}
          count={filteredUsers.length}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </div>
      <ul className="users">
        {filteredUsers.map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
