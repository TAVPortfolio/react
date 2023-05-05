import React from 'react';
import moment from 'moment';

const formatDate = (date) => moment(date).format('DD MMM YY');

function Profile(props) {
  return (
    <div className="profile">
      <h1 className="profile__name">
        {`${props.user.firstName} ${props.user.lastName}`}
      </h1>
      <div className="profile__birth">{`Was born ${formatDate(
        props.user.birthDate
      )} in ${props.user.birthPlace}`}</div>
    </div>
  );
}

export default Profile;
