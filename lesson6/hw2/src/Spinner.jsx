import React from 'react';

const Spinner = (props) => {
  return (
    <span
      class="spinner"
      style={{ width: props.size, height: props.size }}
    ></span>
  );
};

export default Spinner;
