import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <Greeting
    firstName="John"
    lastName="Doe"
    birthDate="2000-03-01T00:00:11.666Z"
  />,
  rootElement
);
