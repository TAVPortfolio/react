import React, { useState, useEffect, useCallback } from 'react';
import UserPropfile from './UserProfile.jsx';
import UserMenu from './UserMenu.jsx';

const App = ({ userId }) => {
  const [userData, setUserData] = useState(null);

  const fetchUserData = useCallback(async () => {
    const userUrl = `https://api.github.com/users/${userId}`;
    const response = await fetch(userUrl);
    const userData = await response.json();
    setUserData(userData);
  }, [userId]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return (
    <div className="page">
      <header className="header">
        <UserMenu userData={userData} />
      </header>
      <div className="user">
        <UserPropfile userData={userData} />
      </div>
    </div>
  );
};

export default App;
