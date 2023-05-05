import React from 'react';

function Greeting(props) {
  const today = new Date();
  const bd = new Date(props.birthDate);
  const yearDiff = today.getFullYear() - bd.getFullYear();
  const monthDiff = today.getMonth() + 1 - (bd.getMonth() + 1);
  const age = monthDiff > 0 ? yearDiff : yearDiff - 1;

  return (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I am ${age} years old`}
    </div>
  );
}

export default Greeting;
