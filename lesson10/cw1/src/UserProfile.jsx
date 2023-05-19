import React from 'react';

const UserProfile = ({ userData }) => {
  if (!userData) {
    return null;
  }
  const { name, location, avatar_url } = userData;

  return (
    <>
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </>
  );
};

export default UserProfile;
