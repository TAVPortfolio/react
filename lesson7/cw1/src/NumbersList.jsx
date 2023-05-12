import React from 'react';

const NumbersList = ({ num }) => {
  return (
    <ul>
      {num.map((numElem) => (
        <li key={numElem}>{numElem}</li>
      ))}
    </ul>
  );
};

export default NumbersList;
