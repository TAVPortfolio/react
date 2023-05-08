import React from 'react';
import Clock from './Clock';

const App = () => {
  return (
    <>
      <Clock location="New York" offset={-4} />
      <Clock location="Kyiv" offset={2} />
      <Clock location="Warsaw" offset={1} />
    </>
  );
};

export default App;
