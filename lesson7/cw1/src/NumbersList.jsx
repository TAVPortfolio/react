import React from 'react';

const NumbersList = ({ numbers }) => {
  return (
    <ul>
      {numbers.map((numElem) => (
        <li key={numElem}>{numElem}</li>
      ))}
    </ul>
  );
};

export default NumbersList;
